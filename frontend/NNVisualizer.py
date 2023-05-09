import json
from urllib.parse import urljoin

import config
import numpy as np
import plotly.graph_objects as go
import requests
import streamlit as st
from drawbox import drawbox
from lib import serialization
from lib.network_layout import Link
from network import network
from traces import link_traces, neuron_traces

st.set_page_config(page_title="Visualiseur de Réseau de Neurones", layout="wide")

st.sidebar.success("Choisissez dans le menu au-dessus.")


def prediction_plot(base_uri, image):
    prediction_response = requests.post(
        urljoin(base_uri, "predictions"), json=serialization.np_to_python(image)
    )
    prediction = json.loads(prediction_response.text)

    weights_response = requests.get(urljoin(base_uri, "weights"))
    weights = json.loads(weights_response.text)

    n = network()

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
    image = np.array(drawnPixels)
    st.sidebar.header("Image d'entrée")
    st.sidebar.image(1 - image, width=100)
    plot = prediction_plot(config.MLSERVER_BASE_URI, image)
    st.plotly_chart(plot, use_container_width=True, config=dict(displayModeBar=False))
