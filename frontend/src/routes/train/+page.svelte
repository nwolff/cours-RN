<script lang="ts">
	import { onMount } from 'svelte';

	import * as tf from '@tensorflow/tfjs';

	import type { MnistData } from '$lib/data.js';

	import { mnistDataStore, modelStore } from '../../stores';
	import { getModel } from '$lib/model';

	import { Button, Loader, Title, Space, Text, Stack } from '@svelteuidev/core';

	let data: MnistData;
	let isLoading = true;

	let tfvis;

	onMount(async () => {
		tfvis = await import('@tensorflow/tfjs-vis');

		mnistDataStore.load().then((value) => {
			isLoading = false;
			data = value;
		});
	});

	async function train(model: tf.Sequential, data: MnistData, fitCallbacks) {
		const EPOCHS = 8;
		const BATCH_SIZE = 100;
		const trainDataSize = 5000;
		const testDataSize = 1000;

		const [trainXs, trainYs] = tf.tidy(() => {
			const d = data.nextTrainBatch(trainDataSize);
			return [d.xs.reshape([trainDataSize, 28 * 28]), d.labels];
		});

		const [testXs, testYs] = tf.tidy(() => {
			const d = data.nextTestBatch(testDataSize);
			return [d.xs.reshape([testDataSize, 28 * 28]), d.labels];
		});

		return model.fit(trainXs, trainYs, {
			batchSize: BATCH_SIZE,
			validationData: [testXs, testYs],
			epochs: EPOCHS,
			shuffle: true,
			callbacks: fitCallbacks
		});
	}

	async function watchTraining() {
		modelStore.update(() => getModel());
		const metrics = ['acc', 'val_acc'];
		const container = {
			name: 'Evolution de la précision',
			tab: 'Entraînement',
			styles: { height: '800px' }
		};
		const callbacks = tfvis.show.fitCallbacks(container, metrics);
		return train($modelStore, data, callbacks);
	}

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

	async function showModelSummary() {
		const summaryContainer = { name: 'Résumé du modèle', tab: 'Inspection' };
		tfvis.show.modelSummary(summaryContainer, $modelStore);
		for (const [index, layer] of $modelStore.layers.entries()) {
			const layerContainer = { name: 'Couche ' + index, tab: 'Inspection' };
			tfvis.show.layer(layerContainer, layer);
		}
	}

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

		const perClassAccuracy = await tfvis.metrics.perClassAccuracy(labels, preds);
		const perClassAccuracyContainer = { name: 'Précision par classe', tab: 'Evaluation' };
		tfvis.show.perClassAccuracy(perClassAccuracyContainer, perClassAccuracy, classNames);

		const confusionMatrix = await tfvis.metrics.confusionMatrix(labels, preds);
		const confusionMatrixContainer = { name: 'Matrice de confusion', tab: 'Evaluation' };
		tfvis.render.confusionMatrix(confusionMatrixContainer, {
			values: confusionMatrix,
			tickLabels: classNames
		});

		labels.dispose();
	}

	async function showConfusionMatrix() {
		const [preds, labels] = doPrediction($modelStore);
		labels.dispose();
	}
</script>

{#if isLoading}
	<Loader size="xl" />
{:else}
	<Title order="2">Entraîner notre modèle</Title>
	<p>
		<Text>Notre but est d'entraîner un modèle à reconnaitre des chiffres.</Text>
	</p>
	<p>
		<Button on:click={watchTraining}>Entraîner</Button>
	</p>
	<p>
		<Button on:click={showModelSummary}>Voir le résumé du modèle</Button>
	</p>
	<Space />

	<Title order="2">Evaluation de notre modèle</Title>
	<p>
		<Text
			>Maintenant que notre modèle est entraîné on peut évaluer la précision de ses prédictions.</Text
		>
	</p>
	<p><Button id="show-accuracy" on:click={showAccuracy}>Evaluer la précision</Button></p>
{/if}
