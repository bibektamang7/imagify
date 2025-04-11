"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export function SignInForm() {
	const router = useRouter();
	//   const { signIn, isLoading } = useAuth()
	const isLoading = false;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		if (!email || !password) {
			setError("Please fill in all fields");
			return;
		}

		// try {
		//   const success = await signIn(email, password)
		//   if (success) {
		//     router.push("/dashboard")
		//   } else {
		//     setError("Invalid email or password")
		//   }
		// } catch (err) {
		//   setError("An error occurred. Please try again.")
		// }
	};

	return (
		<Card className="bg-gray-900/50 border-gray-800 shadow-xl">
			<CardContent className="pt-6">
				<form
					onSubmit={handleSubmit}
					className="space-y-4"
				>
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							placeholder="you@example.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="bg-gray-800 border-gray-700"
							required
						/>
					</div>
					<div className="space-y-2">
						<div className="flex items-center justify-between">
							<Label htmlFor="password">Password</Label>
							<Link
								href="/forgot-password"
								className="text-xs text-purple-400 hover:text-purple-300"
							>
								Forgot password?
							</Link>
						</div>
						<Input
							id="password"
							type="password"
							placeholder="••••••••"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="bg-gray-800 border-gray-700"
							required
						/>
					</div>

					{error && <p className="text-red-500 text-sm">{error}</p>}

					<Button
						type="submit"
						className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
						disabled={isLoading}
					>
						{isLoading ? (
							<>
								<Loader2 className="mr-2 h-4 w-4 animate-spin" /> Signing in...
							</>
						) : (
							"Sign in"
						)}
					</Button>

					<div className="text-center text-xs text-gray-500 mt-4">
						<p>Demo credentials:</p>
						<p>Email: demo@example.com</p>
						<p>Password: password</p>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
