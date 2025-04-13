"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

export function SignInForm() {
	const router = useRouter();
	const { loginUser } = useAuth();
	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		if (!email || !password) {
			toast("Please fill in all fields");
			return;
		}

		const loginResponse = await loginUser(email, password);
		if (loginResponse.ok || loginResponse.success) {
			router.push("/dashboard");
		} else {
			toast("Invalid email or password");
		}
		setIsLoading(false);
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
				</form>
			</CardContent>
		</Card>
	);
}
