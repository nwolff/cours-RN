import plotly.graph_objects as go
from lib.network_layout import FeedForwardNetwork


def neuron_traces(network: FeedForwardNetwork) -> list[go.Scattergl]:
    traces = []
    for layer in network.layers:
        first_layer = layer == network.layers[0]
        last_layer = layer == network.layers[-1]
        positions = layer.neuron_positions
        trace = go.Scattergl(
            x=[p.x for p in positions],
            y=[p.y for p in positions],
            text=[f"{int(a * 100)}%" for a in layer.neuron_activations],
            name=layer.name,
            mode="markers+text" if last_layer else "markers",
            marker=dict(
                color=layer.neuron_activations,
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


def connection_traces(network: FeedForwardNetwork) -> list[go.Scattergl]:
    edge_x = []
    edge_y = []
    for link in network.get_links():
        x0, y0 = link.a.x, link.a.y
        x1, y1 = link.b.x, link.b.y
        edge_x.append(x0)
        edge_x.append(x1)
        edge_x.append(None)
        edge_y.append(y0)
        edge_y.append(y1)
        edge_y.append(None)

    trace = go.Scattergl(
        x=edge_x,
        y=edge_y,
        line=dict(width=0.5, color="#888"),
        hoverinfo="none",
        mode="lines",
    )

    return [trace]
