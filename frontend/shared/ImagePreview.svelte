<script lang="ts">
	import {
		BlockLabel,
		Empty,
		IconButton,
		IconButtonWrapper
	} from "@gradio/atoms";
	import { Download } from "@gradio/icons";
	import { DownloadLink } from "@gradio/wasm/svelte";

	import { Image as ImageIcon } from "@gradio/icons";
	import type { I18nFormatter } from "@gradio/utils";
	import AnnotationView from "./AnnotationView.svelte";
	import { type AnnotatedImage } from "./utils";

	export let value: null | AnnotatedImage = null;
	export let label: string | undefined = undefined;
	export let show_label: boolean;
	export let show_download_button = true;
	export let i18n: I18nFormatter;
</script>

<BlockLabel
	{show_label}
	Icon={ImageIcon}
	label={label || i18n("image.image")}
/>
{#if value === null || !value.image.url}
	<Empty unpadded_box={true} size="large"><ImageIcon /></Empty>
{:else}
	<IconButtonWrapper>
		{#if show_download_button}
			<DownloadLink href={value.image.url} download={value.image.orig_name || "image"}>
				<IconButton Icon={Download} label={i18n("common.download")} />
			</DownloadLink>
		{/if}
	</IconButtonWrapper>
	<AnnotationView bind:value />
{/if}