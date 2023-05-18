<script lang="ts">
	import Drawbox from '$lib/Drawbox.svelte';

	import * as tf from '@tensorflow/tfjs';
	import * as tfvis from '@tensorflow/tfjs-vis';

	import { mnistDataStore, modelStore } from '../../stores';

	let processedImage: tf.Tensor;

	function handleDrawnImage(event: { detail: { image: ImageData } }) {
		console.log('got image');
		const image = event.detail.image;
		const pixels = tf.browser.fromPixels(image, 1);
		// https://github.com/tensorflow/tfjs-examples/blob/master/webcam-transfer-learning/index.js
		processedImage = tf.tidy(() =>
			tf
				.reshape(pixels, [1, 28 * 28])
				.toFloat()
				.div(255)
				.mul(-1)
				.add(1)
		);
		const prediction = tf.squeeze($modelStore.predict(processedImage)).dataSync();
		const surface = document.getElementById('prediction');
		const barchartData = [];
		for (const [index, value] of prediction.entries()) {
			barchartData.push({ index: index, value: value });
		}
		tfvis.render.barchart(surface, barchartData, { fontSize: 20 });
	}
</script>

<Drawbox on:imageData={handleDrawnImage} />

<div>{processedImage}</div>

<div id="prediction" />
