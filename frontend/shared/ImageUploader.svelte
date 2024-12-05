<script lang="ts">
	import { createEventDispatcher, tick } from "svelte";
	import { BlockLabel } from "@gradio/atoms";
	import { Image as ImageIcon } from "@gradio/icons";

	import { Upload } from "@gradio/upload";
	import type { FileData, Client } from "@gradio/client";
	import ClearImage from "./ClearImage.svelte";
	import AnnotationView from "./AnnotationView.svelte";
	import type { AnnotatedImage } from "./utils";

	export let value: null | AnnotatedImage = null;
	export let label: string | undefined = undefined;
	export let show_label: boolean;
	export let root: string;
	export let upload: Client["upload"];
	export let stream_handler: Client["stream"];

	let upload_component: Upload;
	let uploading = false;

	function handle_upload({ detail }: CustomEvent<FileData>): void {
		// TODO: Support annotation upload via JSON.
		value = { image: detail, annotations: [] } as AnnotatedImage;
		dispatch("upload");
	}
	$: if (uploading) value = null;

	const dispatch = createEventDispatcher<{
		change?: never;
		clear?: never;
		drag: boolean;
		upload?: never;
	}>();

	let dragging = false;
	$: dispatch("drag", dragging);
</script>

<BlockLabel {show_label} Icon={ImageIcon} label={label || "Image"} />

<div data-testid="image" class="image-container">
	{#if value?.image.url}
		<ClearImage
			on:remove_image={() => {
				value = null;
				dispatch("clear");
			}}
		/>
	{/if}
	<div class="upload-container">
		<Upload
			{upload}
			{stream_handler}
			hidden={value !== null}
			bind:this={upload_component}
			bind:uploading
			bind:dragging
			filetype="image/*"
			on:load={handle_upload}
			on:error
			{root}
		>
			{#if value === null}
				<slot />
			{/if}
		</Upload>
		{#if value !== null}
			<AnnotationView bind:value interactive={true} />
		{/if}
	</div>
</div>

<style>
	.upload-container {
		height: 100%;
		width: 100%;
		flex-shrink: 1;
		max-height: 100%;
	}
	.image-container {
		display: flex;
		height: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-height: 100%;
	}
</style>
