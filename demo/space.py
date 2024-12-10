
import gradio as gr
from app import demo as app
import os

_docs = {'BBoxAnnotator': {'description': 'Creates an image component that can be used to upload images with bounding box annotations (as an input)\nor display images with bounding box annotations (as an output). This component can be used to annotate\nimages.', 'members': {'__init__': {'value': {'type': 'str\n    | Path\n    | tuple[\n        str | Path,\n        list[tuple[int, int, int, int, str | None]],\n    ]\n    | None', 'default': 'None', 'description': 'A path or URL for the image, or a tuple of the image and list of (left, top, right, bottom, label) annotations.'}, 'categories': {'type': 'list[str] | None', 'default': 'None', 'description': 'a list of categories to choose from when annotating the image.'}, 'label': {'type': 'str | None', 'default': 'None', 'description': 'the label for this component, displayed above the component if `show_label` is `True` and is also used as the header if there are a table of examples for this component. If None and used in a `gr.Interface`, the label will be the name of the parameter this component corresponds to.'}, 'every': {'type': 'Timer | float | None', 'default': 'None', 'description': 'Continously calls `value` to recalculate it if `value` is a function (has no effect otherwise). Can provide a Timer whose tick resets `value`, or a float that provides the regular interval for the reset Timer.'}, 'inputs': {'type': 'Component | Sequence[Component] | set[Component] | None', 'default': 'None', 'description': 'Components that are used as inputs to calculate `value` if `value` is a function (has no effect otherwise). `value` is recalculated any time the inputs change.'}, 'show_label': {'type': 'bool | None', 'default': 'None', 'description': 'if True, will display label.'}, 'show_download_button': {'type': 'bool', 'default': 'True', 'description': 'If True, will display button to download annotations.'}, 'container': {'type': 'bool', 'default': 'True', 'description': 'If True, will place the component in a container - providing some extra padding around the border.'}, 'scale': {'type': 'int | None', 'default': 'None', 'description': 'relative size compared to adjacent Components. For example if Components A and B are in a Row, and A has scale=2, and B has scale=1, A will be twice as wide as B. Should be an integer. scale applies in Rows, and to top-level Components in Blocks where fill_height=True.'}, 'min_width': {'type': 'int', 'default': '160', 'description': 'minimum pixel width, will wrap if not sufficient screen space to satisfy this value. If a certain scale value results in this Component being narrower than min_width, the min_width parameter will be respected first.'}, 'interactive': {'type': 'bool | None', 'default': 'None', 'description': 'if True, will allow users to upload and edit an image; if False, can only be used to display images. If not provided, this is inferred based on whether the component is used as an input or output.'}, 'visible': {'type': 'bool', 'default': 'True', 'description': 'If False, component will be hidden.'}, 'elem_id': {'type': 'str | None', 'default': 'None', 'description': 'An optional string that is assigned as the id of this component in the HTML DOM. Can be used for targeting CSS styles.'}, 'elem_classes': {'type': 'list[str] | str | None', 'default': 'None', 'description': 'An optional list of strings that are assigned as the classes of this component in the HTML DOM. Can be used for targeting CSS styles.'}, 'render': {'type': 'bool', 'default': 'True', 'description': 'If False, component will not render be rendered in the Blocks context. Should be used if the intention is to assign event listeners now but render the component later.'}, 'key': {'type': 'int | str | None', 'default': 'None', 'description': 'if assigned, will be used to assume identity across a re-render. Components that have the same key across a re-render will have their value preserved.'}}, 'postprocess': {'value': {'type': 'str\n    | pathlib.Path\n    | tuple[\n        str | pathlib.Path,\n        list[tuple[int, int, int, int, str | None]],\n    ]\n    | None', 'description': 'Expects a `str` or `pathlib.Path` object containing the path to the image, or a tuple of'}}, 'preprocess': {'return': {'type': 'tuple[str, list[tuple[int, int, int, int, str | None]]]\n    | None', 'description': 'A tuple of `str` containing the path to the image and a list of annotations.'}, 'value': None}}, 'events': {'clear': {'type': None, 'default': None, 'description': 'This listener is triggered when the user clears the BBoxAnnotator using the clear button for the component.'}, 'change': {'type': None, 'default': None, 'description': 'Triggered when the value of the BBoxAnnotator changes either because of user input (e.g. a user types in a textbox) OR because of a function update (e.g. an image receives a value from the output of an event trigger). See `.input()` for a listener that is only triggered by user input.'}, 'upload': {'type': None, 'default': None, 'description': 'This listener is triggered when the user uploads a file into the BBoxAnnotator.'}}}, '__meta__': {'additional_interfaces': {}, 'user_fn_refs': {'BBoxAnnotator': []}}}

