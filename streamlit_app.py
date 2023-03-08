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
    correct_answer = response["label"]
    image = np.array(image)

    st.sidebar.image(image, width=150)
    st.sidebar.text(f"(Index : {image_index})")

    # Input layer
    st.text("Couche d'entrée")
    fig = plt.figure()
    image_arr = np.reshape(image, (8, 28 * 28 // 8))
    plt.imshow(image_arr, cmap="Greens")
    plt.xticks([])
    plt.yticks([])
    st.pyplot(fig)

    # Inner layers
    for layer, p in enumerate(prediction[:-1]):
        st.text("Couche cachée {}".format(layer + 1))
        activations = np.array(p)
        fig = plt.figure()
        plt.imshow(activations, cmap="Blues")
        plt.xticks([])
        plt.yticks([])
        st.pyplot(fig)

    # Output layer
    st.text("Couche de sortie")
    fig = plt.figure()
    activations = np.array(prediction[-1])
    im = plt.imshow(activations, cmap="Reds")

    output = np.squeeze(activations)  # Just a 1D array

    # Ticks with highlighted correct answer
    label_texts = []
    for i in range(len(output)):
        if i == correct_answer:
            label_texts.append(f"$\\bf{i}$")
        else:
            label_texts.append(i)
    plt.xticks(np.arange(len(output)), labels=label_texts)
    plt.yticks([])

    # Grid
    plt.xticks(np.arange(len(output)) - 0.5, minor=True)
    plt.grid(which="minor")

    # Show scores inside boxes. Text in white is hard to read when values are low, which is on purpose
    ax = im.axes
    for i, o in enumerate(output):
        ax.text(i, 0, o, ha="center", va="center", color="w")
    st.pyplot(fig)
