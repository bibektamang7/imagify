import { OutputImageProps } from "./outputImage";

export interface ModelSchema {
	id: string;
	name: string;
	type: string;
	age: number;
	ethinicity: string;
	eyeColor: string;
	bald: boolean;
	userId: string;
	thumbnail: string | null;
	trainingStatus: string;
	// outputImages: OutputImageProps[];
	createdAt: Date;
	zipUrl: string;
	open: boolean;
}
export interface ModelFormData {
	name: string;
	type: ModelTypeEnum;
	age: number;
	ethnicity: EthnecityEnum;
	eyeColor: EyeColorEnum;
	bald: boolean;
	triggerWord?: string;
	zipUrl: string;
	open: boolean;
}

export enum ModelTypeEnum {
	Portrait = "Portrait",
	FullBody = "FullBody",
	Headshot = "Headshot",
	Custom = "Custom",
}

export enum EthnecityEnum {
	Asian = "Asian",
	Black = "Black",
	Caucasian = "Caucasian",
	Hispanic = "Hispanic",
	MiddleEastern = "MiddleEastern",
	Indian = "Indian",
	Other = "Other",
}

export enum EyeColorEnum {
	Brown = "Brown",
	Blue = "Blue",
	Green = "Green",
	Hazel = "Hazel",
	Gray = "Gray",
	Amber = "Amber",
	Other = "Other",
}

export enum ModelTrainingStatusEnum {
	Pending = "Pending",
	Training = "Training",
	Completed = "Completed",
	Failed = "Failed",
}
