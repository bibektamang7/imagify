import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const token = request.cookies.get("accessToken")?.value;
	const { pathname } = request.nextUrl;

	const authorizedApiRoute = ["/api/v1/users/login", "/api/v1/users/sign-up"];

	if (
		pathname.startsWith("/api") &&
		!authorizedApiRoute.some((route) => pathname.startsWith(route)) &&
		!token
	) {
		return NextResponse.json({ message: "unauthorized" }, { status: 401 });
	}

	if (pathname.startsWith("/dashboard") && !token) {
		return NextResponse.redirect(new URL("/sign-in", request.url));
	}

	if (token && pathname.startsWith("/sign-in")) {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/", "/sign-in", "/dashboard/:path*", "/api/:path*"],
};
