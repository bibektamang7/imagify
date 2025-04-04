import jwt from "jsonwebtoken";

export const generateAccessAndRefreshToken = (userId: string) => {
	const refreshToken = jwt.sign(
		{
			id: userId,
		},
		process.env.REFRESH_TOKEN_SECRET!,
		{ expiresIn: "7d" }
	);

	const accessToken = jwt.sign(
		{
			id: userId,
		},
		process.env.ACCESS_TOKEN_SECRET!,
		{ expiresIn: "1d" }
	);

	return { accessToken, refreshToken };
};
