<script lang="ts">
	import Drawbox from '$lib/Drawbox.svelte';
	import * as tf from '@tensorflow/tfjs';
	import { modelStore, pythonModelStore } from '../../stores';
	import { Space } from '@svelteuidev/core';
	import type { VegaLiteSpec } from 'svelte-vega';
	import { VegaLite } from 'svelte-vega';

	let barchartData: Record<number, number>;
	let pythonBarchartData: Record<number, number>;

	function handleDrawnImage(event: { detail: { image: ImageData } }) {
		console.log('got image');
		const image = event.detail.image;
		const pixels = tf.browser.fromPixels(image, 1);
		// https://github.com/tensorflow/tfjs-examples/blob/master/webcam-transfer-learning/index.js
		const processedImage = tf.tidy(() =>
			tf
				.reshape(pixels, [1, 28 * 28])
				.toFloat()
				.div(255)
				.mul(-1)
				.add(1)
		);
		const prediction = tf.squeeze($modelStore.predict(processedImage)).dataSync();
		const rows = [];
		for (const [index, value] of prediction.entries()) {
			rows.push({ index: index, value: value });
		}
		barchartData = { table: rows };

		const predictionPython = tf.squeeze($pythonModelStore.predict(processedImage)).dataSync();
		let pythonRows = [];
		for (const [index, value] of predictionPython.entries()) {
			pythonRows.push({ index: index, value: value });
		}
		pythonBarchartData = { table: pythonRows };
	}

	const visualizationSpec: VegaLiteSpec = {
		$schema: 'https://vega.github.io/schema/vega-lite/v4.json',
		width: 350,
		height: 170,
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

	const pythonVisualizationSpec: VegaLiteSpec = JSON.parse(JSON.stringify(visualizationSpec));
	pythonVisualizationSpec.encoding.color = { value: 'green' };
</script>

<Drawbox on:imageData={handleDrawnImage} />

<Space h="lg" />

<VegaLite data={barchartData} spec={visualizationSpec} options={{ actions: false }} />

<Space h="lg" />

<VegaLite data={pythonBarchartData} spec={pythonVisualizationSpec} options={{ actions: false }} />
