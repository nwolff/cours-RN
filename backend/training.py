#!/usr/bin/env python
import numpy as np
from image import IMAGE_SIZE, resize
from tensorflow import keras

# For repeatable results
keras.utils.set_random_seed(1)

mnist = keras.datasets.mnist
(train_images, train_labels), (test_images, test_labels) = mnist.load_data()

print("Resizing images...")
train_images = [resize(img) for img in train_images]
test_images = [resize(img) for img in test_images]
print("done")

# Unroll the pixel grids and normalize values between 0 and 1
train_x = np.reshape(train_images, (60000, IMAGE_SIZE * IMAGE_SIZE)) / 255
test_x = np.reshape(test_images, (10000, IMAGE_SIZE * IMAGE_SIZE)) / 255

# ReLU instead of sigmoid for better results (but harder to draw neurons)
model = keras.models.Sequential(
    [
        keras.layers.Input(shape=(IMAGE_SIZE * IMAGE_SIZE,)),
        keras.layers.Dense(32, use_bias=False, activation="sigmoid"),
        keras.layers.Dense(32, use_bias=False, activation="sigmoid"),
        keras.layers.Dense(10, use_bias=False, activation="softmax"),
    ]
)

print(model.summary())

model.compile(
    loss="sparse_categorical_crossentropy",  # Because our classes are mutually exclusive
    optimizer="adam",
    metrics=["accuracy"],
)

history = model.fit(
    train_x,
    train_labels,
    validation_data=(test_x, test_labels),
    epochs=20,
    batch_size=512,
    verbose=2,
)

model.save("models/digits.h5")
