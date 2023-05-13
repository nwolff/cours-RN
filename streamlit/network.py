from lib.network_layout import FeedForwardNetwork, LayerSpec


def network():
    return FeedForwardNetwork(
        LayerSpec("Couche d'entrée", 28 * 28, marker_size=5, neurons_per_row=14 * 7),
        LayerSpec("Couche cachée 1", 32, marker_size=16),
        LayerSpec("Couche cachée 2", 32, marker_size=16),
        LayerSpec("Couche de sortie", 10, marker_size=50),
    )
