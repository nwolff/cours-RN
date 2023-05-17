import * as tf from '@tensorflow/tfjs';
import { base } from '$app/paths';

export const ssr = false; // The only way I found to get npm run build to work

export async function load({ url }) {
	const modelUrl = new URL(base + '/model.json', url);
	const model = await tf.loadLayersModel(modelUrl.toString());
	return { model: model };
}
