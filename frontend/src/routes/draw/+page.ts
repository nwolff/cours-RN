import * as tf from '@tensorflow/tfjs';

export async function load({ url }) {
    const modelUrl = new URL('/model.json', url);
    const model = await tf.loadLayersModel(modelUrl.toString());
    return {model: model};
}