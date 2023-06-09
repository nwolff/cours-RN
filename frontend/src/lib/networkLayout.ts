// Models the visual layout of a fully connected feed forward neural network
// Positions are within the unit square.

import type { LayerVariable } from '@tensorflow/tfjs';
import { zip } from './pythonish';

export class Point {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
}

export class Neuron {
	x: number;
	y: number;
	activation: number | null;

	constructor(x: number, y: number, activation: number | null) {
		this.x = x;
		this.y = y;
		this.activation = activation;
	}
}

export class Link {
	a: Neuron;
	b: Neuron;
	weight: number;

	constructor(a: Neuron, b: Neuron, weight: number = 0) {
		this.a = a;
		this.b = b;
		this.weight = weight;
	}
}

export class LayerSpec {
	name: string;
	neuron_count: number;
	marker_size: number;
	neurons_per_row: number | null;

	constructor(
		name: string,
		neuron_count: number,
		marker_size: number,
		neurons_per_row: number | null = null
	) {
		this.name = name;
		this.neuron_count = neuron_count;
		this.marker_size = marker_size;
		this.neurons_per_row = neurons_per_row;
	}
}

export class Layer {
	name: string;
	marker_size: number;
	neurons: Neuron[];

	constructor(rank: number, total_layer_count: number, spec: LayerSpec) {
		this.name = spec.name;
		this.marker_size = spec.marker_size;
		const neuron_count = spec.neuron_count;
		const neurons_per_row = spec.neurons_per_row || spec.neuron_count;
		const spaceBetweenNeurons = 1 / neurons_per_row;

		const rows_in_layer = Math.floor(neuron_count / neurons_per_row);
		let y = 1 - rank / total_layer_count + rows_in_layer * spaceBetweenNeurons;

		const neuron_positions = [];
		let index_in_row = 0;
		if (neuron_count < neurons_per_row) {
			index_in_row = (neurons_per_row - neuron_count) / 2;
		}
		for (let i = 0; i < neuron_count; i++) {
			neuron_positions.push(new Point(index_in_row / (neurons_per_row - 1), y));
			index_in_row++;
			if (index_in_row == neurons_per_row) {
				index_in_row = 0;
				y -= spaceBetweenNeurons;
			}
		}

		this.neurons = neuron_positions.map((pos) => new Neuron(pos.x, pos.y, 0));
	}
}

export type LinkFilter = (links: Link[]) => Link[];

export function allLinks(links: Link[]) {
	return links;
}

export class DenseNetwork {
	layers: Layer[];

	constructor(layer_specs: LayerSpec[]) {
		this.layers = [];
		for (const [rank, spec] of layer_specs.entries()) {
			this.layers.push(new Layer(rank, layer_specs.length, spec));
		}
	}

	setActivations(activations: number[][]) {
		for (const [layer, activationsForLayer] of zip(this.layers, activations)) {
			for (const [neuron, activation] of zip(layer.neurons, activationsForLayer)) {
				neuron.activation = activation;
			}
		}
	}

	links(weights: LayerVariable[], linkFilter: LinkFilter) {
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
