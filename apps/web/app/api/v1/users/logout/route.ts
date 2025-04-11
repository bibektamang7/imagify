import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		//TODO: remove refreshToken

		const response = NextResponse.json(
			{ success: true, message: "Logout successfull" },
			{ status: 200 }
		);

		response.headers.set(
			"Set-Cookie",
			`accessToken=; Max-Age=0; HttpOnly; Secure;`
		);

		return response;
	} catch (error: any) {
		return NextResponse.json(
			{ success: false, message: "Failed to logout " },
			{ status: 500 }
		);
	}
}
