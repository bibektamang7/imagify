import { Metadata } from "next";
import Link from "next/link";
import { SignInForm } from "@/components/auth/sign-in-form";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
	title: "Sign In",
	description:
		"Sign in to your Imagify account to access your generated portraits",
};

export default function SignInPage() {
	return (
		<div className="flex min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
			<div className="flex flex-col justify-center w-full px-4 sm:max-w-md mx-auto">
				<div className="flex flex-col items-center mb-8">
					<Link
						href="/"
						className="flex items-center gap-2 font-bold text-xl mb-8"
					>
						<Sparkles className="h-6 w-6 text-purple-400" />
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
							Imagify
						</span>
					</Link>
					<h1 className="text-2xl font-bold tracking-tight text-white">
						Sign in to your account
					</h1>
					<p className="text-sm text-gray-400 mt-2">
						Don't have an account?{" "}
						<Link
							href="/sign-up"
							className="text-purple-400 hover:text-purple-300"
						>
							Sign up
						</Link>
					</p>
				</div>
				<SignInForm />
			</div>
		</div>
	);
}
