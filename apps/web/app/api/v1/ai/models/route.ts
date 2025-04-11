import { prismaClient } from "db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const models = await prismaClient.model.findMany({
		where: {
			// @ts-ignore
			OR: [{ userId: request.userId }, { open: true }],
		},
	});

	return NextResponse.json(
		{
			success: true,
		},
		{ status: 200 }
	);
}
