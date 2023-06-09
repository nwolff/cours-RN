<script lang="ts">
	import { onMount } from 'svelte';
	import type * as tf from '@tensorflow/tfjs';
	import type { MnistData } from '$lib/data.js';
	import { mnistDataStore, modelStore } from '../../stores';
	import { Grid, Button, Loader, Title, Text, Divider, Stack } from '@svelteuidev/core';

	let data: MnistData;
	let isLoading = true;

	let tfvis;

	let confusionMatrixContainer: any;

	onMount(async () => {
		tfvis = await import('@tensorflow/tfjs-vis');

		mnistDataStore.load().then((value) => {
			isLoading = false;
			data = value;
		});
	});

	const classNames = [
		'Zero',
		'Un',
		'Deux',
		'Trois',
		'Quatre',
		'Cinq',
		'Six',
		'Sept',
		'Huit',
		'Neuf'
	];

	function doPrediction(model: tf.Sequential, testDataSize = 1000) {
		const testData = data.nextTestBatch(testDataSize);
		const testxs = testData.xs.reshape([testDataSize, 28 * 28]);
		const labels = testData.labels.argMax([-1]);
		const preds = model.predict(testxs).argMax([-1]);

		testxs.dispose();
		return [preds, labels];
	}

	async function showAccuracy() {
		const [preds, labels] = doPrediction($modelStore);

		const confusionMatrix = await tfvis.metrics.confusionMatrix(labels, preds);
		tfvis.render.confusionMatrix(confusionMatrixContainer, {
			values: confusionMatrix,
			tickLabels: classNames
		});

		labels.dispose();
	}
</script>

<Title order={1}>Evaluer la précision du réseau</Title>
<Divider />
{#if isLoading}
	<Loader size="xl" />
{:else}
	<Grid cols={4}>
		<Grid.Col span={1}>
			<Stack>
				<Text
					>A chaque appui sur le bouton, on donne au réseau 1000 nouvelles images de <b>test</b> qu'il
					n'a jamais vues.
				</Text>
				<Button id="show-accuracy" on:click={showAccuracy}>Evaluer la précision</Button>
			</Stack>
		</Grid.Col>

		<Grid.Col span={3}>
			<p />
			<div bind:this={confusionMatrixContainer} id="confusion-matrix-container" />
		</Grid.Col>
	</Grid>
{/if}
