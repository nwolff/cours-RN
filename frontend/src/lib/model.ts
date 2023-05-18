import * as tf from '@tensorflow/tfjs';
import { MnistData } from './data';

export function getModel() {
	const model = tf.sequential();
	model.add(tf.layers.inputLayer({ inputShape: [28 * 28] }));
	model.add(tf.layers.dense({ units: 32, activation: 'relu' }));
	model.add(tf.layers.dense({ units: 32, activation: 'relu' }));
	model.add(tf.layers.dense({ units: 10, activation: 'softmax' }));

	const LEARNING_RATE = 0.15;

	model.compile({
		optimizer: tf.train.sgd(LEARNING_RATE),
		loss: 'categoricalCrossentropy',
		metrics: ['accuracy']
	});

	model.summary(); // XXX

	return model;
}

export async function loadData() {
	const data = new MnistData();
	await data.load();
	return data;
}
