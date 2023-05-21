<script lang="ts">
	import type { VegaLiteSpec } from 'svelte-vega';
	import type { EmbedOptions } from 'vega-embed';
	import { VegaLite } from 'svelte-vega';

	type BarchartData = {
		table: { index: any; value: number }[];
	};

	export let distribution: number[] | null = null;

	export let color: string | null = null;

	$: barchartData = distributionToBarchartData(distribution);

	$: visualizationSpec = visualizationSpecFromColor(color);

	const defaultVisualizationSpec: VegaLiteSpec = {
		$schema: 'https://vega.github.io/schema/vega-lite/v5.json',
		width: 250,
		height: 100,
		data: {
			name: 'table'
		},
		mark: 'bar',
		encoding: {
			x: {
				field: 'index',
				type: 'nominal',
				title: null,
				axis: { labelFontSize: 14, labelAngle: 0, ticks: false }
			},
			y: {
				field: 'value',
				type: 'quantitative',
				title: null,
				scale: { domain: [0, 1] },
				axis: { labelFontSize: 14 }
			}
		}
	};

	const defaultOptions: EmbedOptions = { actions: false };

	function distributionToBarchartData(distribution: number[] | null): BarchartData {
		const rows = [];
		if (distribution) {
			for (const [index, value] of distribution.entries()) {
				rows.push({ index: index, value: value });
			}
		}
		return { table: rows };
	}

	function visualizationSpecFromColor(color: string | null): VegaLiteSpec {
		if (!color) {
			return defaultVisualizationSpec;
		}
		const spec: VegaLiteSpec = JSON.parse(JSON.stringify(defaultVisualizationSpec));
		spec.encoding.color = { value: color };
		return spec;
	}
</script>

<VegaLite data={barchartData} spec={visualizationSpec} options={defaultOptions} />
