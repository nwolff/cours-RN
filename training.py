#!/usr/bin/env python
import matplotlib.pyplot as plt
import numpy as np
import tensorflow as tf


def show_training_data(x_train, y_train):
    plt.figure(figsize=(10, 10)),
    for i in range(16):
        plt.subplot(4, 4, i + 1)
        plt.imshow(x_train[i], cmap="binary")
        plt.xlabel(str(y_train[i]))
        plt.xticks([])
        plt.yticks([])
    plt.show()


(x_train, y_train), (x_test, y_test) = tf.keras.datasets.mnist.load_data()

# show_training_data(x_train, y_train)

# Unroll the pixel grids
x_train = np.reshape(x_train, (60000, 28 * 28))
x_test = np.reshape(x_test, (10000, 28 * 28))

# Normalize values from 0 to 1
x_train = x_train / 255
x_test = x_test / 255


model = tf.keras.models.Sequential(
    [
        tf.keras.layers.Dense(32, activation="sigmoid", input_shape=(784,)),
        tf.keras.layers.Dense(32, activation="sigmoid"),
        tf.keras.layers.Dense(10, activation="softmax"),
    ]
)

model.compile(
    loss="sparse_categorical_crossentropy", optimizer="adam", metrics=["accuracy"]
)

_ = model.fit(
    x_train,
    y_train,
    validation_data=(x_test, y_test),
    epochs=15,
    batch_size=1024,
    verbose=2,
)

model.save("model.h5")
