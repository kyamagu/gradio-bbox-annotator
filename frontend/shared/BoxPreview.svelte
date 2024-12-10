<script lang="ts">
    import {type Annotation} from "./utils";

    export let annotation: Annotation;
    export let interactive: boolean;
    export let selectable: boolean;
    export let active: boolean = true;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="box-preview"
    class:selectable={interactive && selectable}
    class:inactive={!active}
    style:left={annotation.left + "px"}
    style:top={annotation.top + "px"}
    style:width={(annotation.right - annotation.left) + "px"}
    style:height={(annotation.bottom - annotation.top) + "px"}
    data-label={annotation.label}
    on:mousedown
>
</div>

<style>
.box-preview {
    position: absolute;
    border-width: 1px;
    border-style: solid;
    border-color: var(--box-color, white);
    cursor: var(--cursor, default);
}
.selectable {
    cursor: pointer;
}
.selectable:hover {
    background-color: color-mix(in hsl, var(--box-color) 10%, transparent);
}
.inactive {
    display: none;
}
</style>