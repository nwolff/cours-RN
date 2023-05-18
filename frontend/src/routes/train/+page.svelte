<script lang="ts">
	import { getModel, loadData } from '$lib/model.js';

	import { onMount } from 'svelte';

	import * as tf from '@tensorflow/tfjs';

	import { Wave } from 'svelte-loading-spinners';

	import * as tfvis from '@tensorflow/tfjs-vis';

	import type { MnistData } from '$lib/data.js';

	let model = getModel();
	let data: MnistData;
	let isLoading = true;

	onMount(async () => {
		const dataPromise = loadData();
		dataPromise.then((value) => {
			isLoading = false;
			data = value;
		});
	});

	async function train(model: tf.Sequential, data: MnistData, fitCallbacks) {
		const BATCH_SIZE = 64;
		const trainDataSize = 500;
		const testDataSize = 100;

		const [trainXs, trainYs] = tf.tidy(() => {
			const d = data.nextTrainBatch(trainDataSize);
			return [d.xs.reshape([trainDataSize, 28, 28, 1]), d.labels];
		});

		const [testXs, testYs] = tf.tidy(() => {
			const d = data.nextTestBatch(testDataSize);
			return [d.xs.reshape([testDataSize, 28, 28, 1]), d.labels];
		});

		return model.fit(trainXs, trainYs, {
			batchSize: BATCH_SIZE,
			validationData: [testXs, testYs],
			epochs: 10,
			shuffle: true,
			callbacks: fitCallbacks
		});
	}

	async function watchTraining() {
		model = getModel(); // Restart from scratch esch time
		const metrics = ['loss', 'val_loss', 'acc', 'val_acc'];
		const container = {
			name: 'show.fitCallbacks',
			tab: 'Training',
			styles: { height: '1000px' }
		};
		const callbacks = tfvis.show.fitCallbacks(container, metrics);
		return train(model, data, callbacks);
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

			<p><button id="show-accuracy">Show per-class accuracy</button></p>
			<p><button id="show-confusion">Show confusion matrix</button></p>

			<script class="show-script">
				{
					const classNames = [
						'Zero',
						'One',
						'Two',
						'Three',
						'Four',
						'Five',
						'Six',
						'Seven',
						'Eight',
						'Nine'
					];

					function doPrediction(testDataSize = 500) {
						const testData = data.nextTestBatch(testDataSize);
						const testxs = testData.xs.reshape([testDataSize, 28, 28, 1]);
						const labels = testData.labels.argMax([-1]);
						const preds = model.predict(testxs).argMax([-1]);

						testxs.dispose();
						return [preds, labels];
					}

					async function showAccuracy() {
						const [preds, labels] = doPrediction();
						const classAccuracy = await tfvis.metrics.perClassAccuracy(labels, preds);
						const container = { name: 'Accuracy', tab: 'Evaluation' };
						tfvis.show.perClassAccuracy(container, classAccuracy, classNames);

						labels.dispose();
					}

					async function showConfusion() {
						const [preds, labels] = doPrediction();
						const confusionMatrix = await tfvis.metrics.confusionMatrix(labels, preds);
						const container = { name: 'Confusion Matrix', tab: 'Evaluation' };
						tfvis.render.confusionMatrix(container, {
							values: confusionMatrix,
							tickLabels: classNames
						});

						labels.dispose();
					}

					document.querySelector('#show-accuracy').addEventListener('click', () => showAccuracy());

					document
						.querySelector('#show-confusion')
						.addEventListener('click', () => showConfusion());
				}
			</script>
		</section>
	</article>
{/if}
