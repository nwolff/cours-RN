<script lang="ts">
	import { onMount } from 'svelte';

	import * as tf from '@tensorflow/tfjs';

	import { Wave } from 'svelte-loading-spinners';

	import type { MnistData } from '$lib/data.js';

	import { mnistDataStore, modelStore } from '../../stores';
	import { getModel } from '$lib/model';

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
		const EPOCHS = 10;
		const BATCH_SIZE = 64;
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
		const metrics = ['loss', 'val_loss', 'acc', 'val_acc'];
		const container = {
			name: 'show.fitCallbacks',
			tab: 'Training',
			styles: { height: '1000px' }
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
	function doPrediction(model: tf.Sequential, testDataSize = 500) {
		const testData = data.nextTestBatch(testDataSize);
		const testxs = testData.xs.reshape([testDataSize, 28 * 28]);
		const labels = testData.labels.argMax([-1]);
		const preds = model.predict(testxs).argMax([-1]);

		testxs.dispose();
		return [preds, labels];
	}

	async function showAccuracy() {
		const [preds, labels] = doPrediction($modelStore);
		const accuracy = await tfvis.metrics.accuracy(labels, preds);
		const container = { name: 'Accuracy', tab: 'Evaluation' };
		console.log(accuracy);

		labels.dispose();
	}

	async function showPerClassAccuracy() {
		const [preds, labels] = doPrediction($modelStore);
		const perClassAccuracy = await tfvis.metrics.perClassAccuracy(labels, preds);
		const container = { name: 'Per Class Accuracy', tab: 'Evaluation' };
		tfvis.show.perClassAccuracy(container, perClassAccuracy, classNames);

		labels.dispose();
	}

	async function showConfusionMatrix() {
		const [preds, labels] = doPrediction($modelStore);
		const confusionMatrix = await tfvis.metrics.confusionMatrix(labels, preds);
		const container = { name: 'Confusion Matrix', tab: 'Evaluation' };
		tfvis.render.confusionMatrix(container, {
			values: confusionMatrix,
			tickLabels: classNames
		});

		labels.dispose();
	}

	async function showModelSummary() {
		const container = { name: 'Model Summary', tab: 'Model Inspection' };
		tfvis.show.modelSummary(container, $modelStore);
	}
</script>

{#if isLoading}
	<Wave size="100" color="#FF3E00" unit="px" />
{:else}
	<article>
		<h1>Visualizing training with tfjs-vis</h1>

		<section>
			<h2>Training Our Model</h2>
			<p>
				Our goal is to train a model to recognize similar digits. We have already written a tutorial
				on how to do so. So in this article we are going to focus on monitoring that training and
				also look at how well our model performs.
			</p>

			<button id="start-training" on:click={watchTraining}>Start training</button>
		</section>

		<section>
			<h2>Evaluating Our Model</h2>
			<p>
				Now that our model is trained we should evalute its performance. For a classification task
				like this one we can use the `perClassAccuracy` and `confusionMatrix` functions. These are
				demonstrated below.
			</p>

			<p>
				<button id="show-model-summary" on:click={showModelSummary}>Show Model Summary</button>
			</p>
			<p>
				<button id="show-per-class-accuracy" on:click={showPerClassAccuracy}
					>Show per-class accuracy</button
				>
			</p>
			<p>
				<button id="show-confusion" on:click={showConfusionMatrix}>Show confusion matrix</button>
			</p>
		</section>
	</article>
{/if}
