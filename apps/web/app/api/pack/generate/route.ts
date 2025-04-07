import { prismaClient } from "db";
import { NextRequest, NextResponse } from "next/server";
import { GenerateImageFromPack } from "validation/types";

// This is pack generate route, where images will be generated based on the build in pack prompt
export async function POST(request: NextRequest) {
	try {
		const packData = await request.json();
		const parsedData = GenerateImageFromPack.safeParse(packData);
		if (!parsedData.success) {
			return NextResponse.json(
				{ success: false, message: "Validation Failed" },
				{ status: 403 }
			);
		}

		const prompts = await prismaClient.packPrompts.findMany({
			where: {
				packId: parsedData.data.packId,
			},
		});

		const images = await prismaClient.outputImages.createManyAndReturn({
			data: prompts.map((prompt) => ({
				prompt: prompt.id,
				userId: packData.userId,
				modelId: parsedData.data.modelId,
				imageUrl: "",
			})),
		});

		return NextResponse.json(
			{
				success: false,
				message: "Generated pack images",
				data: {
					images: images.map((image) => image.id),
				},
			},
			{ status: 200 }
		);
	} catch (error: any) {
		return NextResponse.json(
			{ success: false, message: "Failed to generate images" },
			{ status: 500 }
		);
	}
}
