import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
	return (
		<header
			className="border-b border-gray-800"
			role="banner"
		>
			<div className="container flex h-16 items-center justify-between px-4 md:px-6">
				<Link
					href="/"
					className="flex items-center gap-2 font-bold text-xl"
					aria-label="PhotoAI Home"
				>
					<Sparkles
						className="h-6 w-6 text-purple-400"
						aria-hidden="true"
					/>
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
						PhotoAI
					</span>
				</Link>
				<nav
					className="hidden md:flex gap-6"
					aria-label="Main Navigation"
				>
					<Link
						href="#features"
						className="text-sm font-medium hover:text-purple-400 transition-colors"
					>
						Features
					</Link>
					<Link
						href="#examples"
						className="text-sm font-medium hover:text-purple-400 transition-colors"
					>
						Examples
					</Link>
					<Link
						href="#pricing"
						className="text-sm font-medium hover:text-purple-400 transition-colors"
					>
						Pricing
					</Link>
				</nav>
				<div className="flex items-center gap-4">
					<Link
						href="/sign-in"
						className="text-sm font-medium hover:text-purple-400 transition-colors hidden sm:inline-block"
					>
						Sign in
					</Link>
					<Link href="/sign-up">
						<Button className="hover:cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-900/20">
							Get Started
						</Button>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
