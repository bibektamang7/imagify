import { Link, Sparkles } from "lucide-react";
import React from "react";

const Footer = () => {
	return (
		<footer
			className="border-t border-gray-800 py-6 md:py-8 bg-gray-950"
			role="contentinfo"
		>
			<div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row">
				<div className="flex items-center gap-2">
					<Sparkles
						className="h-6 w-6 text-purple-400"
						aria-hidden="true"
					/>
					<span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
						PhotoAI
					</span>
				</div>
				<p className="text-center text-sm text-gray-500 md:text-left">
					© 2025 PhotoAI. All rights reserved.
				</p>
				<nav
					className="flex gap-4 md:ml-auto md:gap-6"
					aria-label="Footer Navigation"
				>
					<Link
						href="/terms"
						className="text-sm font-medium text-gray-500 hover:text-purple-400 transition-colors"
					>
						Terms
					</Link>
					<Link
						href="/privacy"
						className="text-sm font-medium text-gray-500 hover:text-purple-400 transition-colors"
					>
						Privacy
					</Link>
					<Link
						href="/sitemap"
						className="text-sm font-medium text-gray-500 hover:text-purple-400 transition-colors"
					>
						Sitemap
					</Link>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
