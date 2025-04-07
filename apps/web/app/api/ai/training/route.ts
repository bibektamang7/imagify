import { prismaClient } from "db";
import { NextRequest, NextResponse } from "next/server";
import { TrainModel } from "validation/types";

export async function GET(request: NextRequest) {
	const trainingData = await request.json();
	const parsedData = TrainModel.safeParse(trainingData);

	if (!parsedData.success) {
		return NextResponse.json(
			{ success: false, message: "Input incorrect" },
			{ status: 411 }
		);
	}

	const model = await prismaClient.model.create({
		data: {
			userId: trainingData.userId,
			...parsedData.data,
		},
	});

	return NextResponse.json(
		{ success: true, message: "Model created", data: { modelId: model.id } },
		{ status: 200 }
	);
}
