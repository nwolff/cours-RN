import json
from urllib.parse import urljoin

import config
import plotly.graph_objects as go
import requests
import streamlit as st
from network_layout import FeedForwardNetwork, LayerSpec
from traces import link_traces, neuron_traces


def fetch_and_display(base_uri):
    response = requests.get(urljoin(base_uri, "weights"))
    weights = json.loads(response.text)

    n = FeedForwardNetwork(
        LayerSpec("Couche d'entrée", 14 * 14, marker_size=10, neurons_per_row=7 * 7),
        LayerSpec("Couche cachée 1", 32, marker_size=16),
        LayerSpec("Couche cachée 2", 32, marker_size=16),
        LayerSpec("Couche de sortie", 10, marker_size=50),
    )

    fig = go.Figure(link_traces(n.get_links(weights)) + neuron_traces(n))
    fig.update_xaxes(visible=False)
    fig.update_yaxes(visible=False)
    fig.update_layout(
        showlegend=False,
        height=700,  # XXX
        font=dict(size=16, color="white"),
    )
    st.plotly_chart(fig, use_container_width=True)


st.set_page_config(layout="wide")

if st.sidebar.button("Afficher poids"):
    fetch_and_display(config.MLSERVER_BASE_URI)
