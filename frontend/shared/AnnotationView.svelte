<script lang="ts">
    import { Toolbar, IconButtonWrapper, IconButton } from "@gradio/atoms";
    import { Sketch, Trash } from "@gradio/icons";
	import { type AnnotatedImage, type Annotation, clamp } from "./utils";
    import BoxCursor from "./BoxCursor.svelte";

	export let value: null | AnnotatedImage = null;
	export let interactive: boolean = false;

	// Image coordinates and scale information.
	type ImageRect = {
		left: number;
		top: number;
		width: number;
		height: number;
		naturalWidth: number;
		naturalHeight: number;
	};
	let imageRect: ImageRect = {
		left: 0,
		top: 0,
		width: 1,
		height: 1,
		naturalWidth: 1,
		naturalHeight: 1,
	};
    let imageFrame: HTMLDivElement;
    let imageElement: HTMLImageElement;

    // Display coordinates of the annotations.
	let displayAnnotations: Annotation[] = [];

    // Cursor box position in display coordinates.
    let cursor: BoxCursor;

    // State variables.    
    let selected: number | null = null;
    let inserting: boolean = false;

	// Attach resize observer to the image element position and size.
	function onResize(node: HTMLDivElement) {
		const resizeObserver = new ResizeObserver(() => {
            imageRect = {
                left: imageElement.offsetLeft,
                top: imageElement.offsetTop,
                width: imageElement.offsetWidth,
                height: imageElement.offsetHeight,
                naturalWidth: imageElement.naturalWidth,
                naturalHeight: imageElement.naturalHeight,
            };
		});
		resizeObserver.observe(node);
		return {
			destroy() { resizeObserver.disconnect(); }
		};
	}

    // Resize annotations to the display size and positions.
	function updateDisplayAnnotations(value: AnnotatedImage | null, imageRect: ImageRect) {
		displayAnnotations = value?.annotations.map((annotation) => {
			return {
				left: annotation.left / imageRect.naturalWidth * imageRect.width + imageRect.left,
				top: annotation.top / imageRect.naturalHeight * imageRect.height + imageRect.top,
				right: annotation.right / imageRect.naturalWidth * imageRect.width + imageRect.left,
				bottom: annotation.bottom / imageRect.naturalHeight * imageRect.height + imageRect.top,
				label: annotation.label,
			} as Annotation;
		}) || [];

        if (selected !== null) {
            cursor.setPosition(displayAnnotations[selected])
        }
	}
	$: updateDisplayAnnotations(value, imageRect);

    // Select an annotation box and show a cursor box.
    function onSelect(event: MouseEvent, index: number) {
        if (inserting) return;
        selected = index;
        cursor.setPosition(displayAnnotations[selected])
        event.stopPropagation();
        cursor.emitCursorMousedown({ clientX: event.clientX, clientY: event.clientY });
    }

    // Add a new annotation box if inserting, otherwise cancel the selection.
    function onFrameMousedown(event: MouseEvent) {
        if (!value) return;
        // Cancel the selection if the click is outside the boxes.
        selected = null;
        if (!inserting) return;

        // Add a new annotation box on insertion mode.
        const rect = imageFrame.getBoundingClientRect();
        const newLeft = Math.round((event.clientX - rect.left) / imageRect.width * imageRect.naturalWidth);
        const newTop = Math.round((event.clientY - rect.top) / imageRect.height * imageRect.naturalHeight);
        value.annotations.push({
            left: clamp(newLeft, 0, imageRect.naturalWidth - 1),
            top: clamp(newTop, 0, imageRect.naturalHeight - 1),
            right: clamp(newLeft, 0, imageRect.naturalWidth - 1),
            bottom: clamp(newTop, 0, imageRect.naturalHeight - 1),
            label: null,  // TODO: Support label.
        });
        selected = value.annotations.length - 1;
        updateDisplayAnnotations(value, imageRect);
        inserting = false;

        cursor.emitAnchorMousedown("se", { clientX: event.clientX, clientY: event.clientY });
    }

    // Update the annotation box position when the cursor box changes.
    function onCursorChange(): void {
        if (value !== null && selected !== null) {
            const position = cursor.getPosition();
            const rect = {
                left: Math.round((position.left - imageRect.left) / imageRect.width * imageRect.naturalWidth),
                top: Math.round((position.top - imageRect.top) / imageRect.height * imageRect.naturalHeight),
                right: Math.round((position.right - imageRect.left) / imageRect.width * imageRect.naturalWidth),
                bottom: Math.round((position.bottom - imageRect.top) / imageRect.height * imageRect.naturalHeight),
            }
            value.annotations[selected].left = clamp(rect.left, 0, imageRect.naturalWidth - 1);
            value.annotations[selected].top = clamp(rect.top, 0, imageRect.naturalHeight - 1);
            value.annotations[selected].right = clamp(rect.right, 0, imageRect.naturalWidth - 1);
            value.annotations[selected].bottom = clamp(rect.bottom, 0, imageRect.naturalHeight - 1);
        }
    }

    // Remove an annotation box.
    function removeAnnotation(): void {
        if (value !== null && selected !== null) {
            value.annotations.splice(selected, 1);
            selected = null;
            value = value;
        }
    }

    // Switch to the inserting mode.
    function onClickInsertion(): void {
        selected = null;
        inserting = true;
    }
</script>

{#if value !== null}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        bind:this={imageFrame}
        class="image-frame"
        class:inserting={interactive && inserting}
        use:onResize
        on:mousedown|stopPropagation={onFrameMousedown}
    >
        <img bind:this={imageElement} src={value.image.url} alt="" loading="lazy" />
        {#each displayAnnotations as annotation, index}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
                class="box-preview"
                class:selectable={interactive && selected !== index && !inserting}
                style:left={annotation.left + "px"}
                style:top={annotation.top + "px"}
                style:width={(annotation.right - annotation.left) + "px"}
                style:height={(annotation.bottom - annotation.top) + "px"}
                style:display={(selected === index? "none" : "block")}
                data-label={annotation.label}
                on:mousedown={(interactive) ? (event) => onSelect(event, index) : null}
            >
            </div>
        {/each}
        <BoxCursor
            bind:this={cursor}
            active={interactive && selected !== null}
            frameWidth={imageRect.width}
            frameHeight={imageRect.height}
            on:change={onCursorChange}
        />
    </div>
    {#if interactive}
        <Toolbar show_border={true}>
            <IconButton
                Icon={Sketch}
                label="Add"
                size="medium"
                padded={true}
                highlight={inserting}
                on:click={onClickInsertion}
            />
            <IconButton
                Icon={Trash}
                label="Remove"
                size="medium"
                padded={true}
                disabled={selected === null}
                on:click={removeAnnotation}
            />
        </Toolbar>
    {/if}
{/if}

<style>
	.image-frame {
		position: relative;
		width: 100%;
		height: 100%;
        padding: 5px;
	}
	.image-frame :global(img) {
		width: var(--size-full);
		height: var(--size-full);
		object-fit: contain;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
	}
    .box-preview {
        position: absolute;
        border: 1px solid rgb(0, 127, 255);
    }
    .box-preview:hover {
        background-color: rgba(0, 127, 255, 0.1);
    }
    .selectable {
        cursor: pointer;
    }
    .inserting {
        cursor: crosshair;
    }
</style>
