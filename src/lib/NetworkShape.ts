// Models the shape and layout of a dense feed forward neural network

import type { LayerVariable } from '@tensorflow/tfjs';
import { zip2, zip3 } from './utils';

export class Neuron {
	constructor(
		public readonly x: number,
		public readonly y: number
	) {}
}

export class Link {
	constructor(
		public readonly a: Neuron,
		public readonly b: Neuron,
		public readonly weight: number
	) {}
}

// Describes the layout of a single layer.
export declare interface LayerSpec {
	name: string;
	neuron_count: number;
	width: number;
	height: number;
	marker_size: number;
	neurons_per_row?: number;
	labels?: string[];
}

// Preforms the layout of a single layer, placing the neurons accordingly
export class Layer {
	name: string;
	marker_size: number;
	neurons: Neuron[];
	labels?: string[];

	constructor(layer_start_y: number, spec: LayerSpec) {
		this.name = spec.name;
		this.marker_size = spec.marker_size;
		this.labels = spec.labels;

		const neurons_per_row = spec.neurons_per_row || spec.neuron_count;
		const number_of_rows = Math.ceil(spec.neuron_count / neurons_per_row);

		const x_space_between_neurons = spec.width / (neurons_per_row - 1);
		const y_space_between_neurons = spec.height / (number_of_rows - 1);

		const row_x_start = (-x_space_between_neurons * (neurons_per_row - 1)) / 2;

		const neurons = [];

		let index_in_row = 0;
		let y = layer_start_y;

		for (let i = 0; i < spec.neuron_count; i++) {
			neurons.push(new Neuron(row_x_start + index_in_row * x_space_between_neurons, y));
			index_in_row++;
			if (index_in_row == neurons_per_row) {
				index_in_row = 0;
				y -= y_space_between_neurons;
			}
		}

		this.neurons = neurons;
	}
}

export class DenseNetwork {
	layers: Layer[];
	outputLayer: Layer;

	constructor(layer_spacing: number, ...layer_specs: LayerSpec[]) {
		this.layers = [];
		let layer_y = 0;
		for (const spec of layer_specs) {
			this.layers.push(new Layer(layer_y, spec));
			layer_y -= spec.height + layer_spacing;
		}
		this.outputLayer = this.layers[this.layers.length - 1];
	}

	getLinks(weights: LayerVariable[]) {
		const links: Link[] = [];
		for (const [from_layer, to_layer, weights_between_layers_tensor] of zip3(
			this.layers.slice(0, -1),
			this.layers.slice(1),
			weights
		)) {
			const weights_between_layers = weights_between_layers_tensor.read().arraySync() as number[][];

			const layerLinks = [];

			for (const [from_neuron, outgoing_weights_for_neuron] of zip2(
				from_layer.neurons,
				weights_between_layers
			)) {
				for (const [to_neuron, weight] of zip2(to_layer.neurons, outgoing_weights_for_neuron)) {
					const link = new Link(from_neuron, to_neuron, weight);
					layerLinks.push(link);
				}
			}
			links.push(...layerLinks);
		}

		return links;
	}
}
