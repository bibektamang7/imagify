import React from "react";
import { Badge, Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const Pricing = () => {
	return (
		<section
			id="pricing"
			className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 relative"
			aria-labelledby="pricing-heading"
		>
			<div
				className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent"
				aria-hidden="true"
			></div>
			<div className="container px-4 md:px-6 relative">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2 max-w-3xl">
						<Badge className="mb-2 bg-purple-900/50 text-purple-300 hover:bg-purple-900/70 transition-colors">
							Pricing
						</Badge>
						<h2
							id="pricing-heading"
							className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
						>
							Choose Your Perfect Plan
						</h2>
						<p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Flexible pricing options for individuals and professionals
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
					{/* Free Plan */}
					<Card className="bg-gray-900/50 border-gray-800 shadow-xl shadow-purple-900/5 transition-all duration-300 hover:shadow-purple-900/10 hover:translate-y-[-5px]">
						<CardHeader>
							<CardTitle>Free</CardTitle>
							<div className="mt-4 flex items-baseline text-gray-200">
								<span className="text-4xl font-extrabold tracking-tight">
									$0
								</span>
								<span className="ml-1 text-xl font-semibold text-gray-400">
									/month
								</span>
							</div>
						</CardHeader>
						<CardContent className="mt-6">
							<ul className="space-y-3">
								{[
									"5 AI portraits per month",
									"10 styles",
									"Standard resolution",
									"Basic editing tools",
									"24-hour generation time",
								].map((feature, i) => (
									<li
										key={i}
										className="flex items-center"
									>
										<Check
											className="h-4 w-4 text-purple-400 mr-3 flex-shrink-0"
											aria-hidden="true"
										/>
										<span className="text-gray-400">{feature}</span>
									</li>
								))}
							</ul>
						</CardContent>
						<CardFooter>
							<Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
								Get Started
							</Button>
						</CardFooter>
					</Card>

					{/* Pro Plan */}
					<Card className="bg-gradient-to-b from-purple-900/20 to-gray-900/90 border-purple-800/50 shadow-xl shadow-purple-900/10 transition-all duration-300 hover:shadow-purple-900/20 hover:translate-y-[-5px] relative">
						<div
							className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-t-lg"
							aria-hidden="true"
						></div>
						<Badge className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
							Popular
						</Badge>
						<CardHeader>
							<CardTitle>Pro</CardTitle>
							<div className="mt-4 flex items-baseline text-gray-200">
								<span className="text-4xl font-extrabold tracking-tight">
									$19
								</span>
								<span className="ml-1 text-xl font-semibold text-gray-400">
									/month
								</span>
							</div>
						</CardHeader>
						<CardContent className="mt-6">
							<ul className="space-y-3">
								{[
									"50 AI portraits per month",
									"30 styles",
									"High resolution",
									"Advanced editing tools",
									"1-hour generation time",
									"Remove watermarks",
									"Priority support",
								].map((feature, i) => (
									<li
										key={i}
										className="flex items-center"
									>
										<Check
											className="h-4 w-4 text-purple-400 mr-3 flex-shrink-0"
											aria-hidden="true"
										/>
										<span className="text-gray-300">{feature}</span>
									</li>
								))}
							</ul>
						</CardContent>
						<CardFooter>
							<Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-900/20">
								Get Started
							</Button>
						</CardFooter>
					</Card>

					{/* Business Plan */}
					<Card className="bg-gray-900/50 border-gray-800 shadow-xl shadow-purple-900/5 transition-all duration-300 hover:shadow-purple-900/10 hover:translate-y-[-5px]">
						<CardHeader>
							<CardTitle>Business</CardTitle>
							<div className="mt-4 flex items-baseline text-gray-200">
								<span className="text-4xl font-extrabold tracking-tight">
									$49
								</span>
								<span className="ml-1 text-xl font-semibold text-gray-400">
									/month
								</span>
							</div>
						</CardHeader>
						<CardContent className="mt-6">
							<ul className="space-y-3">
								{[
									"Unlimited AI portraits",
									"All 50+ styles",
									"Ultra-high resolution",
									"Professional editing suite",
									"Instant generation",
									"Commercial usage rights",
									"API access",
									"Dedicated support",
								].map((feature, i) => (
									<li
										key={i}
										className="flex items-center"
									>
										<Check
											className="h-4 w-4 text-purple-400 mr-3 flex-shrink-0"
											aria-hidden="true"
										/>
										<span className="text-gray-400">{feature}</span>
									</li>
								))}
							</ul>
						</CardContent>
						<CardFooter>
							<Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
								Contact Sales
							</Button>
						</CardFooter>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
