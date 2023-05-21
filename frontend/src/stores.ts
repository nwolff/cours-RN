import { asyncReadable, writable } from '@square/svelte-store';

import { loadData, getModel } from '$lib/model.js';

import { base } from '$app/paths';

import * as tf from '@tensorflow/tfjs';

export const mnistDataStore = asyncReadable(null, async () => {
	return await loadData();
});

export const modelStore = writable(getModel());

export const twoHiddenLayersModelStore = asyncReadable(null, async () => {
	const modelUrl = base + '/two_hidden_layers/model.json';
	return await tf.loadLayersModel(modelUrl);
});

export const leNetModelStore = asyncReadable(null, async () => {
	const modelUrl = base + '/le_net/model.json';
	return await tf.loadLayersModel(modelUrl);
});
