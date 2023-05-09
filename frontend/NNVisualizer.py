import config
import numpy as np
from drawbox import drawbox
import plotly.graph_objects as go
import requests
import streamlit as st
from network_layout import FeedForwardNetwork, LayerSpec, Link
from traces import link_traces, neuron_traces

import json
from urllib.parse import urljoin
import serialization

st.set_page_config(
    page_title="Visualiseur de Réseau de Neurones",
    layout="wide"
)

st.write("# Visualiseur de Réseau de Neurones")

st.sidebar.success("Choisissez dans le menu au-dessus.")



def prediction_plot(base_uri, image):
    image_json = json.dumps(serialization.np_to_python(image))
    prediction_response = requests.post(urljoin(base_uri, "predictions"), json=image_json)
    prediction = json.loads(prediction_response.text)

    weights_response = requests.get(urljoin(base_uri, "weights"))
    weights = json.loads(weights_response.text)

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
    return fig


drawnPixels = drawbox()
if drawnPixels is not None:
    print("python received value", drawnPixels)
    image = np.array(drawnPixels)
    st.sidebar.header("Image d'entrée")
    st.sidebar.image(1 - image, width=100)
    plot = prediction_plot(config.MLSERVER_BASE_URI, image)
    st.plotly_chart(plot, use_container_width=True)
