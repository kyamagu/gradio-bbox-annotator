<script lang="ts">
	import { createEventDispatcher } from "svelte";
    import { type Box, clamp } from "./utils";

    export let frame: Box;
    export let dragging: boolean = false;
    export let active: boolean = false;

    type AnchorLocation = "nw" | "w" | "sw" | "s" | "se" | "e" | "ne" | "n";

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
    let anchor: { [key in AnchorLocation]: HTMLDivElement | null } = {
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
		change?: Box;
        drag?: never;
	}>();

    $: if (dragging) dispatch("drag");

    // Drag to move the cursor.
    function onCursorMousedown(event: MouseEvent): void {
        const startX = event.clientX;
        const startY = event.clientY;
        const offset: Box = { left, top, right, bottom };
        const width = right - left;
        const height = bottom - top;

        dragging = true;

        function onCursorMousemove(event: MouseEvent): void {
            const dx = clamp(event.clientX - startX, frame.left - offset.left, frame.right - offset.right);
            const dy = clamp(event.clientY - startY, frame.top - offset.top, frame.bottom - offset.bottom);
            left = offset.left + dx;
            top = offset.top + dy;
            right = offset.right + dx;
            bottom = offset.bottom + dy;
            dispatch("change", { left, top, right, bottom });
            event.preventDefault();
            event.stopPropagation();
        }
        function onCursorMouseup(event: MouseEvent): void {
            // TODO: Case when the cursor is outside the window.
            window.removeEventListener("mousemove", onCursorMousemove);
            window.removeEventListener("mouseup", onCursorMouseup);
            event.preventDefault();
            event.stopPropagation();
            dragging = false;
        }

        window.addEventListener("mousemove", onCursorMousemove);
        window.addEventListener("mouseup", onCursorMouseup);
    }

    // Drag to resize the cursor.
    function onAnchorMousedown(event: MouseEvent, location: string): void {
        const startX = event.clientX;
        const startY = event.clientY;
        const offset = { left, top, right, bottom };

        dragging = true;

        function onAnchorMousemove(event: MouseEvent): void {
            const dx = event.clientX - startX;
            const dy = event.clientY - startY;

            if (location.includes("w")) {
                if (offset.left + dx <= offset.right) {
                    left = clamp(offset.left + dx, frame.left, frame.right);
                }
                else {
                    left = offset.right;
                    right = clamp(offset.left + dx, frame.left, frame.right);
                }
            }
            else if (location.includes("e")) {
                if (offset.right + dx >= offset.left) {
                    right = clamp(offset.right + dx, frame.left, frame.right);
                }
                else {
                    right = offset.left;
                    left = clamp(offset.right + dx, frame.left, frame.right);
                }
            }

            if (location.includes("n")) {
                if (offset.top + dy <= offset.bottom) {
                    top = clamp(offset.top + dy, frame.top, frame.bottom);
                }
                else {
                    top = offset.bottom;
                    bottom = clamp(offset.top + dy, frame.top, frame.bottom);
                }
            }
            else if (location.includes("s")) {
                if (offset.bottom + dy >= offset.top) {
                    bottom = clamp(offset.bottom + dy, frame.top, frame.bottom);
                }
                else {
                    bottom = offset.bottom;
                    top = clamp(offset.bottom + dy, frame.top, frame.bottom);
                }
            }
            dispatch("change", { left, top, right, bottom });
            event.preventDefault();
            event.stopPropagation();
        }
        function onAnchorMouseup(event: MouseEvent): void {
            window.removeEventListener("mousemove", onAnchorMousemove);
            window.removeEventListener("mouseup", onAnchorMouseup);
            event.preventDefault();
            event.stopPropagation();
            dragging = false;
        }

        window.addEventListener("mousemove", onAnchorMousemove);
        window.addEventListener("mouseup", onAnchorMouseup);
    }

    export function emitCursorMousedown(options: any = null): void {
        cursorBody?.dispatchEvent(new MouseEvent("mousedown", options));
    }

    export function emitAnchorMousedown(location: AnchorLocation, options: any = null): void {
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
    on:mousedown|stopPropagation|preventDefault={onCursorMousedown}
    on:click|stopPropagation|preventDefault
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
    on:mousedown|stopPropagation|preventDefault={(event) => onAnchorMousedown(event, "nw")}
    on:click|stopPropagation|preventDefault
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
    on:mousedown|stopPropagation|preventDefault={(event) => onAnchorMousedown(event, "w")}
    on:click|stopPropagation|preventDefault
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
    on:mousedown|stopPropagation|preventDefault={(event) => onAnchorMousedown(event, "sw")}
    on:click|stopPropagation|preventDefault
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
    on:mousedown|stopPropagation|preventDefault={(event) => onAnchorMousedown(event, "s")}
    on:click|stopPropagation|preventDefault
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
    on:mousedown|stopPropagation|preventDefault={(event) => onAnchorMousedown(event, "se")}
    on:click|stopPropagation|preventDefault
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
    on:mousedown|stopPropagation|preventDefault={(event) => onAnchorMousedown(event, "e")}
    on:click|stopPropagation|preventDefault
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
    on:mousedown|stopPropagation|preventDefault={(event) => onAnchorMousedown(event, "ne")}
    on:click|stopPropagation|preventDefault
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
    on:mousedown|stopPropagation|preventDefault={(event) => onAnchorMousedown(event, "n")}
    on:click|stopPropagation|preventDefault
></div>

<style>
    .box-cursor {
        position: absolute;
        border-width: 1px;
        border-style: solid;
        border-color: var(--box-color, white);
        cursor: move;
    }
    .box-cursor:hover {
        background-color: color-mix(in hsl, var(--box-color) 10%, transparent);
    }
    .inactive {
        display: none;
    }
    .box-anchor {
        position: absolute;
        border: 1px solid white;
        background-color: var(--box-color, white);
        width: 10px;
        height: 10px;
    }
</style>