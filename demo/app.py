
import gradio as gr
from gradio_bbox_annotator import BBoxAnnotator


example = BBoxAnnotator().example_value()

demo = gr.Interface(
    lambda x: x,
    BBoxAnnotator(value=example, show_label=False),  # interactive version of your component
    BBoxAnnotator(show_label=False),  # static version of your component
    examples=[[example]],  # uncomment this line to view the "example version" of your component
)


if __name__ == "__main__":
    demo.launch()
