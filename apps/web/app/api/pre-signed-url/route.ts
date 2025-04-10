import { NextRequest, NextResponse } from "next/server";
import { getSignedUrlForUpload, uploadFile } from "../../../lib/r2";

export async function GET(request: NextRequest) {
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
