#!/usr/bin/env python
import matplotlib.pyplot as plt
import numpy as np
from image import IMAGE_SIZE, resize
from tensorflow import keras


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

print("resizing images...")
train_images = [resize(img) for img in train_images]
test_images = [resize(img) for img in test_images]
print("done")
# show_training_data_sample(train_images, train_labels)

# Unroll the pixel grids
train_x = np.reshape(train_images, (60000, IMAGE_SIZE * IMAGE_SIZE))
test_x = np.reshape(test_images, (10000, IMAGE_SIZE * IMAGE_SIZE))

# Normalize values from 0 to 1
train_x = train_x / 255
test_x = test_x / 255

model = keras.models.Sequential(
    [
        keras.layers.Dense(
            32,
            activation="sigmoid",
            use_bias=False,
            input_shape=(IMAGE_SIZE * IMAGE_SIZE,),
        ),
        keras.layers.Dense(32, use_bias=False, activation="sigmoid"),
        keras.layers.Dense(10, use_bias=False, activation="softmax"),
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

model.save("models/digits.h5")
