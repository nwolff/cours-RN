<script lang="ts">
	import Drawbox from '$lib/Drawbox.svelte';
	import * as tf from '@tensorflow/tfjs';
	import { modelStore, twoHiddenLayersModelStore, leNetModelStore } from '../../stores';
	import { Space } from '@svelteuidev/core';
	import type { VegaLiteSpec } from 'svelte-vega';
	import { VegaLite } from 'svelte-vega';

	let barchartData: { table: { index: number; value: number }[] };
	let twoHiddenLayersBarchartData: { table: { index: number; value: number }[] };
	let leNetBarchartData: { table: { index: number; value: number }[] };

	function predictionToBarchartData(prediction: Float32Array) {
		const rows = [];
		for (const [index, value] of prediction.entries()) {
			rows.push({ index: index, value: value });
		}
		return { table: rows };
	}

	function handleDrawnImage(event: { detail: { image: ImageData } }) {
		console.log('got image');
		const image = event.detail.image;
		const pixels = tf.browser.fromPixels(image, 1);

		// From: https://github.com/tensorflow/tfjs-examples/blob/master/webcam-transfer-learning/index.js
		const processedImage = tf.tidy(() =>
			tf
				.reshape(pixels, [1, 28 * 28])
				.toFloat()
				.div(255)
				.mul(-1)
				.add(1)
		);
		const prediction = tf.squeeze($modelStore.predict(processedImage)).dataSync();
		barchartData = predictionToBarchartData(prediction);

		const twoHiddenLayersPrediction = tf
			.squeeze($twoHiddenLayersModelStore.predict(processedImage))
			.dataSync();
		twoHiddenLayersBarchartData = predictionToBarchartData(twoHiddenLayersPrediction);

		const leNetProcessedImage = tf.tidy(() =>
			tf
				.pad(pixels, [
					[2, 2],
					[2, 2],
					[0, 0]
				])
				.expandDims(0)
				.div(255)
				.mul(-1)
				.add(1)
		);

		const leNetPrediction = tf.squeeze($leNetModelStore.predict(leNetProcessedImage)).dataSync();
		leNetBarchartData = predictionToBarchartData(leNetPrediction);
	}

	const visualizationSpec: VegaLiteSpec = {
		$schema: 'https://vega.github.io/schema/vega-lite/v4.json',
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

	const twoHiddenLayersVisualisationSpec: VegaLiteSpec = JSON.parse(
		JSON.stringify(visualizationSpec)
	);
	twoHiddenLayersVisualisationSpec.encoding.color = { value: 'green' };

	const leNetVisualisationSpec: VegaLiteSpec = JSON.parse(JSON.stringify(visualizationSpec));
	leNetVisualisationSpec.encoding.color = { value: 'orange' };
</script>

<Drawbox on:imageData={handleDrawnImage} />

<Space h="lg" />

<VegaLite data={barchartData} spec={visualizationSpec} options={{ actions: false }} />

<Space h="lg" />

<VegaLite
	data={twoHiddenLayersBarchartData}
	spec={twoHiddenLayersVisualisationSpec}
	options={{ actions: false }}
/>

<Space h="lg" />

<VegaLite data={leNetBarchartData} spec={leNetVisualisationSpec} options={{ actions: false }} />
