<script lang="ts">
	import type { VegaLiteSpec } from 'svelte-vega';
	import type { EmbedOptions } from 'vega-embed';
	import { VegaLite } from 'svelte-vega';

	export let labels: string[] = [];
	export let values: number[] = [];
	export let color = 'blue';

	$: barchartData = toData(labels, values);

	$: visualizationSpec = visualizationSpecFromColor(color);

	type BarchartData = {
		table: { label: string; value: number }[];
	};

	const defaultVisualizationSpec: VegaLiteSpec = {
		$schema: 'https://vega.github.io/schema/vega-lite/v5.json',
		width: 220,
		height: 110,
		data: {
			name: 'table'
		},
		mark: 'bar',
		encoding: {
			x: {
				field: 'label',
				type: 'nominal',
				sort: null,
				title: null,
				axis: { labelFontSize: 18, labelAngle: 0, ticks: false }
			},
			y: {
				field: 'value',
				type: 'quantitative',
				title: null,
				scale: { domain: [0, 1] },
				axis: null
			}
		}
	};

	const defaultOptions: EmbedOptions = { actions: false };

	function toData(labels: string[], values: number[]): BarchartData {
		const rows = [];
		for (const [i, label] of labels.entries()) {
			rows.push({ label: label, value: values[i] });
		}
		return { table: rows };
	}

	function visualizationSpecFromColor(color: string): VegaLiteSpec {
		const spec: VegaLiteSpec = JSON.parse(JSON.stringify(defaultVisualizationSpec));
		spec.encoding.color = { value: color };
		return spec;
	}
</script>

<VegaLite data={barchartData} spec={visualizationSpec} options={defaultOptions} />
