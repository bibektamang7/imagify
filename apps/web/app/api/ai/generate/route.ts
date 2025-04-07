import { prismaClient } from "db";
import { NextRequest, NextResponse } from "next/server";
import { Generateimage } from "validation/types";

export async function POST(request: NextRequest) {
	try {
		const generateData = await request.json();
		const parsedData = Generateimage.safeParse(generateData);
		if (!parsedData.success) {
			return NextResponse.json(
				{ success: false, message: "Validation Error" },
				{ status: 403 }
			);
		}

		const data = await prismaClient.outputImages.create({
			data: {
				userId: generateData.userId,
				...parsedData.data,
			},
		});

		return NextResponse.json({
			success: true,
			message: "Generated Images",
			data: { imageId: data.id },
		});
	} catch (error: any) {
		return NextResponse.json(
			{ success: false, message: "Failed to generate images" },
			{ status: 500 }
		);
	}
}
