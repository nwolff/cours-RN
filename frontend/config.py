"""
We want to share things between pages, but when in pages we cannot import from
the main entrypoint (or we get streamlit errors).

So we put the shared stuff in this module.
"""
BASE_URI = "http://localhost:8888"
