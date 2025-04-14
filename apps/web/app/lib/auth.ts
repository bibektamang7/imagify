import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

interface TokenPayload {
	id: string;
	email: string;
}

export async function getUserFromToken(): Promise<TokenPayload | null> {
	const cookieStore = await cookies();

	const token = cookieStore.get("accessToken")?.value;
	if (!token) {
		return null;
	}
	try {
		const decoded = jwt.verify(
			token,
			process.env.NEXT_PUBLIC_ACCESS_TOKEN_SECRET!
		) as TokenPayload;
		return decoded;
	} catch (error) {
		console.error("Invalid or expired token", error);
		return null;
	}
}
