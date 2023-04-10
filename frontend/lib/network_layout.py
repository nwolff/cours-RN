"""
Models the visual layout of a fully connected feed forward neural network
Positions are within the unit square.
"""

from dataclasses import dataclass
from typing import Callable, Optional


@dataclass(frozen=True)
class Point:
    x: float
    y: float


@dataclass(frozen=True)
class Neuron:
    x: float
    y: float
    activation: float


@dataclass(frozen=True)
class Link:
    a: Neuron
    b: Neuron
    weight: float


@dataclass(frozen=True)
class LayerSpec:
    name: str
    neuron_count: int
    marker_size: int
    neurons_per_row: Optional[int] = None


@dataclass()
class Layer:
    name: str
    marker_size: int
    neuron_count: int
    neurons_per_row: Optional[int]
    rank: int
    total_layer_count: int
    _neuron_positions = Optional[list[Point]]

    def __post_init__(self):
        if self.neurons_per_row is None:
            self.neurons_per_row = self.neuron_count

        rows_in_rank = self.neuron_count // self.neurons_per_row
        y = 1 - (self.rank / self.total_layer_count) + rows_in_rank * 0.02

        self._neuron_positions = []
        index_in_row = 0
        for _ in range(self.neuron_count):
            self._neuron_positions.append(
                Point(index_in_row / (self.neurons_per_row - 1), y)
            )
            index_in_row += 1
            if index_in_row == self.neurons_per_row:
                index_in_row = 0
                y -= 0.02  # XXX
        self.neuron_activations = [0] * self.neuron_count

    def get_neurons(self) -> list[Neuron]:
        return [
            Neuron(p.x, p.y, a)
            for p, a in zip(self._neuron_positions, self.neuron_activations)
        ]


LinkFilter = Callable[[Link], bool]


class FeedForwardNetwork:
    def __init__(self, *layer_specs: LayerSpec):
        self.layers: list[Layer] = []

        for i, spec in enumerate(layer_specs):
            layer = Layer(
                name=spec.name,
                neuron_count=spec.neuron_count,
                marker_size=spec.marker_size,
                neurons_per_row=spec.neurons_per_row,
                rank=i,
                total_layer_count=len(layer_specs),
            )
            self.layers.append(layer)

    def set_activations(self, activations: list[list[float]]) -> None:
        for layer, layer_activations in zip(self.layers, activations):
            layer.neuron_activations = layer_activations

    def get_links(
        self, weights: list[list[list[float]]], filter_fn: LinkFilter = lambda x: True
    ):
        links = []
        for from_layer, to_layer, weights_between_layers in zip(
            self.layers, self.layers[1:], weights
        ):
            for from_neuron, outgoing_weights_for_neuron in zip(
                from_layer.get_neurons(), weights_between_layers
            ):
                for to_neuron, weight in zip(
                    to_layer.get_neurons(), outgoing_weights_for_neuron
                ):
                    link = Link(from_neuron, to_neuron, weight)
                    if filter_fn(link):
                        links.append(link)
        return links
