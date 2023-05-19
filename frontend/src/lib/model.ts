import * as tf from '@tensorflow/tfjs';
import { MnistData } from './data';

export function getModel() {
	const model = tf.sequential();
	model.add(tf.layers.dense({ inputShape: [28 * 28], units: 32, activation: 'relu' }));
	model.add(tf.layers.dense({ units: 32, activation: 'relu' }));
	model.add(tf.layers.dense({ units: 10, activation: 'softmax' }));

	const optimizer = tf.train.adam();

	model.compile({
		optimizer: optimizer,
		loss: 'categoricalCrossentropy',
		metrics: ['accuracy']
	});

	return model;
}

export async function loadData() {
	const data = new MnistData();
	await data.load();
	return data;
}
