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
	weight: number | null;

	constructor(a: Neuron, b: Neuron, weight: number | null) {
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

		const rows_in_layer = Math.floor(neuron_count / neurons_per_row);
		let y = 1 - rank / total_layer_count + rows_in_layer * 0.02;

		const neuron_positions = [];
		let index_in_row = 0;
		for (let i = 0; i < neuron_count; i++) {
			neuron_positions.push(new Point(index_in_row / (neurons_per_row - 1), y));
			index_in_row++;
			if (index_in_row == neurons_per_row) {
				index_in_row = 0;
				y -= 0.02;
			}
		}

		this.neurons = neuron_positions.map((pos) => new Neuron(pos.x, pos.y, 0));
	}
}

export type LinkFilter = (link: Link) => boolean;

export function allLinks(_: Link) {
	return true;
}

export class DenseNetwork {
	layers: Layer[];

	constructor(layer_specs: LayerSpec[]) {
		this.layers = [];
		for (const [rank, spec] of layer_specs.entries()) {
			this.layers.push(new Layer(rank, layer_specs.length, spec));
		}
	}

	links(weights: LayerVariable[], linkFilter: LinkFilter) {
		const links: Link[] = [];

		// console.log(zip(network.layers.slice(0, -1), network.layers.slice(1), weights));

		for (const [from_layer, to_layer, weights_between_layers_tensor] of zip(
			this.layers.slice(0, -1),
			this.layers.slice(1),
			weights
		)) {
			const weights_between_layers = weights_between_layers_tensor.val.arraySync();
			// console.log("from layer", from_layer);
			// console.log("to layer", to_layer);
			// console.log("weights between layers", weights_between_layers);

			for (const [from_neuron, outgoing_weights_for_neuron] of zip(
				from_layer.neurons,
				weights_between_layers
			)) {
				// console.log("from neuron", from_neuron);
				// console.log("outgoing weights for neuron", outgoing_weights_for_neuron);

				for (const [to_neuron, weight] of zip(to_layer.neurons, outgoing_weights_for_neuron)) {
					// console.log('from', from_neuron, 'to', to_neuron, 'weight', weight);
					const link = new Link(from_neuron, to_neuron, weight);
					if (linkFilter(link)) {
						links.push(link);
					}
				}
			}
		}

		return links;
	}
}
