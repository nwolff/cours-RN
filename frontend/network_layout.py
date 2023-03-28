"""
A datastructure that models the visual layout of the NN model.

Positions are within the unit square

Initially I thought of using networkx (like in some tutorials), but it doesn't
properly capture the layered shape of neuron network, nor does it know how to layout
linearly top to bottom
"""
from dataclasses import dataclass
from typing import Optional


@dataclass(frozen=True)
class Point:
    x: float
    y: float


@dataclass(frozen=True)
class LayerSpec:
    name: str
    neuron_count: int
    neurons_per_row: Optional[int] = None


@dataclass()
class Layer:
    name: str
    neuron_count: int
    neurons_per_row: Optional[int]
    rank: int
    total_layer_count: int
    neuron_activations = Optional[list[float]]

    def __post_init__(self):
        if self.neurons_per_row is None:
            self.neurons_per_row = self.neuron_count

        self.neuron_positions = []
        y = 1 - self.rank / self.total_layer_count
        index_in_row = 0
        for _ in range(self.neuron_count):
            self.neuron_positions.append(
                Point(index_in_row / (self.neurons_per_row - 1), y)
            )
            index_in_row += 1
            if index_in_row == self.neurons_per_row:
                index_in_row = 0
                y += 0.07  # XXX
        self.neuron_activations = None

    @property
    def get_neuron_activations(self) -> list[float]:
        if self.neuron_activations is None:
            self.neuron_activations = [0] * self.neuron_count
        return self.neuron_activations


class Network:
    def __init__(self, *layer_specs: LayerSpec):
        self.weights: list[list[float]] = []
        self.layers: list[Layer] = []
        for i, spec in enumerate(layer_specs):
            layer = Layer(
                name=spec.name,
                neuron_count=spec.neuron_count,
                neurons_per_row=spec.neurons_per_row,
                rank=i,
                total_layer_count=len(layer_specs),
            )
            self.layers.append(layer)

    def set_activations(self, activations: list[list[float]]) -> None:
        for layer, layer_activations in zip(self.layers, activations):
            layer.neuron_activations = layer_activations
