#!/usr/bin/env python
import matplotlib.pyplot as plt
import numpy as np
import tensorflow as tf
from tensorflow import keras

from utils.image import resize


def show_training_data_sample(images, labels):
    plt.figure(figsize=(10, 10)),
    for i in range(16):
        plt.subplot(4, 4, i + 1)
        plt.imshow(images[i], cmap="binary")
        plt.xlabel(str(labels[i]))
        plt.xticks([])
        plt.yticks([])
    plt.show()


mnist = keras.datasets.mnist
(train_images, train_labels), (test_images, test_labels) = mnist.load_data()

IMAGE_SIZE = 14

print("resizing...")
train_images = [resize(img, [IMAGE_SIZE, IMAGE_SIZE]) for img in train_images]
test_images = [resize(img, [IMAGE_SIZE, IMAGE_SIZE]) for img in test_images]
print("done")
# show_training_data_sample(train_images, train_labels)

# Unroll the pixel grids
train_x = np.reshape(train_images, (60000, IMAGE_SIZE * IMAGE_SIZE))
test_x = np.reshape(test_images, (10000, IMAGE_SIZE * IMAGE_SIZE))

# Normalize values from 0 to 1
train_x = train_x / 255
test_x = test_x / 255

model = tf.keras.models.Sequential(
    [
        tf.keras.layers.Dense(
            32, activation="sigmoid", input_shape=(IMAGE_SIZE * IMAGE_SIZE,)
        ),
        tf.keras.layers.Dense(32, activation="sigmoid"),
        tf.keras.layers.Dense(10, activation="softmax"),
    ]
)

model.compile(
    loss="sparse_categorical_crossentropy", optimizer="adam", metrics=["accuracy"]
)

_ = model.fit(
    train_x,
    train_labels,
    validation_data=(test_x, test_labels),
    epochs=20,
    batch_size=512,
    verbose=2,
)

model.save("model.h5")
