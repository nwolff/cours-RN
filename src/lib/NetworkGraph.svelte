<script lang="ts">
	import type { DenseNetwork, Link, Layer } from './NetworkShape';
	import type { LayerVariable } from '@tensorflow/tfjs';
	import { onMount } from 'svelte';
	import { DefaultMap, zip2 } from './utils';
	import plotly from 'plotly.js-dist';
	import { hsv2rgb } from './colorconversions';

	let plotElement: HTMLElement;

	type LinkFilter = (links: Link[]) => Link[];

	export function allLinks(links: Link[]) {
		return links;
	}

	export let networkShape: DenseNetwork;
	export let activations: number[][];
	export let weights: LayerVariable[];
	export let linkFilter: LinkFilter = allLinks;

	$: drawGraph(networkShape, activations, weights, linkFilter);

	onMount(() => {
		drawGraph(networkShape, activations, weights, linkFilter);
	});

	function neuron_color(activation: number): string {
		if (!activation) {
			// A small optimization
			return '#FFFFFF';
		}
		const saturation = Math.min(1, activation);
		const [r, g, b] = hsv2rgb(0.66, saturation, 1);
		return `rgb(${r},${g},${b})`;
	}

	function neuronTraces(networkShape: DenseNetwork, activations: number[][] | null) {
		const traces = [];
		for (const [i, layer] of networkShape.layers.entries()) {
			const layerActivations = activations?.[i];
			const trace = {
				x: layer.neurons.map((n) => n.x),
				y: layer.neurons.map((n) => n.y),
				text: layerActivations,
				name: layer.name,
				mode: 'markers',
				marker: {
					// Without array.from mapping doesn't work properly
					color: layerActivations
						? Array.from(layerActivations).map((a) => neuron_color(a))
						: 'white',
					symbol: 'circle',
					line: { width: 0.7 },
					size: layer.marker_size
				},
				hovertemplate: '<extra></extra>'
			};
			if (layerActivations) {
				// https://plotly.com/python/hover-text-and-formatting/
				trace.hovertemplate = '%{text:.0%}' + trace.hovertemplate;
			}
			traces.push(trace);
		}
		return traces;
	}

	function link_color(weight: number): string {
		// Red and blue ramps depending on the sign
		const [r, g, b] = hsv2rgb(weight > 0 ? 0.66 : 0, Math.abs(weight), 0.9);
		return `rgb(${r},${g},${b})`;
	}

	function link_width(weight: number): number {
		return Math.abs(weight * 1.2);
	}

	function linkTraces(links: Link[]) {
		// To draw each line exactly how we want it we need to return one scatter-plot per line,
		// and displaying that is super slow.
		// Instead we group the lines into buckets and draw all the lines in the same bucket
		// with the same color and width and make that a single scatter-plot.
		// By varying the number of buckets one can balance precision of display with rendering speed.

		const bucket_size = 20; // the number of buckets is the range of weights times the bucket_size

		// Each bucket contains a list of coordinates with gaps (nulls).
		// See the gaps section of:  https://plotly.com/python/line-charts/
		const edge_x_buckets = new DefaultMap<number, any>(() => []);
		const edge_y_buckets = new DefaultMap<number, any>(() => []);
		for (const link of links) {
			const bucket = Math.round(link.weight * bucket_size);
			const edge_x_bucket = edge_x_buckets.get(bucket);
			const edge_y_bucket = edge_y_buckets.get(bucket);
			edge_x_bucket.push(link.a.x);
			edge_y_bucket.push(link.a.y);
			edge_x_bucket.push(link.b.x);
			edge_y_bucket.push(link.b.y);
			edge_x_bucket.push(null);
			edge_y_bucket.push(null);
		}

		const traces = [];
		for (const bucket of edge_x_buckets.keys()) {
			const trace = {
				x: edge_x_buckets.get(bucket),
				y: edge_y_buckets.get(bucket),
				mode: 'lines',
				hoverinfo: 'skio',
				line: {
					width: link_width(bucket / bucket_size),
					color: link_color(bucket / bucket_size)
				}
			};
			traces.push(trace);
		}

		return traces;
	}

	const defaultGraphLayout = {
		xaxis: {
			visible: false
		},
		yaxis: {
			visible: false,
			scaleanchor: 'x'
		},
		showlegend: false,
		font: { size: 18, color: 'black' },
		margin: { t: 0, l: 0, r: 0, b: 0 }
	};

	const graphConfig = {
		displayModeBar: false,
		scrollZoom: true,
		responsive: true
	};

	function makeOutputAnnotations(
		outputLayer: Layer
	): { x: number; y: number; yanchor: string; yshift: number; text: string; showarrow: boolean }[] {
		// https://plotly.com/javascript/text-and-annotations/

		const annotations = [];
		if (outputLayer.labels) {
			for (const [neuron, label] of zip2(outputLayer.neurons, outputLayer.labels)) {
				annotations.push({
					x: neuron.x,
					y: neuron.y,
					yanchor: 'top',
					yshift: -10,
					text: label,
					showarrow: false
				});
			}
		}
		return annotations;
	}

	function drawGraph(
		networkShape: DenseNetwork,
		activations: number[][],
		weights: LayerVariable[],
		linkFilter: LinkFilter
	) {
		if (!plotElement) {
			console.log('no plotElement');
			return;
		}

		const traces = [];

		traces.push(...neuronTraces(networkShape, activations));

		// We don't want the bias weights when generating the links
		const kernelWeights = weights.filter((l) => l.originalName.endsWith('kernel'));

		const links = networkShape.getLinks(kernelWeights, activations);
		const filteredLinks = linkFilter(links);
		traces.push(...linkTraces(filteredLinks));

		const graphLayout = JSON.parse(JSON.stringify(defaultGraphLayout));
		graphLayout.annotations = makeOutputAnnotations(networkShape.outputLayer);

		plotly.newPlot('network-graph', traces, graphLayout, graphConfig);
	}
</script>

<div bind:this={plotElement} id="network-graph" class="network-graph" style="height: 85vh" />
