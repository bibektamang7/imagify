import { prismaClient } from "db";
import { NextRequest, NextResponse } from "next/server";
import { TrainModel } from "validation/types";
import { FalAIModel } from "../../../../lib/FalAiModel";

const falAiModel = new FalAIModel();

export async function POST(request: NextRequest) {
	const trainingData = await request.json();
	const parsedData = TrainModel.safeParse(trainingData);

	if (!parsedData.success) {
		return NextResponse.json(
			{ success: false, message: "Input incorrect" },
			{ status: 411 }
		);
	}

	const { request_id } = await falAiModel.trainModel(
		parsedData.data.zipUrl,
		parsedData.data.name
	);

	const model = await prismaClient.model.create({
		data: {
			falAiRequestId: request_id,
			userId: trainingData.userId,
			...parsedData.data,
		},
	});

	return NextResponse.json(
		{ success: true, message: "Model created", data: { modelId: model.id } },
		{ status: 200 }
	);
}
