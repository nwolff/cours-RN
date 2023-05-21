#!/usr/bin/env python
"""
Based on :
https://medium.com/analytics-vidhya/lenet-with-tensorflow-a35da0d503df

"""
import tensorflow as tf
from tensorflow import keras
from keras import datasets, models, layers, losses

# For repeatable results
keras.utils.set_random_seed(1)

(x_train, y_train), (x_test, y_test) = datasets.mnist.load_data()

# Le net expects 32x32 pixel grids. Also normalize between 0 and 1
x_train = tf.pad(x_train, [[0, 0], [2, 2], [2, 2]]) / 255
x_test = tf.pad(x_test, [[0, 0], [2, 2], [2, 2]]) / 255

x_train = tf.expand_dims(x_train, axis=3)
x_test = tf.expand_dims(x_test, axis=3)

x_val = x_train[-2000:, :, :, :]
y_val = y_train[-2000:]
x_train = x_train[:-2000, :, :, :]
y_train = y_train[:-2000]

model = models.Sequential(
    [
        layers.Conv2D(6, 5, activation="tanh", input_shape=x_train.shape[1:]),
        layers.AveragePooling2D(2),
        layers.Activation("sigmoid"),
        layers.Conv2D(16, 5, activation="tanh"),
        layers.AveragePooling2D(2),
        layers.Activation("sigmoid"),
        layers.Conv2D(120, 5, activation="tanh"),
        layers.Flatten(),
        layers.Dense(84, activation="tanh"),
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

model.save("trained_models/le_net.h5")
