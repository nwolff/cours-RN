#!/usr/bin/env python
import argparse
import random
import json
import tensorflow as tf
import numpy as np
from flask import Flask, request


app = Flask(__name__)


model = tf.keras.models.load_model("model.h5")

feature_model = tf.keras.models.Model(
    inputs=model.input, outputs=[layer.output for layer in model.layers]
)

# Load and normalize test data
_, (x_test, _) = tf.keras.datasets.mnist.load_data()
x_test = x_test / 255


def get_random_prediction():
    image = random.choice(x_test)
    image_arr = np.reshape(image, (1, 784))
    return feature_model.predict(image_arr), image


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        preds, image = get_random_prediction()
        final_preds = [p.tolist() for p in preds]
        return json.dumps({"prediction": final_preds, "image": image.tolist()})
    return "Welcome to the model server!"


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("-d", "--debug", action="store_true")
    args = parser.parse_args()
    app.run(host="0.0.0.0", port=8888, debug=args.debug)
