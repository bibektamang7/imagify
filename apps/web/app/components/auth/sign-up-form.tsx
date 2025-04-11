"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
// import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export function SignUpForm() {
	const router = useRouter();
	const isLoading = false;
	//   const { signUp, isLoading } = useAuth()
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		if (!email || !password || !confirmPassword) {
			setError("Please fill in all fields");
			return;
		}

		if (password !== confirmPassword) {
			setError("Passwords do not match");
			return;
		}

		if (password.length < 8) {
			setError("Password must be at least 8 characters");
			return;
		}

		// try {
		//   const success = await signUp(name, email, password)
		//   if (success) {
		//     router.push("/dashboard")
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
						<Label htmlFor="password">Password</Label>
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

					<div className="space-y-2">
						<Label htmlFor="confirmPassword">Confirm Password</Label>
						<Input
							id="confirmPassword"
							type="password"
							placeholder="••••••••"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
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
								<Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating
								account...
							</>
						) : (
							"Create account"
						)}
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
