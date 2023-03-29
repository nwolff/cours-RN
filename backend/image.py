import numpy as np
from PIL import Image
from tensorflow import keras

IMAGE_SIZE = 14


def resize(np_img, size=(IMAGE_SIZE, IMAGE_SIZE)):
    # It's much less work with opencv, but PIL does a much nicer job
    # See: https://zuru.tech/blog/the-dangers-behind-image-resizing
    np_img = np.expand_dims(np_img, axis=2)
    img = keras.utils.array_to_img(np_img)
    img = img.resize(size, resample=Image.Resampling.LANCZOS)
    return np.array(img)
