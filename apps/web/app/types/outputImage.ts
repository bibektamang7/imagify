export interface OutputImageProps {
	id: string;
	imageUrl: string;
	modelId: string;
	userId: string;
	prompt: string;
	status: string;
	createdAt: Date;
	isDownloaded: boolean;
	tag: string;
}
