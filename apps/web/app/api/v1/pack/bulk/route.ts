import { prismaClient } from "db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	try {
		const packs = await prismaClient.packs.findMany({});
		// TODO: add caching here
		return NextResponse.json({ success: true, data: { packs } });
	} catch (error: any) {
		return NextResponse.json(
			{
				success: false,
				message: "Failed to fetch generate images from the pack",
			},
			{ status: 500 }
		);
	}
}
