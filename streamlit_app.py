import json
from urllib.parse import urljoin

import matplotlib.pyplot as plt
import numpy as np
import requests
import streamlit as st

BASE_URI = "http://localhost:8888"


def add_grid(im, image_arr):
    # Grid to sse pixels better
    shape = image_arr.shape
    plt.xticks(np.arange(shape[1]) - 0.5, minor=True)
    plt.yticks(np.arange(shape[0]) - 0.5, minor=True)
    plt.grid(which="minor")
    # ... but no ticks, nor labels
    im.axes.tick_params(axis="both", which="both", length=0)
    im.axes.xaxis.set_ticklabels([])
    im.axes.yaxis.set_ticklabels([])


def input_layer_fig(image):
    fig = plt.figure()
    rows = 16
    image_arr = np.reshape(image, (rows, 28 * 28 // rows))
    im = plt.imshow(image_arr, cmap="Greys")
    add_grid(im, image_arr)
    return fig


def hidden_layer_fig(p):
    activations = np.array(p)
    fig = plt.figure()
    im = plt.imshow(activations, cmap="BuGn")
    add_grid(im, activations)
    return fig


def output_layer_fig(p):
    fig = plt.figure()
    activations = np.array(p)
    im = plt.imshow(activations, cmap="Greens")

    # A grid with no ticks
    add_grid(im, activations)

    output = np.squeeze(activations)  # Just a 1D array

    # Show scores inside boxes. Text in white is hard to read when values are low, which is on purpose
    ax = im.axes
    for i, o in enumerate(output):
        ax.text(i, 0, int(o * 100), ha="center", va="center", color="w")

    # Ticks with highlighted correct answer
    label_texts = []
    for i in range(len(output)):
        if i == correct_answer:
            label_texts.append(f"$\\bf{i}$")
        else:
            label_texts.append(i)
    plt.xticks(np.arange(len(output)), labels=label_texts)

    return fig


if st.sidebar.button("Prédiction aléatoire"):
    response = requests.get(urljoin(BASE_URI, "predictions/random"))
    response = json.loads(response.text)
    prediction = response["prediction"]
    image = response["image"]
    image_index = response["image_index"]
    correct_answer = response["correct_answer"]
    image = np.array(image)

    st.sidebar.header("Image d'entrée")
    st.sidebar.image(1 - image, width=150)
    st.sidebar.text(f"(Index : {image_index})")

    # Input layer
    st.text("Couche d'entrée")
    st.pyplot(input_layer_fig(image))

    # Inner layers
    for layer, p in enumerate(prediction[:-1]):
        st.text("Couche cachée {}".format(layer + 1))
        st.pyplot(hidden_layer_fig(p))

    # Output layer
    st.text("Couche de sortie")
    st.pyplot(output_layer_fig(prediction[-1]))
