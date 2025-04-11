import { prismaClient } from "db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();

		// TODO: if failed to generate image
		if (body.status === "ERROR") {
			prismaClient.outputImages.updateMany({
				where: {
					falAiRequestId: body.request_id,
				},
				data: {
					status: "Failed",
					imageUrl: body.payload.images[0].url,
				},
			});
			return;
			// return NextResponse.json(
			// 	{ success: false, message: "Failed to generate image" },
			// 	{ status: 411 }
			// );
		}

		await prismaClient.outputImages.updateMany({
			where: {
				falAiRequestId: body.requestId,
			},
			data: {
				status: "Generated",
				imageUrl: body.payload.imageUrl[0].url,
			},
		});

		return NextResponse.json({
			success: true,
			message: "webhook message received",
		});
	} catch (error: any) {
		console.log("something went wrong", error);
	}
}
