import { NextRequest, NextResponse } from "next/server";
import { getSignedUrlForUpload } from "@/lib/r2";
import { getUserFromToken } from "@/lib/auth";

export async function GET(request: NextRequest) {
	console.log("ueat chai akko xa hai tw")
	const user = await getUserFromToken();
	if (!user) {
		return NextResponse.json(
			{ success: false, message: "Unauthorized access" },
			{ status: 401 }
		);
	}
	const key = `models/${Date.now()}_${Math.random()}.zip`;
	const url = await getSignedUrlForUpload(key, "application/zip");

	return NextResponse.json(
		{
			success: true,
			data: {
				url,
				key,
			},
		},
		{ status: 200 }
	);
}
