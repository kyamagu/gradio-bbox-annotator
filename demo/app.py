
import gradio as gr
from gradio_imageannotator import ImageAnnotator


example = ImageAnnotator().example_value()

demo = gr.Interface(
    lambda x:x,
    ImageAnnotator(),  # interactive version of your component
    ImageAnnotator(),  # static version of your component
    # examples=[[example]],  # uncomment this line to view the "example version" of your component
)


if __name__ == "__main__":
    demo.launch()
