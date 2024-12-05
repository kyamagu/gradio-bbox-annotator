<script lang="ts">
	import { createEventDispatcher } from "svelte";

    export let left: number = 0;
    export let top: number = 0;
    export let right: number = 0;
    export let bottom: number = 0;
    export let frameWidth: number = 1;
    export let frameHeight: number = 1;
    export let dragging: boolean = false;

	const dispatch = createEventDispatcher<{
		change?: { left: number, top: number, right: number, bottom: number };
        drag?: never;
	}>();

    $: if (dragging) dispatch("drag");

    function clamp(value: number, min: number, max: number): number {
        return Math.min(Math.max(value, min), max);
    }

    // Drag to move the cursor.
    function onCursorMouseDown(event: MouseEvent): void {
        const startX = event.clientX;
        const startY = event.clientY;
        const startLeft = left;
        const startTop = top;
        const startRight = right;
        const startBottom = bottom;
        const width = right - left;
        const height = bottom - top;

        dragging = true;

        function onCursorMouseMove(event: MouseEvent): void {
            left = clamp(startLeft + event.clientX - startX, 0, frameWidth - width);
            top = clamp(startTop + event.clientY - startY, 0, frameHeight - height);
            right = clamp(startRight + event.clientX - startX, width, frameWidth);
            bottom = clamp(startBottom + event.clientY - startY, height, frameHeight);
            dispatch("change", { left, top, right, bottom });
            event.stopPropagation();
        }
        function onCursorMouseUp(event: MouseEvent): void {
            window.removeEventListener("mousemove", onCursorMouseMove);
            window.removeEventListener("mouseup", onCursorMouseUp);
            event.stopPropagation();
            dragging = false;
        }

        window.addEventListener("mousemove", onCursorMouseMove);
        window.addEventListener("mouseup", onCursorMouseUp);
    }

    // Drag to resize the cursor.
    function onAnchorMouseDown(event: MouseEvent, location: string): void {
        const startX = event.clientX;
        const startY = event.clientY;
        const startLeft = left;
        const startTop = top;
        const startRight = right;
        const startBottom = bottom;

        dragging = true;

        function onAnchorMouseMove(event: MouseEvent): void {
            const dx = event.clientX - startX;
            const dy = event.clientY - startY;

            if (location.includes("w")) {
                if (startLeft + dx <= startRight) {
                    left = clamp(startLeft + dx, 0, frameWidth);
                }
                else {
                    left = startRight;
                    right = clamp(startLeft + dx, 0, frameWidth);
                }
            }
            else if (location.includes("e")) {
                if (startRight + dx >= startLeft) {
                    right = clamp(startRight + dx, 0, frameWidth);
                }
                else {
                    right = startLeft;
                    left = clamp(startRight + dx, 0, frameWidth);
                }
            }

            if (location.includes("n")) {
                if (startTop + dy <= startBottom) {
                    top = clamp(startTop + dy, 0, frameHeight);
                }
                else {
                    top = startBottom;
                    bottom = clamp(startTop + dy, 0, frameHeight);
                }
            }
            else if (location.includes("s")) {
                if (startBottom + dy >= startTop) {
                    bottom = clamp(startBottom + dy, 0, frameHeight);
                }
                else {
                    bottom = startTop;
                    top = clamp(startBottom + dy, 0, frameHeight);
                }
            }
            dispatch("change", { left, top, right, bottom });
            event.stopPropagation();
        }
        function onAnchorMouseUp(event: MouseEvent): void {
            window.removeEventListener("mousemove", onAnchorMouseMove);
            window.removeEventListener("mouseup", onAnchorMouseUp);
            event.stopPropagation();
            dragging = false;
        }

        window.addEventListener("mousemove", onAnchorMouseMove);
        window.addEventListener("mouseup", onAnchorMouseUp);
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="box-cursor"
    class:active={!dragging}
    style:left={left + "px"}
    style:top={top + "px"}
    style:width={(right - left) + "px"}
    style:height={(bottom - top) + "px"}
    on:mousedown|stopPropagation={onCursorMouseDown}
    on:click|stopPropagation
>
</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="box-anchor"
    style:cursor="nwse-resize"
    style:left={(left - 5) + "px"}
    style:top={(top - 5) + "px"}
    on:mousedown|stopPropagation={(event) => onAnchorMouseDown(event, "nw")}
    on:click|stopPropagation
>
</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="box-anchor"
    style:cursor="ew-resize"
    style:left={(left - 5) + "px"}
    style:top={((top + bottom) / 2 - 5) + "px"}
    on:mousedown|stopPropagation={(event) => onAnchorMouseDown(event, "w")}
    on:click|stopPropagation
>
</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="box-anchor"
    style:cursor="nesw-resize"
    style:left={(left - 5) + "px"}
    style:top={(bottom - 5) + "px"}
    on:mousedown|stopPropagation={(event) => onAnchorMouseDown(event, "sw")}
    on:click|stopPropagation
>
</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="box-anchor"
    style:cursor="ns-resize"
    style:left={((left + right) / 2 - 5) + "px"}
    style:top={(bottom - 5) + "px"}
    on:mousedown|stopPropagation={(event) => onAnchorMouseDown(event, "s")}
    on:click|stopPropagation
>
</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="box-anchor"
    style:cursor="nwse-resize"
    style:left={(right - 5) + "px"}
    style:top={(bottom - 5) + "px"}
    on:mousedown|stopPropagation={(event) => onAnchorMouseDown(event, "se")}
    on:click|stopPropagation
>
</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="box-anchor"
    style:cursor="ew-resize"
    style:left={(right - 5) + "px"}
    style:top={((top + bottom) / 2 - 5) + "px"}
    on:mousedown|stopPropagation={(event) => onAnchorMouseDown(event, "e")}
    on:click|stopPropagation
></div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="box-anchor"
    style:cursor="nesw-resize"
    style:left={(right - 5) + "px"}
    style:top={(top - 5) + "px"}
    on:mousedown|stopPropagation={(event) => onAnchorMouseDown(event, "ne")}
    on:click|stopPropagation
>
</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="box-anchor"
    style:cursor="ns-resize"
    style:left={((left + right) / 2 - 5) + "px"}
    style:top={(top - 5) + "px"}
    on:mousedown|stopPropagation={(event) => onAnchorMouseDown(event, "n")}
    on:click|stopPropagation
></div>

<style>
    .box-cursor {
        position: absolute;
        border: 1px solid rgb(0, 127, 255);
        cursor: move;
    }
    .active:hover {
        background-color: rgba(0, 127, 255, 0.1);
    }
    .box-anchor {
        position: absolute;
        border: 1px solid white;
        background-color: rgba(0, 127, 255);
        width: 10px;
        height: 10px;
    }
</style>