abs_path = os.path.join(os.path.dirname(__file__), "css.css")

with gr.Blocks(
    css=abs_path,
    theme=gr.themes.Default(
        font_mono=[
            gr.themes.GoogleFont("Inconsolata"),
            "monospace",
        ],
    ),
) as demo:
    gr.Markdown(
"""
# `gradio_bbox_annotator`

<div style="display: flex; gap: 7px;">
<img alt="Static Badge" src="https://img.shields.io/badge/version%20-%200.1.0%20-%20orange"> <a href="https://github.com/kyamagu/gradio-bbox-annotator/issues" target="_blank"><img alt="Static Badge" src="https://img.shields.io/badge/Issues-white?logo=github&logoColor=black"></a> 
</div>

Bounding box annotation tool
""", elem_classes=["md-custom"], header_links=True)
    app.render()
    gr.Markdown(
"""
## Installation

```bash
pip install gradio_bbox_annotator
```

## Usage

```python

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

```
""", elem_classes=["md-custom"], header_links=True)


    gr.Markdown("""
## `BBoxAnnotator`

### Initialization
""", elem_classes=["md-custom"], header_links=True)

    gr.ParamViewer(value=_docs["BBoxAnnotator"]["members"]["__init__"], linkify=[])


    gr.Markdown("### Events")
    gr.ParamViewer(value=_docs["BBoxAnnotator"]["events"], linkify=['Event'])




    gr.Markdown("""

### User function

The impact on the users predict function varies depending on whether the component is used as an input or output for an event (or both).

- When used as an Input, the component only impacts the input signature of the user function.
- When used as an output, the component only impacts the return signature of the user function.

The code snippet below is accurate in cases where the component is used as both an input and an output.

- **As input:** Is passed, a tuple of `str` containing the path to the image and a list of annotations.
- **As output:** Should return, expects a `str` or `pathlib.Path` object containing the path to the image, or a tuple of.

 ```python
def predict(
    value: tuple[str, list[tuple[int, int, int, int, str | None]]]
    | None
) -> str
    | pathlib.Path
    | tuple[
        str | pathlib.Path,
        list[tuple[int, int, int, int, str | None]],
    ]
    | None:
    return value
```
""", elem_classes=["md-custom", "BBoxAnnotator-user-fn"], header_links=True)




    demo.load(None, js=r"""function() {
    const refs = {};
    const user_fn_refs = {
          BBoxAnnotator: [], };
    requestAnimationFrame(() => {

        Object.entries(user_fn_refs).forEach(([key, refs]) => {
            if (refs.length > 0) {
                const el = document.querySelector(`.${key}-user-fn`);
                if (!el) return;
                refs.forEach(ref => {
                    el.innerHTML = el.innerHTML.replace(
                        new RegExp("\\b"+ref+"\\b", "g"),
                        `<a href="#h-${ref.toLowerCase()}">${ref}</a>`
                    );
                })
            }
        })

        Object.entries(refs).forEach(([key, refs]) => {
            if (refs.length > 0) {
                const el = document.querySelector(`.${key}`);
                if (!el) return;
                refs.forEach(ref => {
                    el.innerHTML = el.innerHTML.replace(
                        new RegExp("\\b"+ref+"\\b", "g"),
                        `<a href="#h-${ref.toLowerCase()}">${ref}</a>`
                    );
                })
            }
        })
    })
}

""")

demo.launch()
