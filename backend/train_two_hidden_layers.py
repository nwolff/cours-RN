#!/usr/bin/env python

import tensorflow as tf
from tensorflow import keras
from keras import datasets, models, layers, losses

# For repeatable results
keras.utils.set_random_seed(1)

(x_train, y_train), (x_test, y_test) = datasets.mnist.load_data()

# Unroll the pixel grids and normalize values between 0 and 1
IMAGE_SIZE = 28
x_train = tf.reshape(x_train, (60000, IMAGE_SIZE * IMAGE_SIZE)) / 255
x_test = tf.reshape(x_test, (10000, IMAGE_SIZE * IMAGE_SIZE)) / 255

x_val = x_train[-2000:, :]
y_val = y_train[-2000:]
x_train = x_train[:-2000, :]
y_train = y_train[:-2000]

model = models.Sequential(
    [
        layers.Dense(32, activation="relu", input_shape=x_train.shape[1:]),
        layers.Dense(32, activation="relu"),
        layers.Dense(10, activation="softmax"),
    ]
)

model.summary()

model.compile(
    optimizer="adam",
    loss=losses.sparse_categorical_crossentropy,
    metrics=["accuracy"],
)

history = model.fit(
    x_train,
    y_train,
    batch_size=64,
    epochs=40,
    validation_data=(x_val, y_val),
)

print("")
print("TESTING :")
scores = model.evaluate(x_test, y_test, verbose=0)
print("Loss: %.2f%%" % (scores[0] * 100))
print("Accuracy: %.2f%%" % (scores[1] * 100))

model.save("trained_models/two_hidden_layers.h5")
