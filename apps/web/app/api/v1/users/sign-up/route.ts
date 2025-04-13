import { prismaClient } from "db";
import { NextResponse } from "next/server";
import { SignUpSchema } from "validation/types";
import bcrypt from "bcryptjs";
import { generateAccessAndRefreshToken } from "@/lib/generateToken";

export async function POST(request: Request) {
	try {
		const requestData = await request.json();
		const parsedData = SignUpSchema.safeParse(requestData);
		if (!parsedData.success) {
			return NextResponse.json(
				{ success: false, message: "Validation Error" },
				{ status: 401 }
			);
		}

		const user = await prismaClient.user.findUnique({
			where: {
				email: parsedData.data.email,
			},
		});

		if (user) {
			return NextResponse.json(
				{ success: false, message: "user already exists" },
				{ status: 400 }
			);
		}

		const hashPassword = await bcrypt.hash(parsedData.data.password, 10);

		const createdUser = await prismaClient.user.create({
			data: {
				password: hashPassword,
				email: parsedData.data.email,
			},
		});

		if (!createdUser) {
			return NextResponse.json(
				{ success: false, message: "Failed to register user" },
				{ status: 500 }
			);
		}

		const { refreshToken, accessToken } = generateAccessAndRefreshToken(
			createdUser.id
		);

		//TODO: store refreshToken in the database

		const response = NextResponse.json(
			{
				success: true,
				message: "Registered Successfull",
				data: {
					user: {
						email: createdUser.email,
						userId: createdUser.id,
					},
				},
			},
			{ status: 200 }
		);

		response.headers.set(
			"Set-Cookie",
			`accessToken=${accessToken}; HttpOnly; Path=/;`
		);
		return response;
	} catch (error: any) {
		console.log("Something went wrong while registring user", error);
		return NextResponse.json(
			{ success: false, message: "Failed to register user" },
			{ status: 400 }
		);
	}
}
