## Setting up python and dependencies

pyenv install 3.10.11
cd NNVizalizer

allow direnv

pip install -U pip
pip install -R dev-requirements.txt

## Training

`cd backend`
`./training.py`

## Running

`cd backend`
`./ml_server.py` to load the trained model and serve the NN weights and predictions over a rest API.

`cd frontend`
`streamlit run frontend/NNVisualizer.py` for the frontend that uses the REST api.

## Developing

`black .`
`isort .`
`mypy .`

