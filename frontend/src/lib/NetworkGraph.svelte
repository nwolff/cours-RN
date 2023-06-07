<script lang="ts">
	import { onMount } from 'svelte';
	import { DefaultMap, hsv2rgb } from './pythonish';
	import { DenseNetwork, LayerSpec, allLinks } from '$lib/network-layout';
	import type { Link, LinkFilter } from '$lib/network-layout';
	import type { LayerVariable } from '@tensorflow/tfjs';
	import plotly from 'plotly.js-dist';

	let plotElement: any;

	export let activations: any;
	export let weights: LayerVariable[] | undefined;
	export let linkFilter: LinkFilter = allLinks;

	$: drawGraph(activations, weights, linkFilter);

	const network = getNetwork();

	function getNetwork() {
		return new DenseNetwork([
			new LayerSpec("Couche d'entrée", 28 * 28, 8, 14 * 7),
			new LayerSpec('Couche cachée 1', 32, 18),
			new LayerSpec('Couche cachée 2', 32, 18),
			new LayerSpec('Couche de sortie', 10, 18, 16)
		]);
	}

	onMount(() => {
		drawGraph(activations, weights, linkFilter);
	});

	function color_for_activation(activation: number): string {
		if (!activation) {
			// A small optimization
			return '#FFFFFF';
		}
		const saturation = Math.min(1, activation);
		const [r, g, b] = hsv2rgb(0.66, saturation, 1);
		return `rgb(${r},${g},${b})`;
	}

	function neuronTraces(network: DenseNetwork) {
		const traces = [];
		for (const layer of network.layers) {
			const neurons = layer.neurons;
			const trace = {
				x: neurons.map((n) => n.x),
				y: neurons.map((n) => n.y),
				text: neurons.map((n) => n.activation),
				name: layer.name,
				mode: 'markers',
				marker: {
					color: neurons.map((n) => color_for_activation(n.activation)),
					symbol: 'circle',
					line: { width: 0.7 },
					size: layer.marker_size
				},
				// Ref: https://plotly.com/python/hover-text-and-formatting/
				hovertemplate: '%{text:.0%}' + '<extra></extra>'
			};
			traces.push(trace);
		}
		return traces;
	}

	function color_for_weight(weight: number): string {
		// Divergent color ramps away from zero.
		const [r, g, b] = hsv2rgb(weight > 0 ? 0.66 : 0, Math.abs(weight), 0.9);
		return `rgb(${r},${g},${b})`;
	}

	function width_for_weight(weight: number): number {
		return Math.abs(weight);
	}

	function linkTraces(links: Link[]) {
		// To draw each line exactly how we want it we need to return one scatter-plot per line, and displaying that is super slow.
		// Instead we group the lines into buckets and draw all the lines in the same bucket with the same color and width and
		// make that a single scatter-plot.
		// By varying the number of buckets one can balance precision of display with speed of rendering.

		const stride = 20; // the number of buckets is the range of weights times the stride

		// Each bucket contains a list of coordinates with holes.
		// See the gaps section of:  https://plotly.com/python/line-charts/
		const edge_x_buckets = new DefaultMap(() => []);
		const edge_y_buckets = new DefaultMap(() => []);
		for (const link of links) {
			const bucket = Math.round(link.weight * stride);
			const edge_x = edge_x_buckets.get(bucket);
			const edge_y = edge_y_buckets.get(bucket);
			edge_x.push(link.a.x);
			edge_y.push(link.a.y);
			edge_x.push(link.b.x);
			edge_y.push(link.b.y);
			edge_x.push(null);
			edge_y.push(null);
		}

		const traces = [];
		for (const bucket of edge_x_buckets.keys()) {
			const trace = {
				x: edge_x_buckets.get(bucket),
				y: edge_y_buckets.get(bucket),
				mode: 'lines',
				hoverinfo: 'skio',
				line: {
					width: width_for_weight(bucket / stride),
					color: color_for_weight(bucket / stride)
				}
			};
			traces.push(trace);
		}

		return traces;
	}

	const graphLayout = {
		xaxis: {
			visible: false
		},
		yaxis: {
			visible: false
		},
		showlegend: false,
		height: 700,
		font: { size: 16, color: 'white' },
		margin: { t: 0, l: 0, r: 0, b: 0 }
	};

	const graphConfig = {
		displayModeBar: false,
		scrollZoom: true
		// responsive: true,
	};

	function drawGraph(
		activations: number[][],
		weights: LayerVariable[] | undefined,
		linkFilter: LinkFilter
	) {
		if (!plotElement) {
			console.log('no plotElement');
			return;
		}

		if (activations) {
			network.setActivations(activations);
		}

		const traces = [];
		if (weights) {
			const kernelWeights = weights.filter((l) => l.originalName.endsWith('kernel'));
			const links = network.links(kernelWeights, linkFilter);
			traces.push(linkTraces(links));
		}
		traces.push(neuronTraces(network));
		plotly.newPlot('network-graph', traces.flat(), graphLayout, graphConfig);
	}
</script>

<div bind:this={plotElement} id="network-graph" class="network-graph" />
