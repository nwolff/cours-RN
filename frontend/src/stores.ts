import { asyncReadable, writable } from '@square/svelte-store';
import { base } from '$app/paths';
import { loadData } from '$lib/data';
import { DenseNetwork } from '$lib/NetworkShape';
import * as tf from '@tensorflow/tfjs';

export const mnistDataStore = asyncReadable(null, async () => {
	return await loadData();
});

export const modelStore = writable(newModel());

export const twoHiddenLayersModelStore = asyncReadable(null, async () => {
	const modelUrl = base + '/two_hidden_layers/model.json';
	return await tf.loadLayersModel(modelUrl);
});

export function getNetworkShape() {
	return new DenseNetwork(
		{
			name: "Couche d'entrée",
			neuron_count: 28 * 28,
			neurons_per_row: 14 * 7,
			marker_size: 8
		},
		{
			name: 'Couche cachée 1',
			neuron_count: 30,
			neurons_per_row: 40,
			marker_size: 18
		},
		{
			name: 'Couche cachée 2',
			neuron_count: 30,
			neurons_per_row: 40,
			marker_size: 18
		},
		{
			name: 'Couche de sortie',
			neuron_count: 10,
			neurons_per_row: 16,
			marker_size: 18,
			labels: Array.from({ length: 10 }, (_, i) => i.toString())
		}
	);
}

export function newModel() {
	const model = tf.sequential();
	model.add(tf.layers.dense({ inputShape: [28 * 28], units: 32, activation: 'relu' }));
	model.add(tf.layers.dense({ units: 32, activation: 'relu' }));
	model.add(tf.layers.dense({ units: 10, activation: 'softmax' }));

	// This can be changed later, while training the model
	const optimizer = tf.train.adam();

	model.compile({
		optimizer: optimizer,
		loss: 'categoricalCrossentropy',
		metrics: ['accuracy']
	});
	return model;
}
