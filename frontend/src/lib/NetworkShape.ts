// Models the shape of a dense feed forward neural network
// Positions are within the unit square.

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

export declare interface LayerSpec {
	name: string;
	neuron_count: number;
	neurons_per_row: number;
	marker_size: number;
	labels?: string[];
}

export class Layer {
	name: string;
	marker_size: number;
	neurons: Neuron[];
	labels?: string[];

	constructor(rank: number, total_layer_count: number, spec: LayerSpec) {
		this.name = spec.name;
		this.marker_size = spec.marker_size;
		this.labels = spec.labels;
		const neuron_count = spec.neuron_count;
		const neurons_per_row = spec.neurons_per_row;
		const spaceBetweenNeurons = 1 / neurons_per_row;

		const rows_in_layer = Math.floor(neuron_count / neurons_per_row);
		let y = 1 - rank / total_layer_count + rows_in_layer * spaceBetweenNeurons;

		let index_in_row = 0;
		if (neuron_count < neurons_per_row) {
			index_in_row = (neurons_per_row - neuron_count) / 2;
		}

		const neurons = [];

		for (let i = 0; i < neuron_count; i++) {
			neurons.push(new Neuron(index_in_row / (neurons_per_row - 1), y));
			index_in_row++;
			if (index_in_row == neurons_per_row) {
				index_in_row = 0;
				y -= spaceBetweenNeurons;
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

	constructor(...layer_specs: LayerSpec[]) {
		this.layers = [];
		for (const [rank, spec] of layer_specs.entries()) {
			this.layers.push(new Layer(rank, layer_specs.length, spec));
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
