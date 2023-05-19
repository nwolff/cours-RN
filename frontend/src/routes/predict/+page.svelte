<script lang="ts">
	import Drawbox from '$lib/Drawbox.svelte';

	import * as tf from '@tensorflow/tfjs';

	import { modelStore, pythonModelStore } from '../../stores';

	import { onMount } from 'svelte';

	import { Space } from '@svelteuidev/core';

	let tfvis;

	onMount(async () => {
		tfvis = await import('@tensorflow/tfjs-vis');
		await pythonModelStore.load();
	});

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
		const barchartData = [];
		for (const [index, value] of prediction.entries()) {
			barchartData.push({ index: index, value: value });
		}
		const surface = document.getElementById('prediction-js');
		tfvis.render.barchart(surface, barchartData, { fontSize: 15, height: 200, width: 400 });

		const predictionPython = tf.squeeze($pythonModelStore.predict(processedImage)).dataSync();
		const barchartDataPython = [];
		for (const [index, value] of predictionPython.entries()) {
			barchartDataPython.push({ index: index, value: value });
		}
		const surfacePython = document.getElementById('prediction-python');
		tfvis.render.barchart(surfacePython, barchartDataPython, {
			fontSize: 15,
			height: 200,
			width: 400,
			color: 'green'
		});
	}
</script>

<Drawbox on:imageData={handleDrawnImage} />

<Space h="lg" />

<div id="prediction-js" />

<Space h="lg" />

<div id="prediction-python" />
