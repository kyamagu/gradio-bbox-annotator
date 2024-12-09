<script lang="ts">
	import { createEventDispatcher } from "svelte";
    import { type Box, clamp } from "./utils";

    export let frameWidth: number = 1;
    export let frameHeight: number = 1;
    export let dragging: boolean = false;
    export let active: boolean = false;

    let left: number = 0;
    let top: number = 0;
    let right: number = 0;
    let bottom: number = 0;

    export function setPosition(box: Box): void {
        left = box.left;
        top = box.top;
        right = box.right;
        bottom = box.bottom;
    }

    export function getPosition(): Box {
        return { left, top, right, bottom };
    }

    let cursorBody: HTMLDivElement | null = null;
    let anchor: {
        nw: HTMLDivElement | null;
        n: HTMLDivElement | null;
        ne: HTMLDivElement | null;
        w: HTMLDivElement | null;
        sw: HTMLDivElement | null;
        s: HTMLDivElement | null;
        se: HTMLDivElement | null;
        e: HTMLDivElement | null;
    } = {
        nw: null,
        n: null,
        ne: null,
        w: null,
        sw: null,
        s: null,
        se: null,
        e: null,
    };

	const dispatch = createEventDispatcher<{
		change?: { left: number, top: number, right: number, bottom: number };
        drag?: never;
	}>();

    $: if (dragging) dispatch("drag");

    // Drag to move the cursor.
    function onCursorMousedown(event: MouseEvent): void {
        const startX = event.clientX;
        const startY = event.clientY;
        const startLeft = left;
        const startTop = top;
        const startRight = right;
        const startBottom = bottom;
        const width = right - left;
        const height = bottom - top;

        dragging = true;

        function onCursorMousemove(event: MouseEvent): void {
            left = clamp(startLeft + event.clientX - startX, 0, frameWidth - width);
            top = clamp(startTop + event.clientY - startY, 0, frameHeight - height);
            right = clamp(startRight + event.clientX - startX, width, frameWidth);
            bottom = clamp(startBottom + event.clientY - startY, height, frameHeight);
            dispatch("change", { left, top, right, bottom });
            event.stopPropagation();
        }
        function onCursorMouseup(event: MouseEvent): void {
            // TODO: Case when the cursor is outside the window.
            window.removeEventListener("mousemove", onCursorMousemove);
            window.removeEventListener("mouseup", onCursorMouseup);
            event.stopPropagation();
            dragging = false;
        }

        window.addEventListener("mousemove", onCursorMousemove);
        window.addEventListener("mouseup", onCursorMouseup);
    }

    // Drag to resize the cursor.
    function onAnchorMousedown(event: MouseEvent, location: string): void {
        console.log({ left, top, right, bottom, clientX: event.clientX, clientY: event.clientY });
        const startX = event.clientX;
        const startY = event.clientY;
        const startLeft = left;
        const startTop = top;
        const startRight = right;
        const startBottom = bottom;

        dragging = true;

        function onAnchorMousemove(event: MouseEvent): void {
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
        function onAnchorMouseup(event: MouseEvent): void {
            window.removeEventListener("mousemove", onAnchorMousemove);
            window.removeEventListener("mouseup", onAnchorMouseup);
            event.stopPropagation();
            dragging = false;
        }

        window.addEventListener("mousemove", onAnchorMousemove);
        window.addEventListener("mouseup", onAnchorMouseup);
    }

    export function emitCursorMousedown(options: any = null): void {
        cursorBody?.dispatchEvent(new MouseEvent("mousedown", options));
    }

    export function emitAnchorMousedown(location: "nw" | "w" | "sw" | "s" | "se" | "e" | "ne" | "n", options: any = null): void {
        anchor[location]?.dispatchEvent(new MouseEvent("mousedown", options));
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    bind:this={cursorBody}
    class="box-cursor"
    class:inactive={!active}
    class:selectable={active && !dragging}
    style:left={left + "px"}
    style:top={top + "px"}
    style:width={(right - left) + "px"}
    style:height={(bottom - top) + "px"}
    on:mousedown|stopPropagation={onCursorMousedown}
    on:click|stopPropagation
>
</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    bind:this={anchor.nw}
    class="box-anchor"
    class:inactive={!active}
    style:cursor="nwse-resize"
    style:left={(left - 5) + "px"}
    style:top={(top - 5) + "px"}
    on:mousedown|stopPropagation={(event) => onAnchorMousedown(event, "nw")}
    on:click|stopPropagation
>
</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    bind:this={anchor.w}
    class="box-anchor"
    class:inactive={!active}
    style:cursor="ew-resize"
    style:left={(left - 5) + "px"}
    style:top={((top + bottom) / 2 - 5) + "px"}
    on:mousedown|stopPropagation={(event) => onAnchorMousedown(event, "w")}
    on:click|stopPropagation
>
</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    bind:this={anchor.sw}
    class="box-anchor"
    class:inactive={!active}
    style:cursor="nesw-resize"
    style:left={(left - 5) + "px"}
    style:top={(bottom - 5) + "px"}
    on:mousedown|stopPropagation={(event) => onAnchorMousedown(event, "sw")}
    on:click|stopPropagation
>
</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    bind:this={anchor.s}
    class="box-anchor"
    class:inactive={!active}
    style:cursor="ns-resize"
    style:left={((left + right) / 2 - 5) + "px"}
    style:top={(bottom - 5) + "px"}
    on:mousedown|stopPropagation={(event) => onAnchorMousedown(event, "s")}
    on:click|stopPropagation
>
</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    bind:this={anchor.se}
    class="box-anchor"
    class:inactive={!active}
    style:cursor="nwse-resize"
    style:left={(right - 5) + "px"}
    style:top={(bottom - 5) + "px"}
    on:mousedown|stopPropagation={(event) => onAnchorMousedown(event, "se")}
    on:click|stopPropagation
>
</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    bind:this={anchor.e}
    class="box-anchor"
    class:inactive={!active}
    style:cursor="ew-resize"
    style:left={(right - 5) + "px"}
    style:top={((top + bottom) / 2 - 5) + "px"}
    on:mousedown|stopPropagation={(event) => onAnchorMousedown(event, "e")}
    on:click|stopPropagation
></div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    bind:this={anchor.ne}
    class="box-anchor"
    class:inactive={!active}
    style:cursor="nesw-resize"
    style:left={(right - 5) + "px"}
    style:top={(top - 5) + "px"}
    on:mousedown|stopPropagation={(event) => onAnchorMousedown(event, "ne")}
    on:click|stopPropagation
>
</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    bind:this={anchor.n}
    class="box-anchor"
    class:inactive={!active}
    style:cursor="ns-resize"
    style:left={((left + right) / 2 - 5) + "px"}
    style:top={(top - 5) + "px"}
    on:mousedown|stopPropagation={(event) => onAnchorMousedown(event, "n")}
    on:click|stopPropagation
></div>

<style>
    .box-cursor {
        position: absolute;
        border: 1px solid rgb(0, 127, 255);
        cursor: move;
    }
    .inactive {
        display: none;
    }
    .selectable:hover {
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