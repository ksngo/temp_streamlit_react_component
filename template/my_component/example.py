import streamlit as st
from my_component import my_component

# Add some test code to play with the component while it's in development.
# During development, we can run this just as we would any other Streamlit
# app: `$ streamlit run my_component/example.py`

st.subheader("Login")

# Create an instance of our component with a constant `name` arg, and
# print its output value.
# name_input = st.text_input("args", value="Streamlit")
# output = my_component(name_input, key="foo")
output = my_component('args', key="foo")

st.markdown("email :  %s " % output["email"])
st.markdown("password :  %s " % output["password"])
st.markdown("submit :  %s " % output["submit"])

st.markdown("---")

