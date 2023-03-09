## Training

cd `backend`
Run `./training.py`

## Running

cd `backend`
Run `./ml_server.py` to load the trained model and serve 
the NN weights and predictions over a rest API.

Run `streamlit run frontend/NNVisualizer.py` for the frontend that uses the REST api.

## Developing

`black .`
`isort .`
