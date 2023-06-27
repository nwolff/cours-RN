<script lang="ts">
	import DrawBox from '$lib/DrawBox.svelte';
	import DistributionChart from '$lib/DistributionChart.svelte';
	import NetworkGraph from '$lib/NetworkGraph.svelte';
	import { Link } from '$lib/NetworkShape';
	import { Space, Grid, Divider, Title, Loader } from '@svelteuidev/core';
	import * as tf from '@tensorflow/tfjs';
	import { getNetworkShape, modelStore, twoHiddenLayersModelStore } from '../../stores';
	import { onMount } from 'svelte';

	const networkShape = getNetworkShape();
	const labels = networkShape.outputLayer.labels;
	let prediction: number[];
	let twoHiddenLayersPrediction: number[];
	let activations: number[][];

	let isLoading = true;

	$: weights = $modelStore?.weights;

	onMount(async () => {
		await twoHiddenLayersModelStore.load();
		await modelStore.load();
		isLoading = false;
	});

	function handleDrawnImage(event: { detail: { image: ImageData } }) {
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
		);

		twoHiddenLayersPrediction = tf
			.squeeze($twoHiddenLayersModelStore.predict(processedImage))
			.dataSync();

		const activationsTensor = toFeatureModel($modelStore).predict(processedImage);
		activations = [processedImage, ...activationsTensor].map((x) => tf.squeeze(x).dataSync());
		// console.log("processed image", processedImage);

		prediction = activations[activations.length - 1];
		// console.log('prediction', prediction);
	}

	function keepTopLinks(links: Link[]): Link[] {
		const length = links.length;
		if (length <= 500) {
			return links;
		}
		const sortedLinks = [...links].sort(
			(l1: Link, l2: Link) => Math.abs(l2.weight) - Math.abs(l1.weight)
		);
		return sortedLinks.slice(0, Math.min(500, 0.1 * length));
	}

	function applyActivation(links: Link[]): Link[] {
		if (!links.find((link) => link.a.activation)) {
			// A small optimization
			return links;
		}
		return links.map(
			(link) => new Link(link.a, link.b, link.weight * (1 + 0.5 * link.a.activation))
		);
	}

	function linkFilter(links: Link[]) {
		const linksWithActivationApplied = applyActivation(links);
		return keepTopLinks(linksWithActivationApplied);
	}
</script>

<Title order={1}>Reconnaître des chiffres</Title>

<Divider />

{#if isLoading}
	<Loader size="xl" />
{:else}
	<Grid cols={4}>
		<Grid.Col span={1}>
			<Space h="lg" />
			<DrawBox on:imageData={handleDrawnImage} />
			<Space h="sm" />

			<Divider />

			<Title order={4}>Modèle qui apprend</Title>
			<Space h="sm" />
			<DistributionChart {labels} values={prediction} color="#0000ff" />
			<Space h="sm" />

			<Divider />

			<Title order={4}>Modèle déja entraîné</Title>
			<Space h="sm" />
			<DistributionChart {labels} values={twoHiddenLayersPrediction} color="orange" />
		</Grid.Col>

		<Grid.Col span={3}>
			<NetworkGraph {networkShape} {activations} {weights} {linkFilter} />
		</Grid.Col>
	</Grid>
{/if}
