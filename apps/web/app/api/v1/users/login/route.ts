import bcrypt from "bcryptjs";
import { prismaClient } from "db";
import { NextResponse } from "next/server";
import { SignInSchema } from "validation/types";
import { generateAccessAndRefreshToken } from "@/lib/generateToken";

const isPasswordCorrect = async (password: string, hashPassword: string) => {
	return await bcrypt.compare(password, hashPassword);
};

export async function POST(request: Request) {
	try {
		const requestData = await request.json();
		const parsedData = SignInSchema.safeParse(requestData);

		if (!parsedData.success) {
			return NextResponse.json(
				{ success: false, message: "Validation Failed" },
				{ status: 401 }
			);
		}
		const user = await prismaClient.user.findUnique({
			where: {
				email: parsedData.data.email,
			},
		});

		if (!user) {
			return NextResponse.json(
				{ success: false, message: "User not found" },
				{ status: 400 }
			);
		}

		const isCorrectPassword = await isPasswordCorrect(
			parsedData.data.password,
			user.password
		);

		if (!isCorrectPassword) {
			return NextResponse.json(
				{ success: false, message: "Invalid password" },
				{ status: 400 }
			);
		}
		const { accessToken, refreshToken } = generateAccessAndRefreshToken(
			user.id
		);

		const response = NextResponse.json(
			{
				success: true,
				message: "Login Successfull",
				data: {
					user: {
						email: user.email,
						id: user.id,
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
		console.log("something went wrong while login", error);
		return NextResponse.json(
			{ success: false, message: "Failed to login" },
			{ status: 400 }
		);
	}
}
