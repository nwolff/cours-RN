<script lang="ts">
	import Drawbox from '$lib/Drawbox.svelte';
	import DistributionChart from '$lib/DistributionChart.svelte';
	import NetworkGraph from '$lib/NetworkGraph.svelte';
	import { Space, Grid } from '@svelteuidev/core';
	import * as tf from '@tensorflow/tfjs';
	import { modelStore, twoHiddenLayersModelStore } from '../../stores';

	let prediction: number[];
	let twoHiddenLayersPrediction: number[];

	$: weights = $twoHiddenLayersModelStore?.weights; // XXX: this should be our store.

	function handleDrawnImage(event: { detail: { image: ImageData } }) {
		console.log('got image');
		const image = event.detail.image;
		const pixels = tf.browser.fromPixels(image, 1);

		updateNetworkView(pixels);
		updateBarcharts(pixels);
	}

	function updateNetworkView(pixeis: tf.Tensor) {
		let activations = 'XXX This should be the activations in some form';
	}

	function updateBarcharts(pixels: tf.Tensor) {
		// From: https://github.com/tensorflow/tfjs-examples/blob/master/webcam-transfer-learning/index.js
		const processedImage = tf.tidy(() =>
			tf
				.reshape(pixels, [1, 28 * 28])
				.toFloat()
				.div(255)
				.mul(-1)
				.add(1)
		);

		prediction = tf.squeeze($modelStore.predict(processedImage)).dataSync();

		twoHiddenLayersPrediction = tf
			.squeeze($twoHiddenLayersModelStore.predict(processedImage))
			.dataSync();
	}
</script>

<Grid cols={4}>
	<Grid.Col span={1}>
		<Drawbox on:imageData={handleDrawnImage} />

		<Space h="lg" />

		<DistributionChart distribution={prediction} />

		<Space h="lg" />

		<DistributionChart distribution={twoHiddenLayersPrediction} color="orange" />
	</Grid.Col>

	<Grid.Col span={3}>
		<NetworkGraph {weights} />
	</Grid.Col>
</Grid>
