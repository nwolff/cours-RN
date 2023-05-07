import streamlit as st

st.set_page_config(
    page_title="Visualiseur de Réseau de Neurones",
)

st.write("# Visualiseur de Réseau de Neurones")

st.sidebar.success("Choisissez dans le menu au-dessus.")

from drawbox import drawbox

with st.sidebar:
    value = drawbox(my_input_value="hello there")
    print("python received value", value)
