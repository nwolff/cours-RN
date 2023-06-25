<script lang="ts">
	import type { MnistData } from '$lib/data.js';
	import type { Link } from '$lib/NetworkShape';
	import { onMount } from 'svelte';
	import * as tf from '@tensorflow/tfjs';
	import NetworkGraph from '$lib/NetworkGraph.svelte';
	import { mnistDataStore, modelStore, newModel, getNetworkShape } from '../../stores';
	import { Button, Loader, Space, Grid, Text, Title, Stack, Divider } from '@svelteuidev/core';
	import RangeSlider from 'svelte-range-slider-pips';

	const networkShape = getNetworkShape();
	let data: MnistData;
	let isLoading = true;
	let learningRates = [0];

	$: learningRate = learningRates[0];

	let tfvis;

	let fitCallbacksContainer: HTMLElement;

	$: weights = $modelStore?.weights;

	onMount(async () => {
		tfvis = await import('@tensorflow/tfjs-vis');

		mnistDataStore.load().then((value) => {
			isLoading = false;
			data = value;
		});
	});

	async function train({
		trainDataSize = 5000,
		batchSize = 100,
		epochs = 1,
		learningRate = 0.01
	} = {}) {
		const model = $modelStore;

		model.optimizer = new tf.SGDOptimizer(learningRate);

		const testDataSize = trainDataSize / 5;

		const [trainXs, trainYs] = tf.tidy(() => {
			const d = data.nextTrainBatch(trainDataSize);
			return [d.xs.reshape([trainDataSize, 28 * 28]), d.labels];
		});

		const [testXs, testYs] = tf.tidy(() => {
			const d = data.nextTestBatch(testDataSize);
			return [d.xs.reshape([testDataSize, 28 * 28]), d.labels];
		});

		const metrics = ['acc', 'val_acc'];
		const visualFitCallbacks = tfvis.show.fitCallbacks(fitCallbacksContainer, metrics);

		function onBatchEnd(batch: number, logs: any): Promise<void> {
			notifyModelChange();
			return visualFitCallbacks.onBatchEnd(batch, logs);
		}

		return model.fit(trainXs, trainYs, {
			validationData: [testXs, testYs],
			epochs: epochs,
			batchSize: batchSize,
			shuffle: true,
			callbacks: { onBatchEnd }
		});
	}

	async function train100() {
		train({ trainDataSize: 100, batchSize: 25, epochs: 1, learningRate: learningRate });
	}

	async function train1000() {
		train({ trainDataSize: 1000, batchSize: 50, epochs: 1, learningRate: learningRate });
	}

	async function trainFully() {
		train({ trainDataSize: 5000, batchSize: 100, epochs: 8, learningRate: learningRate });
	}

	function notifyModelChange() {
		modelStore.update((m) => m);
	}

	function resetModel() {
		modelStore.update(() => newModel());
	}

	function linkFilter(links: Link[]) {
		const length = links.length;
		if (length <= 500) {
			return links;
		}
		const sortedLinks = [...links].sort(
			(l1: Link, l2: Link) => Math.abs(l2.weight) - Math.abs(l1.weight)
		);
		return sortedLinks.slice(0, Math.min(500, 0.1 * length));
	}
</script>

<Title order={1}>Entraîner le réseau avec des images</Title>

<Divider />

{#if isLoading}
	<Loader size="xl" />
{:else}
	<Grid cols={4}>
		<Grid.Col span={1}>
			<Space h="xl" />
			<Stack>
				<Text>Taux d'apprentissage</Text>
				<RangeSlider
					bind:values={learningRates}
					min={0}
					max={1}
					step={0.2}
					pips
					all="label"
					float
				/>
				<Button on:click={train100}>Entraîner avec 100 images</Button>
				<Button on:click={train1000}>Entraîner avec 1000 images</Button>
				<Button on:click={trainFully}>Entraîner avec 5000 images, 8 fois</Button>
				<Button color="Red" on:click={resetModel}>Réinitialiser le réseau</Button>
			</Stack>
			<div bind:this={fitCallbacksContainer} />
		</Grid.Col>
		<Grid.Col span={3}>
			<NetworkGraph {networkShape} {weights} {linkFilter} />
		</Grid.Col>
	</Grid>
{/if}
