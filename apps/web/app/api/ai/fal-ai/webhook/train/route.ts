import { fal } from "@fal-ai/client";
import { prismaClient } from "db";
import { NextRequest, NextResponse } from "next/server";
import { FalAIModel } from "../../../../../../lib/FalAiModel";
const falAiModel = new FalAIModel();

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const requestId = body.request_id as string;

		const model = await prismaClient.model.findFirst({
			where: {
				falAiRequestId: requestId,
			},
		});
		if (!model) {
			return NextResponse.json(
				{ success: false, message: "Model not founnd" },
				{ status: 404 }
			);
		}

		if (body.status === "ERROR") {
			await prismaClient.model.updateMany({
				where: {
					falAiRequestId: requestId,
				},
				data: {
					trainingStatus: "Failed",
				},
			});
			return;
			// return NextResponse.json(
			// 	{ success: false, message: "Failed to train model" },
			// 	{ status: 411 }
			// );
		}

		if (body.status === "COMPLETED" || body.status === "OK") {
			try {
				let loraUrl;
				if (
					// @ts-ignore
					req.body.payload &&
					// @ts-ignore
					req.body.payload.diffusers_lora_file &&
					// @ts-ignore
					req.body.payload.diffusers_lora_file.url
				) {
					// Extract directly from webhook payload
					// @ts-ignore
					loraUrl = req.body.payload.diffusers_lora_file.url;
					console.log("Using lora URL from webhook payload:", loraUrl);
				} else {
					// Fetch result from fal.ai if not in payload
					console.log("Fetching result from fal.ai");
					const result = await fal.queue.result(
						"fal-ai/flux-lora-fast-training",
						{
							requestId,
						}
					);
					console.log("Fal.ai result:", result);
					const resultData = result.data as any;
					loraUrl = resultData.diffusers_lora_file.url;
				}
				const { imageUrl } = await falAiModel.generateImageSync(loraUrl);
				await prismaClient.model.updateMany({
					where: {
						falAiRequestId: requestId,
					},
					data: {
						trainingStatus: "Generated",
						tensorPath: loraUrl,
						thumbnail: imageUrl,
					},
				});
			} catch (error) {}
		}
	} catch (error: any) {}
}
