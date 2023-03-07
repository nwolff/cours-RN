# To run:
#
# streamlit run streamlit_app.py
#

import json
from urllib.parse import urljoin

import matplotlib.pyplot as plt
import numpy as np
import requests
import streamlit as st

BASE_URI = "http://localhost:8888"

st.title("Visualiseur de Réseau de Neurones")
st.sidebar.markdown("Image d'entrée")

if st.button("Prédiction aléatoire"):
    response = requests.get(urljoin(BASE_URI, "predictions/random"))
    response = json.loads(response.text)
    prediction = response["prediction"]
    image = response["image"]
    image_index = response["image_index"]
    label = response["label"]
    image = np.array(image)

    st.sidebar.image(image, width=150)
    st.sidebar.text(f"(Index : {image_index})")

    for layer, p in enumerate(prediction):
        activations = np.squeeze(np.array(p))
        fig = plt.figure(figsize=(32, 4))
        if layer == 2:  # The last layer
            row, col = 1, 10
        else:
            row, col = 1, 32
        for i, activation in enumerate(activations):
            plt.subplot(row, col, i + 1)
            plt.imshow(activation * np.ones((1, 1, 3)).astype("float32"))
            plt.xticks([])
            plt.yticks([])

            if layer == 2:
                if label == i:
                    label_color = "red"
                else:
                    label_color = "black"
                plt.xlabel(str(i), fontsize=50, labelpad=20, color=label_color)

        # plt.subplots_adjust(wspace=0.05, hspace=0.05)
        plt.tight_layout()
        st.text("Couche {}".format(layer + 1))
        st.pyplot(fig)
