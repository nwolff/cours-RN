#!/usr/bin/env python
import numpy as np
import tensorflowjs as tfjs
from image import IMAGE_SIZE
from tensorflow import keras

# For repeatable results
keras.utils.set_random_seed(1)

mnist = keras.datasets.mnist
(train_images, train_labels), (test_images, test_labels) = mnist.load_data()

# Unroll the pixel grids and normalize values between 0 and 1
train_x = np.reshape(train_images, (60000, IMAGE_SIZE * IMAGE_SIZE)) / 255
test_x = np.reshape(test_images, (10000, IMAGE_SIZE * IMAGE_SIZE)) / 255

model = keras.models.Sequential(
    [
        keras.layers.Input(shape=(IMAGE_SIZE * IMAGE_SIZE,)),
        # Use ReLU instead of sigmoid for better results (but harder to draw neurons)
        keras.layers.Dense(32, use_bias=False, activation="sigmoid"),
        keras.layers.Dense(32, use_bias=False, activation="sigmoid"),
        keras.layers.Dense(10, use_bias=False, activation="softmax"),
    ]
)

print(model.summary())

model.compile(
    # crossentropy Because our classes are mutually exclusive
    loss="sparse_categorical_crossentropy",
    optimizer="adam",
    metrics=["accuracy"],
)

history = model.fit(
    train_x,
    train_labels,
    validation_data=(test_x, test_labels),
    epochs=40,
    batch_size=128,
    verbose=2,
)

scores = model.evaluate(test_x, test_labels, verbose=0)
print("Baseline Error: %.2f%%" % (100 - scores[1] * 100))

model.save("models/digits.h5")

tfjs.converters.save_keras_model(model, "models")
