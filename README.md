---
tags: [gradio-custom-component, BBoxAnnotator, image, annotation, bbox]
title: gradio_bbox_annotator
short_description: Bounding box annotation tool that supports insertion and editing
colorFrom: blue
colorTo: yellow
sdk: gradio
pinned: false
app_file: space.py
---

# `gradio_bbox_annotator`
<a href="https://pypi.org/project/gradio_bbox_annotator/" target="_blank"><img alt="PyPI - Version" src="https://img.shields.io/pypi/v/gradio_bbox_annotator"></a> <a href="https://github.com/kyamagu/gradio-bbox-annotator/issues" target="_blank"><img alt="Static Badge" src="https://img.shields.io/badge/Issues-white?logo=github&logoColor=black"></a> <a href="https://huggingface.co/spaces/kyamagu/gradio_bbox_annotator/discussions" target="_blank"><img alt="Static Badge" src="https://img.shields.io/badge/%F0%9F%A4%97%20Discuss-%23097EFF?style=flat&logoColor=black"></a>

Bounding box annotation tool that supports insertion and editing

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
    BBoxAnnotator(value=example, show_label=False),  # input is interactive
    BBoxAnnotator(show_label=False),  # output is static
    examples=[[example]],  # examples are in the gallery format
)


if __name__ == "__main__":
    demo.launch()

```

## `BBoxAnnotator`

### Initialization

<table>
<thead>
<tr>
<th align="left">name</th>
<th align="left" style="width: 25%;">type</th>
<th align="left">default</th>
<th align="left">description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left"><code>value</code></td>
<td align="left" style="width: 25%;">

```python
str
    | Path
    | tuple[
        str | Path,
        list[tuple[int, int, int, int, str | None]],
    ]
    | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">A path or URL for the image, or a tuple of the image and list of (left, top, right, bottom, label) annotations.</td>
</tr>

<tr>
<td align="left"><code>categories</code></td>
<td align="left" style="width: 25%;">

```python
list[str] | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">a list of categories to choose from when annotating the image.</td>
</tr>

<tr>
<td align="left"><code>label</code></td>
<td align="left" style="width: 25%;">

```python
str | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">the label for this component, displayed above the component if `show_label` is `True` and is also used as the header if there are a table of examples for this component. If None and used in a `gr.Interface`, the label will be the name of the parameter this component corresponds to.</td>
</tr>

<tr>
<td align="left"><code>every</code></td>
<td align="left" style="width: 25%;">

```python
Timer | float | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">Continously calls `value` to recalculate it if `value` is a function (has no effect otherwise). Can provide a Timer whose tick resets `value`, or a float that provides the regular interval for the reset Timer.</td>
</tr>

<tr>
<td align="left"><code>inputs</code></td>
<td align="left" style="width: 25%;">

```python
Component | Sequence[Component] | set[Component] | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">Components that are used as inputs to calculate `value` if `value` is a function (has no effect otherwise). `value` is recalculated any time the inputs change.</td>
</tr>

<tr>
<td align="left"><code>show_label</code></td>
<td align="left" style="width: 25%;">

```python
bool | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">if True, will display label.</td>
</tr>

<tr>
<td align="left"><code>show_download_button</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If True, will display button to download annotations.</td>
</tr>

<tr>
<td align="left"><code>container</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If True, will place the component in a container - providing some extra padding around the border.</td>
</tr>

<tr>
<td align="left"><code>scale</code></td>
<td align="left" style="width: 25%;">

```python
int | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">relative size compared to adjacent Components. For example if Components A and B are in a Row, and A has scale=2, and B has scale=1, A will be twice as wide as B. Should be an integer. scale applies in Rows, and to top-level Components in Blocks where fill_height=True.</td>
</tr>

<tr>
<td align="left"><code>min_width</code></td>
<td align="left" style="width: 25%;">

```python
int
```

</td>
<td align="left"><code>160</code></td>
<td align="left">minimum pixel width, will wrap if not sufficient screen space to satisfy this value. If a certain scale value results in this Component being narrower than min_width, the min_width parameter will be respected first.</td>
</tr>

<tr>
<td align="left"><code>interactive</code></td>
<td align="left" style="width: 25%;">

```python
bool | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">if True, will allow users to upload and edit an image; if False, can only be used to display images. If not provided, this is inferred based on whether the component is used as an input or output.</td>
</tr>

<tr>
<td align="left"><code>visible</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If False, component will be hidden.</td>
</tr>

<tr>
<td align="left"><code>elem_id</code></td>
<td align="left" style="width: 25%;">

```python
str | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">An optional string that is assigned as the id of this component in the HTML DOM. Can be used for targeting CSS styles.</td>
</tr>

<tr>
<td align="left"><code>elem_classes</code></td>
<td align="left" style="width: 25%;">

```python
list[str] | str | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">An optional list of strings that are assigned as the classes of this component in the HTML DOM. Can be used for targeting CSS styles.</td>
</tr>

<tr>
<td align="left"><code>render</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If False, component will not render be rendered in the Blocks context. Should be used if the intention is to assign event listeners now but render the component later.</td>
</tr>

<tr>
<td align="left"><code>key</code></td>
<td align="left" style="width: 25%;">

```python
int | str | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">if assigned, will be used to assume identity across a re-render. Components that have the same key across a re-render will have their value preserved.</td>
</tr>
</tbody></table>


### Events

| name | description |
|:-----|:------------|
| `clear` | This listener is triggered when the user clears the BBoxAnnotator using the clear button for the component. |
| `change` | Triggered when the value of the BBoxAnnotator changes either because of user input (e.g. a user types in a textbox) OR because of a function update (e.g. an image receives a value from the output of an event trigger). See `.input()` for a listener that is only triggered by user input. |
| `upload` | This listener is triggered when the user uploads a file into the BBoxAnnotator. |



### User function

The impact on the users predict function varies depending on whether the component is used as an input or output for an event (or both).

- When used as an Input, the component only impacts the input signature of the user function.
- When used as an output, the component only impacts the return signature of the user function.

The code snippet below is accurate in cases where the component is used as both an input and an output.

- **As output:** Is passed, a tuple of `str` containing the path to the image and a list of annotations.
- **As input:** Should return, expects a `str` or `pathlib.Path` object containing the path to the image, or a tuple of.

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
 
