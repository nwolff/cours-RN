import numpy
import tensorflow as tf


def map_leaves(fn, o):
    """
    Expects an arbitrary combination of dict, list, tuple of objects.
    Returns a collection of the same shape with fn applied to leaf elements.
    (map keys are not transformed).

    Doesn't defend against cycles.
    """
    if isinstance(o, list):
        return [map_leaves(fn, e) for e in o]
    elif isinstance(o, tuple):
        return tuple(map_leaves(fn, e) for e in o)
    elif isinstance(o, dict):
        return {k: map_leaves(fn, v) for k, v in o.items()}
    else:
        return fn(o)


def np_number_to_python(o):
    if isinstance(o, numpy.number):
        return o.item()
    else:
        return o


def np_arrays_to_lists(o):
    if isinstance(o, numpy.ndarray):
        return o.tolist()
    else:
        return o


def round_numbers(o, digits=2):
    if isinstance(o, float):
        return round(o, digits)
    else:
        return o


def tf_variable_to_np(o):
    if isinstance(o, tf.Variable):
        return o.numpy()
    else:
        return o


def np_to_python(data):
    # Order is important
    data = map_leaves(tf_variable_to_np, data)
    data = map_leaves(np_arrays_to_lists, data)
    data = map_leaves(np_number_to_python, data)
    data = map_leaves(round_numbers, data)
    return data
