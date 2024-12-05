<script lang="ts">
	import { type AnnotatedImage, type Annotation } from "./utils";
    import BoxCursor from "./BoxCursor.svelte";

	export let value: null | AnnotatedImage = null;
	export let interactive: boolean = false;

	// Image coordinates and scale information.
    // TODO: Maybe keep a transformation matrix only.
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
    let cursorLeft: number = 0;
    let cursorTop: number = 0;
    let cursorRight: number = 0;
    let cursorBottom: number = 0;
    let dragging: boolean = false;
	let displayAnnotations: Annotation[] = [];

	// Resize observer to the image element position and size.
	function attachResizeObserver(node: HTMLDivElement) {
		const resizeObserver = new ResizeObserver(() => {
            const imageElement = node.querySelector('img') as HTMLImageElement;
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
	function resizeAnnotations(value: AnnotatedImage | null, imageRect: ImageRect) {
		displayAnnotations = value?.annotations.map((annotation) => {
			const annotationRect = {
				left: annotation.left / imageRect.naturalWidth * imageRect.width + imageRect.left,
				top: annotation.top / imageRect.naturalHeight * imageRect.height + imageRect.top,
				right: annotation.right / imageRect.naturalWidth * imageRect.width + imageRect.left,
				bottom: annotation.bottom / imageRect.naturalHeight * imageRect.height + imageRect.top,
				label: annotation.label,
			} as Annotation;
			return annotationRect;
		}) || [];

        if (selected !== null) {
            cursorLeft = displayAnnotations[selected].left;
            cursorTop = displayAnnotations[selected].top;
            cursorRight = displayAnnotations[selected].right;
            cursorBottom = displayAnnotations[selected].bottom;
        }
	}
	$: resizeAnnotations(value, imageRect);

    // Select an annotation box and show a cursor box.
    let selected: number | null = null;
    function onSelect(event: MouseEvent, index: number) {
        selected = index;
        cursorLeft = displayAnnotations[index].left;
        cursorTop = displayAnnotations[index].top;
        cursorRight = displayAnnotations[index].right;
        cursorBottom = displayAnnotations[index].bottom;
        event.stopPropagation();
    }
    function onWindowClick() {
        selected = null;
    }
    function onBoxChange() {
        if (value !== null && selected !== null) {
            value.annotations[selected].left = Math.round(cursorLeft / imageRect.width * imageRect.naturalWidth);
            value.annotations[selected].top = Math.round(cursorTop / imageRect.height * imageRect.naturalHeight);
            value.annotations[selected].right = Math.round(cursorRight / imageRect.width * imageRect.naturalWidth);
            value.annotations[selected].bottom = Math.round(cursorBottom / imageRect.height * imageRect.naturalHeight);
        }
    }
</script>

{#if value !== null}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="image-frame" use:attachResizeObserver on:mousedown={onWindowClick}>
        <img src={value.image.url} alt="" loading="lazy" />
        {#each displayAnnotations as annotation, index}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
                class="box-preview"
                class:selectable={interactive && selected !== index}
                style:left={annotation.left + "px"}
                style:top={annotation.top + "px"}
                style:width={(annotation.right - annotation.left) + "px"}
                style:height={(annotation.bottom - annotation.top) + "px"}
                style:display={(selected === index? "none" : "block")}
                data-label={annotation.label}
                on:click={(interactive? (event) => onSelect(event, index) : undefined)}
            >
            </div>
        {/each}
        {#if interactive && selected !== null}
            <BoxCursor
                bind:left={cursorLeft}
                bind:top={cursorTop}
                bind:right={cursorRight}
                bind:bottom={cursorBottom}
                bind:dragging
                frameWidth={imageRect.width}
                frameHeight={imageRect.height}
                on:change={onBoxChange}
            />
        {/if}
    </div>
{/if}

<style>
	.image-frame {
		position: relative;
		width: 100%;
		height: 100%;
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
</style>
