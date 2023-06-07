<script lang="ts">
	import Drawbox from '$lib/Drawbox.svelte';
	import DistributionChart from '$lib/DistributionChart.svelte';
	import NetworkGraph from '$lib/NetworkGraph.svelte';
	import type { Link } from '$lib/network-layout';
	import { Space, Grid, Text, Divider, Title } from '@svelteuidev/core';
	import * as tf from '@tensorflow/tfjs';
	import { modelStore, twoHiddenLayersModelStore } from '../../stores';

	let prediction: number[];
	let twoHiddenLayersPrediction: number[];
	let activations: number[][];

	$: weights = $modelStore?.weights;

	function handleDrawnImage(event: { detail: { image: ImageData } }) {
		console.log('got image');
		const image = event.detail.image;
		const pixels = tf.browser.fromPixels(image, 1);

		doPrediction(pixels);
	}

	// The feature model lets us retrieve the activations of intermediate layers
	function toFeatureModel(model: tf.Sequential) {
		const outputs = [];
		for (const layer of model.layers) {
			outputs.push(layer.output);
		}
		return tf.model({ inputs: model.input, outputs: outputs.flat() });
	}

	function doPrediction(pixels: tf.Tensor) {
		// From: https://github.com/tensorflow/tfjs-examples/blob/master/webcam-transfer-learning/index.js
		const processedImage = tf.tidy(() =>
			tf
				.reshape(pixels, [1, 28 * 28])
				.toFloat()
				.div(255)
				.mul(-1)
				.add(1)
		);

		twoHiddenLayersPrediction = tf
			.squeeze($twoHiddenLayersModelStore.predict(processedImage))
			.dataSync();
		// console.log('two hidden layers prediction', twoHiddenLayersPrediction);

		const activationsTensor = toFeatureModel($modelStore).predict(processedImage);
		activations = [processedImage, ...activationsTensor].map((x) => tf.squeeze(x).dataSync());
		// console.log("processed image", processedImage);

		prediction = activations[activations.length - 1];
		// console.log('prediction', prediction);
	}

	function linkFilterNoActivations(links: Link[]) {
		const length = links.length;
		if (length <= 500) {
			return links;
		}
		const sortedLinks = links.toSorted(
			(l1: Link, l2: Link) => Math.abs(l2.weight) - Math.abs(l1.weight)
		);
		return sortedLinks.slice(0, Math.min(500, 0.1 * length));
	}

	function linkFilterWhenActivations(links: Link[]) {
		// Too much code repetition.
		const candidates = links.filter((link) => Math.abs(link.a.activation * link.weight) > 0.02);
		const length = candidates.length;
		if (length <= 500) {
			return candidates;
		}
		const sortedCandidates = candidates.toSorted(
			(l1: Link, l2: Link) =>
				Math.abs(l2.a.activation * l2.weight) - Math.abs(l2.a.activation * l1.weight)
		);
		return sortedCandidates.slice(0, Math.min(500, 0.1 * length));
	}

	function linkFilter(links: Link[]) {
		if (links.find((link) => link.a.activation)) {
			// console.log('using when activations filter');
			return linkFilterWhenActivations(links);
		} else {
			// console.log('using no activations filter');
			return linkFilterNoActivations(links);
		}
	}
</script>

<Grid cols={4}>
	<Grid.Col span={1}>
		<Drawbox on:imageData={handleDrawnImage} />
		<Space h="lg" />

		<Divider />

		<Title order={4}>Modèle qui apprend</Title>
		<Space h="lg" />
		<DistributionChart distribution={prediction} />
		<Space h="lg" />

		<Divider />

		<Title order={4}>Modèle déja entraîné</Title>
		<Space h="lg" />
		<DistributionChart distribution={twoHiddenLayersPrediction} color="orange" />
	</Grid.Col>

	<Grid.Col span={3}>
		<NetworkGraph {activations} {weights} {linkFilter} />
	</Grid.Col>
</Grid>
