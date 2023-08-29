// Models the shape and layout of a dense feed forward neural network

import type { LayerVariable } from '@tensorflow/tfjs';
import { zip } from './pythonish';

export class Neuron {
	x: number;
	y: number;
	activation: number;

	constructor(x: number, y: number, activation = 0) {
		this.x = x;
		this.y = y;
		this.activation = activation;
	}
}

export class Link {
	a: Neuron;
	b: Neuron;
	weight: number;

	constructor(a: Neuron, b: Neuron, weight = 0) {
		this.a = a;
		this.b = b;
		this.weight = weight;
	}
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

		const neuron_count = spec.neuron_count;
		const neurons_per_row = spec.neurons_per_row || spec.neuron_count;
		const number_of_rows = Math.ceil(neuron_count / neurons_per_row);

		const space_between_neurons_x = spec.width / (neurons_per_row - 1);
		const space_between_neurons_y = spec.height / (number_of_rows - 1);

		const row_x_start = (-space_between_neurons_x * (neurons_per_row - 1)) / 2;

		const neurons = [];

		let index_in_row = 0;
		let y = layer_start_y;

		for (let i = 0; i < neuron_count; i++) {
			neurons.push(new Neuron(row_x_start + index_in_row * space_between_neurons_x, y));
			index_in_row++;
			if (index_in_row == neurons_per_row) {
				index_in_row = 0;
				y -= space_between_neurons_y;
			}
		}

		this.neurons = neurons;
	}
}

export type LinkFilter = (links: Link[]) => Link[];

export function allLinks(links: Link[]) {
	return links;
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

	getLinks(weights: LayerVariable[], activations: number[][], linkFilter: LinkFilter) {
		if (activations) {
			for (const [layer, activationsForLayer] of zip(this.layers, activations)) {
				for (const [neuron, activation] of zip(layer.neurons, activationsForLayer)) {
					neuron.activation = activation;
				}
			}
		}

		const links: Link[] = [];
		for (const [from_layer, to_layer, weights_between_layers_tensor] of zip(
			this.layers.slice(0, -1),
			this.layers.slice(1),
			weights
		)) {
			const weights_between_layers = weights_between_layers_tensor.val.arraySync();

			const layerLinks = [];

			for (const [from_neuron, outgoing_weights_for_neuron] of zip(
				from_layer.neurons,
				weights_between_layers
			)) {
				for (const [to_neuron, weight] of zip(to_layer.neurons, outgoing_weights_for_neuron)) {
					const link = new Link(from_neuron, to_neuron, weight);
					layerLinks.push(link);
				}
			}
			const filteredLayerLinks = linkFilter(layerLinks);
			links.push(...filteredLayerLinks);
		}

		return links;
	}
}
