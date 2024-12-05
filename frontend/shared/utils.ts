import type { FileData } from "@gradio/client";

export type Annotation = {
	left: number,
	top: number,
	right: number,
	bottom: number,
    label: string | null,
};
export type AnnotatedImage = {
    image: FileData,
    annotations: Annotation[]
};