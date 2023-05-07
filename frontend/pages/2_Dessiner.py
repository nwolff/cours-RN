import json
from urllib.parse import urljoin

import config
import numpy as np
import plotly.graph_objects as go
import requests
import streamlit as st
from network_layout import FeedForwardNetwork, LayerSpec, Link
from traces import link_traces, neuron_traces


def fetch_and_display(base_uri):
    response = requests.get(urljoin(base_uri, "predictions/random"))
    response = json.loads(response.text)
    prediction = response["prediction"]

    image = np.array(response["image"])
    image_index = response["image_index"]
    _correct_answer = response["correct_answer"]

    st.sidebar.header("Image d'entrée")
    st.sidebar.image(1 - image, width=100)
    st.sidebar.text(f"(Index : {image_index})")

    response = requests.get(urljoin(base_uri, "weights"))
    weights = json.loads(response.text)

    n = FeedForwardNetwork(
        LayerSpec("Couche d'entrée", 14 * 14, marker_size=10, neurons_per_row=7 * 7),
        LayerSpec("Couche cachée 1", 32, marker_size=16),
        LayerSpec("Couche cachée 2", 32, marker_size=16),
        LayerSpec("Couche de sortie", 10, marker_size=50),
    )

    # Map the input image and the tensor-flow prediction to a lol of floats
    n.set_activations([image.flatten()] + [np.squeeze(p) for p in prediction])

    def link_filter(link: Link) -> bool:
        return link.a.activation > 0.15 and abs(link.weight) > 0.3

    links = n.get_links(weights, link_filter)
    fig = go.Figure(link_traces(links) + neuron_traces(n))
    fig.update_xaxes(visible=False)
    fig.update_yaxes(visible=False)
    fig.update_layout(
        showlegend=False,
        height=700,  # XXX
        font=dict(size=16, color="white"),
    )
    st.plotly_chart(fig, use_container_width=True)


st.set_page_config(layout="wide")

from drawbox import drawbox

if st.sidebar.button("Dessiner"):
    with st.sidebar:
        value = drawbox(my_input_value="hello there")
        print("python received value", value)
        st.write("Received", value)
        # fetch_and_display(config.MLSERVER_BASE_URI)
