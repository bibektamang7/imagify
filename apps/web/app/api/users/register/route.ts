import { prismaClient } from "db";
import { NextResponse } from "next/server";
import { SignUpSchema } from "validation/types";
import bcrypt from "bcryptjs";




export async function POST(request: Request) {
	try {
		const requestData = await request.json();
		const parsedData = SignUpSchema.safeParse(requestData);
		if(!parsedData.success) {
			return NextResponse.json(
				{success: false, message: "Validation Error"},
				{status: 401}
			)
		}

	


	} catch (error: any) {
		console.log("Something went wrong while registring user", error);
		return NextResponse.json(
			{ success: false, message: "Failed to register user" },
			{ status: 400 }
		);
	}
}
