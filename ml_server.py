#!/usr/bin/env python
import argparse
import json
import random

import numpy as np
import tensorflow as tf
from flask import Flask

import serialization

app = Flask(__name__, static_folder=None)


model = tf.keras.models.load_model("model.h5")

feature_model = tf.keras.models.Model(
    inputs=model.input, outputs=[layer.output for layer in model.layers]
)

# Load and normalize test data
_, (x_test, y_test) = tf.keras.datasets.mnist.load_data()
x_test = x_test / 255


def get_random_prediction():
    image_index = random.randint(0, len(x_test))
    image = x_test[image_index]
    image_arr = np.reshape(image, (1, 784))
    label = y_test[image_index]
    return feature_model.predict(image_arr), image, image_index, label


@app.route("/")
def index():
    urls = [rule.rule for rule in app.url_map.iter_rules()]
    return json.dumps({"urls": urls})


@app.route("/predictions/random")
def random_prediction():
    prediction, image, image_index, label = get_random_prediction()
    data = {
        "prediction": prediction,
        "image": image,
        "image_index": image_index,
        "label": label,
    }
    return json.dumps(serialization.np_to_python(data))


@app.route("/weights")
def weights():
    data = feature_model.weights
    return json.dumps(serialization.np_to_python(data))


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("-d", "--debug", action="store_true")
    args = parser.parse_args()
    app.run(host="0.0.0.0", port=8888, debug=args.debug)
