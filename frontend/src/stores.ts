import { asyncReadable, writable } from '@square/svelte-store';

import { loadData, getModel } from '$lib/model.js';

import { base } from '$app/paths';

import * as tf from '@tensorflow/tfjs';

export const mnistDataStore = asyncReadable(null, async () => {
	return await loadData();
});

export const modelStore = writable(getModel());

export const pythonModelStore = asyncReadable(null, async () => {
	const modelUrl = base + '/model.json';
	return await tf.loadLayersModel(modelUrl);
});
