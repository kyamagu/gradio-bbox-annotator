"""gr.BboxAnnotator() component."""

from __future__ import annotations

from collections.abc import Sequence
from pathlib import Path
from typing import TYPE_CHECKING, Any

from gradio_client import handle_file
from gradio_client.documentation import document

from gradio.components.base import Component
from gradio.data_classes import FileData, GradioModel
from gradio.events import Events

if TYPE_CHECKING:
    from gradio.components import Timer


EXAMPLE_IMAGE_URL = (
    "https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png"
)


class Annotation(GradioModel):
    """Bounding box annotation data."""
    left: int
    top: int
    right: int
    bottom: int
    label: str | None

    @property
    def width(self) -> int:
        return self.right - self.left

    @property
    def height(self) -> int:
        return self.bottom - self.top


class AnnotatedImage(GradioModel):
    """Annotated image data."""
    image: FileData
    annotations: list[Annotation]


@document()
class BBoxAnnotator(Component):
    """
    Creates an image component that can be used to upload images with bounding box annotations (as an input)
    or display images with bounding box annotations (as an output). This component can be used to annotate
    images.
    """

    EVENTS = [
        Events.clear,
        Events.change,
        Events.upload,
    ]

    data_model = AnnotatedImage

    def __init__(
        self,
        value: str
        | Path
        | tuple[str | Path, list[tuple[int, int, int, int, str | None]]]
        | None = None,
        *,
        categories: list[str] | None = None,
        label: str | None = None,
        every: Timer | float | None = None,
        inputs: Component | Sequence[Component] | set[Component] | None = None,
        show_label: bool | None = None,
        show_download_button: bool = True,
        container: bool = True,
        scale: int | None = None,
        min_width: int = 160,
        interactive: bool | None = None,
        visible: bool = True,
        elem_id: str | None = None,
        elem_classes: list[str] | str | None = None,
        render: bool = True,
        key: int | str | None = None,
    ):
        """
        Parameters:
            value: A path or URL for the image, or a tuple of the image and list of (left, top, right, bottom, label) annotations.
            categories: a list of categories to choose from when annotating the image.
            label: the label for this component, displayed above the component if `show_label` is `True` and is also used as the header if there are a table of examples for this component. If None and used in a `gr.Interface`, the label will be the name of the parameter this component corresponds to.
            every: Continously calls `value` to recalculate it if `value` is a function (has no effect otherwise). Can provide a Timer whose tick resets `value`, or a float that provides the regular interval for the reset Timer.
            inputs: Components that are used as inputs to calculate `value` if `value` is a function (has no effect otherwise). `value` is recalculated any time the inputs change.
            show_label: if True, will display label.
            show_download_button: If True, will display button to download annotations.
            container: If True, will place the component in a container - providing some extra padding around the border.
            scale: relative size compared to adjacent Components. For example if Components A and B are in a Row, and A has scale=2, and B has scale=1, A will be twice as wide as B. Should be an integer. scale applies in Rows, and to top-level Components in Blocks where fill_height=True.
            min_width: minimum pixel width, will wrap if not sufficient screen space to satisfy this value. If a certain scale value results in this Component being narrower than min_width, the min_width parameter will be respected first.
            interactive: if True, will allow users to upload and edit an image; if False, can only be used to display images. If not provided, this is inferred based on whether the component is used as an input or output.
            visible: If False, component will be hidden.
            elem_id: An optional string that is assigned as the id of this component in the HTML DOM. Can be used for targeting CSS styles.
            elem_classes: An optional list of strings that are assigned as the classes of this component in the HTML DOM. Can be used for targeting CSS styles.
            render: If False, component will not render be rendered in the Blocks context. Should be used if the intention is to assign event listeners now but render the component later.
            key: if assigned, will be used to assume identity across a re-render. Components that have the same key across a re-render will have their value preserved.
        """
        self.show_download_button = show_download_button
        self.categories = categories or []
        super().__init__(
            label=label,
            every=every,
            inputs=inputs,
            show_label=show_label,
            container=container,
            scale=scale,
            min_width=min_width,
            interactive=interactive,
            visible=visible,
            elem_id=elem_id,
            elem_classes=elem_classes,
            render=render,
            key=key,
            value=value,
        )

    def preprocess(
        self, payload: AnnotatedImage | FileData | None
    ) -> tuple[str, list[tuple[int, int, int, int, str | None]]] | None:
        """
        Parameters:
            payload: An AnnotatedImage or FileData object containing the image and annotations.
        Returns:
            A tuple of `str` containing the path to the image and a list of annotations.
        """
        if payload is None:
            return None
        elif isinstance(payload, FileData):
            return (payload.path, [])
        return (
            payload.image.path,
            [(a.left, a.top, a.right, a.bottom, a.label) for a in payload.annotations],
        )

    def postprocess(
        self,
        value: str
        | Path
        | tuple[str | Path, list[tuple[int, int, int, int, str | None]]]
        | None,
    ) -> AnnotatedImage | None:
        """
        Parameters:
            value: Expects a `str` or `pathlib.Path` object containing the path to the image, or a tuple of
                the image and a list of annotations.
        Returns:
            An AnnotatedImage object containing the image and annotation data.
        """
        if value is None:
            return None
        elif isinstance(value, (str, Path)):
            return AnnotatedImage(
                image=FileData(path=str(value), orig_name=Path(value).name),
                annotations=[],
            )
        return AnnotatedImage(
            image=FileData(path=str(value[0]), orig_name=Path(value[0]).name),
            annotations=[
                Annotation(left=x[0], top=x[1], right=x[2], bottom=x[3], label=x[4])
                for x in value[1]
            ],
        )

    def example_payload(self) -> Any:
        return AnnotatedImage(
            image=handle_file(EXAMPLE_IMAGE_URL),
            annotations=[
                Annotation(left=0, top=0, right=60, bottom=67, label="bus"),
                Annotation(left=29, top=52, right=36, bottom=63, label="wheel"),
                Annotation(left=50, top=41, right=56, bottom=53, label="wheel"),
            ],
        )

    def example_value(self) -> Any:
        return (EXAMPLE_IMAGE_URL, [
            (0, 0, 60, 67, "bus"),
            (29, 52, 36, 63, "wheel"),
            (50, 41, 56, 53, "wheel"),
        ])
