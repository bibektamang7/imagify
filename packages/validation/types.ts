import { z } from "zod";

export const SignUpSchema = z.object({
	username: z.string(),
	email: z.string(),
	password: z.string(),
});

export const SignInSchema = z.object({
	email: z.string(),
	password: z.string(),
});

export const TrainModel = z.object({
	name: z.string(),
	type: z.enum(["Man", "Woman", "Others"]),
	age: z.number(),
	ethinicity: z.enum([
		"Black",
		"Asian_American",
		"East_Asian",
		"South_East_Asian",
		"South_Asian",
		"Middle_Eastern",
		"Pacific",
		"Hispanic",
	]),
	eyeColor: z.enum(["Brown", "Blue", "Hazel", "Gray"]),
	bald: z.boolean(),
	zipUrl: z.string(),
});

export const Generateimage = z.object({
	prompt: z.string(),
	modelId: z.string(),
	num: z.number(),
});

export const GenerateImageFromPack = z.object({
	modelId: z.string(),
	packId: z.string(),
});
