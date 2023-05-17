<script lang="ts">
	import Drawbox from '$lib/Drawbox.svelte';

	import * as tf from '@tensorflow/tfjs';

	export let data;
	let model: tf.LayersModel = data.model;
	let prediction: tf.Tensor;
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
		const res = model.predict(processedImage);
		if (!Array.isArray(res)) {
			prediction = res;
		}
	}

</script>

<Drawbox on:imageData={handleDrawnImage} />

<div>{processedImage}</div>
<div>{prediction}</div>
