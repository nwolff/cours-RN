## Setting up python and dependencies

    pyenv install 3.10.11
    cd NNVisualizer

    allow direnv

    pip install -U pip
    pip install -r requirements.txt

## Developing

    pip install black isort
    black .
    isort .

## Training

The first model is very simple and trains quickly, the second one is much slower

    cd backend
    ./train_two_hidden_layers.py
    ./train_lenet.py

## Converting trained models for the frontend to use

     tensorflowjs_converter --input_format=keras trained_models/two_hidden_layers.h5 \
     ../frontend/static/two_hidden_layers

     tensorflowjs_converter --input_format=keras trained_models/le_net.h5 \
     ../frontend/static/le_net
