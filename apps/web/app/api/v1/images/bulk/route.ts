import { getUserFromToken } from "@/lib/auth";
import { prismaClient } from "db";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const user = await getUserFromToken();
	if (!user) {
		return NextResponse.json(
			{ success: false, message: "unauthorized access" },
			{ status: 401 }
		);
	}
	try {
		const searchParams = request.nextUrl.searchParams;
		const imageIds = searchParams.getAll("ids");
		const limit = (searchParams.get("limit") as string) ?? "10";
		const offset = (searchParams.get("offset") as string) ?? "0";

		const imagesData = await prismaClient.outputImages.findMany({
			where: {
				id: { in: imageIds },
				userId: user.id,
				status: {
					not: "Failed",
				},
			},
			skip: parseInt(offset),
			take: parseInt(limit),
		});

		return NextResponse.json(
			{ success: true, data: { images: imagesData } },
			{ status: 200 }
		);
	} catch (error: any) {
		return NextResponse.json({ success: false, message: "" }, { status: 500 });
	}
}
