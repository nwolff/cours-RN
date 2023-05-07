import colorsys
from collections import defaultdict
from typing import Optional

import plotly.graph_objects as go
from network_layout import FeedForwardNetwork, Link


def neuron_traces(network: FeedForwardNetwork) -> list[go.Scatter]:
    traces = []
    for layer in network.layers:
        first_layer = layer == network.layers[0]
        last_layer = layer == network.layers[-1]
        neurons = layer.get_neurons()
        trace = go.Scatter(
            x=[n.x for n in neurons],
            y=[n.y for n in neurons],
            text=[f"{int(n.activation * 100)}%" for n in neurons],
            name=layer.name,
            mode="markers+text" if last_layer else "markers",
            marker=dict(
                color=[n.activation for n in neurons],
                symbol="circle",
                colorscale="greys" if first_layer else "greens",
                line=dict(width=1),
                size=layer.marker_size,
            ),
            # Ref: https://plotly.com/python/hover-text-and-formatting/
            hovertemplate="%{marker.color:.0%}" + "<extra></extra>",
        )
        traces.append(trace)
    return traces


def color_for_weight(weight: float) -> str:
    """
    Divergent color ramps away from zero.
    Using the hsv color model helps us build ramps.
    """
    if weight < 0:
        if weight < -1:
            print("funny weight", weight)
            weight = -1
        hue = 0.0
        saturation = -weight
        value = 1
    else:
        if weight > 1:
            print("funny weight", weight)
            weight = 1
        hue = 0.3
        saturation = weight
        value = 1
    r, g, b = colorsys.hsv_to_rgb(hue, saturation, value)
    return f"rgb({int(r*256)},{int(g*256)},{int(b*256)})"


def link_traces(links: list[Link]) -> list[go.Scatter]:
    """
    To draw each line exactly how we want it we need to return one scatter-plot per line, and displaying that is
    super slow.
    Instead we group the lines into buckets and draw all the lines in the same bucket with the same color and width and
    make that a single scatter-plot.
    By varying the number of buckets one can balance precision of display with speed of rendering.
    """
    divisor = 20  # XXX: better explain

    # Each bucket contains a list of coordinates with holes.
    # See the gaps section of:  https://plotly.com/python/line-charts/
    edge_x_buckets: dict[int, list[Optional[float]]] = defaultdict(list)
    edge_y_buckets: dict[int, list[Optional[float]]] = defaultdict(list)
    for link in links:
        bucket_index = int(link.weight * divisor)
        edge_x = edge_x_buckets[bucket_index]
        edge_y = edge_y_buckets[bucket_index]
        edge_x.append(link.a.x)
        edge_y.append(link.a.y)
        edge_x.append(link.b.x)
        edge_y.append(link.b.y)
        edge_x.append(None)
        edge_y.append(None)

    traces = []
    for bucket_index in edge_y_buckets.keys():
        trace = go.Scatter(
            x=(edge_x_buckets[bucket_index]),
            y=(edge_y_buckets[bucket_index]),
            line=dict(width=0.4, color=color_for_weight(bucket_index / divisor)),
            hoverinfo="none",
            mode="lines",
        )
        traces.append(trace)

    return traces
