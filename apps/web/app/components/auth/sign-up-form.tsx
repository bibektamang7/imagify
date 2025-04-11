"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export function SignUpForm() {
	const router = useRouter();
	const isLoading = false;
	const { signUpUser } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!email || !password) {
			toast("Please fill in all fields");
			return;
		}

		if (password.length < 8) {
			toast("Password must be at least 8 characters");
			return;
		}

		try {
			const signUpResponse = await signUpUser(email, password);
			if (signUpResponse.ok || signUpResponse.success) {
				router.push("/dashboard");
			}
		} catch (err) {
			toast("An error occurred. Please try again.");
		}
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
