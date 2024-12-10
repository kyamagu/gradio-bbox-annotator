
import gradio as gr
from gradio_bbox_annotator import BBoxAnnotator


example = BBoxAnnotator().example_value()

demo = gr.Interface(
    lambda x: x,
    BBoxAnnotator(value=example, show_label=False),  # input is interactive
    BBoxAnnotator(show_label=False),  # output is static
    examples=[[example]],  # examples are in the gallery format
)


if __name__ == "__main__":
    demo.launch()
