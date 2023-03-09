#!/usr/bin/env python

"""
To run in debug mode :  flask --app ml_server.py run --debug
Note that will reload incessantly, because it monitors all files, including the .env directory
and I think tensorflow writes files there.
"""
import json
import random

import numpy as np
import serialization
from flask import Flask
from image import IMAGE_SIZE, resize
from tensorflow import keras

app = Flask(__name__, static_folder=None)

model = keras.models.load_model("models/digits.h5")

feature_model = keras.models.Model(
    inputs=model.input, outputs=[layer.output for layer in model.layers]
)

# Load and normalize test data
_, (images_test, labels_test) = keras.datasets.mnist.load_data()

# Resize images
images_test = [resize(img) for img in images_test]
# Normalize values from 0 to 1
images_test = [img / 255 for img in images_test]


def get_prediction(image_index):
    image = images_test[image_index]
    correct_answer = labels_test[image_index]
    image_array = np.reshape(image, (1, IMAGE_SIZE * IMAGE_SIZE))
    prediction = feature_model.predict(image_array)
    return {
        "prediction": prediction,
        "image": image,
        "image_index": image_index,
        "correct_answer": correct_answer,
    }


@app.route("/")
def index():
    urls = [rule.rule for rule in app.url_map.iter_rules()]
    return json.dumps({"urls": urls})


@app.route("/predictions/random")
def random_prediction():
    image_index = random.randint(0, len(images_test))
    data = get_prediction(image_index)
    return json.dumps(serialization.np_to_python(data))


@app.route("/predictions/<int:image_index>")
def prediction(image_index):
    data = get_prediction(image_index)
    return json.dumps(serialization.np_to_python(data))


@app.route("/weights")
def weights():
    data = model.weights
    return json.dumps(serialization.np_to_python(data))


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8888)  # Listen on all interfaces
