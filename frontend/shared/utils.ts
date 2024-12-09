import type { FileData } from "@gradio/client";

export interface Box {
	left: number,
	top: number,
	right: number,
	bottom: number,
};

export interface Annotation extends Box {
    label: string | null,
};

export type AnnotatedImage = {
    image: FileData,
    annotations: Annotation[]
};

export function clamp(value: number, min: number, max: number): number {
	return Math.min(Math.max(value, min), max);
}