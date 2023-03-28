import json
from urllib.parse import urljoin

import config
import numpy as np
import plotly.graph_objects as go
import requests
import streamlit as st
from network_layout import LayerSpec, Network


def get_node_traces(n):
    node_traces = []
    for layer in n.layers:
        positions = layer.neuron_positions
        node_trace = go.Scattergl(
            x=[p.x for p in positions],
            y=[p.y for p in positions],
            text=list(range(layer.neuron_count)),
            name=layer.name,
            mode="markers+text",
            marker=dict(
                color=layer.neuron_activations,
                symbol="square",
                colorscale="Greens",
                line=dict(width=1),
                size=25,
            ),
            hovertemplate="Activation: %{marker.color}" + "<extra></extra>",
        )
        node_traces.append(node_trace)
    fig = go.Figure(node_traces)
    fig.update_layout(showlegend=False, height=700)  # XXX
    fig.update_xaxes(visible=False)
    fig.update_yaxes(visible=False)
    return fig


def fetch_and_display(base_uri):
    response = requests.get(urljoin(base_uri, "predictions/random"))
    response = json.loads(response.text)
    prediction = response["prediction"]
    image = np.array(response["image"])
    image_index = response["image_index"]
    correct_answer = response["correct_answer"]

    st.sidebar.header("Image d'entrée")
    st.sidebar.image(1 - image, width=100)
    st.sidebar.text(f"(Index : {image_index})")

    n = Network(
        LayerSpec("Couche d'entrée", 14 * 14, neurons_per_row=7 * 7),
        LayerSpec("Couche cachée 1", 32),
        LayerSpec("Couche cachée 2", 32),
        LayerSpec("Couche de sortie", 10),
    )

    # Activations are just a list of neuron activations per layer.
    # Build if from the data at hand that comes from the input image + the tensor-flow prediction
    n.set_activations([image.flatten()] + [np.squeeze(p) for p in prediction])
    n.correct_answer = correct_answer

    fig = get_node_traces(n)
    st.plotly_chart(fig, use_container_width=True)


st.set_page_config(layout="wide")

if st.sidebar.button("Prédiction aléatoire"):
    fetch_and_display(config.BASE_URI)
