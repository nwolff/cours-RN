#!/usr/bin/env python
import argparse
import json
import random

import numpy as np
import tensorflow as tf
from flask import Flask

from helpers import map_leaves, np_arrays_to_lists, round_numbers, tf_variable_to_np

app = Flask(__name__)


model = tf.keras.models.load_model("model.h5")

feature_model = tf.keras.models.Model(
    inputs=model.input, outputs=[layer.output for layer in model.layers]
)

# Load and normalize test data
_, (x_test, _) = tf.keras.datasets.mnist.load_data()
x_test = x_test / 255


def get_random_prediction():
    image_index = random.randint(0, len(x_test))
    image = x_test[image_index]
    image_arr = np.reshape(image, (1, 784))
    return feature_model.predict(image_arr), image, image_index


@app.route("/")
def index():
    return "Bienvenue au serveur de modèle"


@app.route("/prediction/random")
def random_prediction():
    preds, image, image_index = get_random_prediction()
    data = {"prediction": preds, "image": image, "image_index": image_index}
    data = map_leaves(np_arrays_to_lists, data)
    data = map_leaves(round_numbers, data)
    return json.dumps(data)


@app.route("/weights")
def weights():
    weights = feature_model.weights
    data = map_leaves(tf_variable_to_np, weights)
    data = map_leaves(np_arrays_to_lists, data)
    data = map_leaves(round_numbers, data)
    return json.dumps(data)


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("-d", "--debug", action="store_true")
    args = parser.parse_args()
    app.run(host="0.0.0.0", port=8888, debug=args.debug)
