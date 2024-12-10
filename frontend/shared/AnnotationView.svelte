<script lang="ts">
    import { Toolbar, IconButton } from "@gradio/atoms";
    import { Sketch, Square, Trash } from "@gradio/icons";
	import { type AnnotatedImage, type Annotation, clamp } from "./utils";
    import BoxCursor from "./BoxCursor.svelte";
    import BoxPreview from "./BoxPreview.svelte";

	export let value: null | AnnotatedImage = null;
	export let interactive: boolean = false;
    export let show_legend: boolean = true;

    export let categories: string[] = [];
    export let colorMap: { [key: string]: string } = {};

	// Image coordinates and scale information.
	type ImageRect = {
		left: number;
		top: number;
        right: number;
        bottom: number;
		width: number;
		height: number;
		naturalWidth: number;
		naturalHeight: number;
	};
	let imageRect: ImageRect = {
		left: 0,
		top: 0,
        right: 1,
        bottom: 1,
		width: 1,
		height: 1,
		naturalWidth: 2,
		naturalHeight: 2,
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
    let currentCategory: string = "";

	// Attach resize observer to the image element position and size.
	function onResize(node: HTMLDivElement) {
		const resizeObserver = new ResizeObserver(() => {
            imageRect = {
                left: imageElement.offsetLeft,
                top: imageElement.offsetTop,
                right: imageElement.offsetLeft + imageElement.offsetWidth,
                bottom: imageElement.offsetTop + imageElement.offsetHeight,
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
				left: annotation.left / (imageRect.naturalWidth - 1) * imageRect.width + imageRect.left,
				top: annotation.top / (imageRect.naturalHeight - 1) * imageRect.height + imageRect.top,
				right: annotation.right / (imageRect.naturalWidth - 1) * imageRect.width + imageRect.left,
				bottom: annotation.bottom / (imageRect.naturalHeight - 1) * imageRect.height + imageRect.top,
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
        const point = {
            left: (event.clientX - rect.left - imageRect.left) / imageRect.width * (imageRect.naturalWidth - 1),
            top: (event.clientY - rect.top - imageRect.top) / imageRect.height * (imageRect.naturalHeight - 1),
        };
        value.annotations.push({
            left: clamp(point.left, 0, imageRect.naturalWidth - 1),
            top: clamp(point.top, 0, imageRect.naturalHeight - 1),
            right: clamp(point.left, 0, imageRect.naturalWidth - 1),
            bottom: clamp(point.top, 0, imageRect.naturalHeight - 1),
            label: currentCategory || null,
        });
        selected = value.annotations.length - 1;
        updateDisplayAnnotations(value, imageRect);
        inserting = false;
        currentCategory = "";

        cursor.emitAnchorMousedown("se", { clientX: event.clientX, clientY: event.clientY });
    }

    // Update the annotation box position when the cursor box changes.
    function onCursorChange(): void {
        if (value !== null && selected !== null) {
            // Transform from the display coordinates to the image coordinates.
            const position = cursor.getPosition();
            const rect = {
                left: (position.left - imageRect.left) / imageRect.width * (imageRect.naturalWidth - 1),
                top: (position.top - imageRect.top) / imageRect.height * (imageRect.naturalHeight - 1),
                right: (position.right - imageRect.left) / imageRect.width * (imageRect.naturalWidth - 1),
                bottom: (position.bottom - imageRect.top) / imageRect.height * (imageRect.naturalHeight - 1),
            }
            value.annotations[selected].left = clamp(Math.round(rect.left), 0, imageRect.naturalWidth - 1);
            value.annotations[selected].top = clamp(Math.round(rect.top), 0, imageRect.naturalHeight - 1);
            value.annotations[selected].right = clamp(Math.round(rect.right), 0, imageRect.naturalWidth - 1);
            value.annotations[selected].bottom = clamp(Math.round(rect.bottom), 0, imageRect.naturalHeight - 1);
        }
    }

    // Remove an annotation box.
    function removeAnnotation(): void {
        // TODO: Invoke when the delete key is pressed.
        if (value !== null && selected !== null) {
            value.annotations.splice(selected, 1);
            selected = null;
            value = value;
        }
    }

    // Switch to the inserting mode.
    function onClickInsertion(label: string): void {
        selected = null;
        inserting = (inserting && currentCategory === label) ? false : true;
        currentCategory = label;
    }

    // Update categories on value change.
    function updateLabels(value: AnnotatedImage | null) {
        if (value) {
            for (let annotation of value.annotations) {
                const label = annotation.label || "";
                if (!categories.includes(label)) {
                    categories.push(label);
                }
            }
            categories = categories;
        }
    }
    $: updateLabels(value);

    // Update colormap on categories change.
    function updateColorMap(categories: string[]) {
        for (let label of categories) {
            if (!colorMap[label]) {
                const index = Object.keys(colorMap).length;
                const hue = Math.round((index + 4) / 8 * 360) % 360;  // Start from blue.
                colorMap[label] = `hsl(${hue}, 100%, 50%)`;
            }
        }
        colorMap = colorMap;
    }
    $: updateColorMap(categories);
</script>

{#if value !== null}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        bind:this={imageFrame}
        class="image-frame"
        use:onResize
        on:mousedown|stopPropagation|preventDefault={onFrameMousedown}
    >
        <img
            bind:this={imageElement} 
            class:inserting={interactive && inserting}
            src={value.image.url}
            alt="background"
            loading="lazy"
        />
        {#each displayAnnotations as annotation, index}
            <BoxPreview
                {annotation}
                {interactive}
                selectable={!inserting}
                active={!interactive || selected !== index}
                --box-color={colorMap[annotation.label || ""]}
                --cursor={inserting ? "crosshair" : "default"}
                on:mousedown={(event) => {if (interactive && !inserting) onSelect(event, index)}}
            />
        {/each}
        <BoxCursor
            bind:this={cursor}
            active={interactive && selected !== null}
            frame={imageRect}
            --box-color={selected !== null ? colorMap[value.annotations[selected]?.label || ""] : "white"}
            on:change={onCursorChange}
        />
    </div>
    {#if interactive}
        <Toolbar show_border={true}>
            {#each categories as category}
                <IconButton
                    Icon={(categories.length > 1) ? Square : Sketch}
                    show_label={categories.length > 1}
                    label={category}
                    size="medium"
                    padded={true}
                    hasPopup={true}
                    highlight={inserting && category === currentCategory}
                    color={colorMap[category] || "white"}
                    on:click={() => { onClickInsertion(category); }}
                />
            {/each}
            <IconButton
                Icon={Trash}
                label="Remove"
                size="medium"
                padded={true}
                disabled={selected === null}
                on:click={removeAnnotation}
            />
        </Toolbar>
    {:else if show_legend && categories.length > 0}
        <Toolbar show_border={true}>
            {#each categories as category}
                <IconButton
                    Icon={Square}
                    show_label={true}
                    label={category}
                    size="medium"
                    padded={true}
                    color={colorMap[category] || "white"}
                />
            {/each}
        </Toolbar>
    {/if}
{/if}

<style>
	.image-frame {
		position: relative;
		width: 100%;
		height: 100%;
        padding: 10px;
	}
	.image-frame :global(img) {
		width: var(--size-full);
		height: var(--size-full);
		object-fit: contain;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
	}
    .inserting {
        cursor: crosshair;
    }
</style>
