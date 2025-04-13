import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	ArrowRight,
	Download,
	Zap,
	Shield,
	Palette,
	Layers,
	Repeat,
} from "lucide-react";
import {
	WebsiteStructuredData,
	OrganizationStructuredData,
	SoftwareApplicationStructuredData,
} from "@/components/structured-data";
import type { Metadata } from "next";
import Header from "./components/Header";
import Pricing from "./components/Pricing";

export const metadata: Metadata = {
	title: "AI Portrait Generator | Transform Your Photos with AI",
	description:
		"Create stunning AI portraits in seconds. Upload your photo and get 50+ professional portraits in different styles with our advanced AI technology.",
	openGraph: {
		title: "Imagify - Transform Your Photos with AI",
		description:
			"Create stunning AI portraits in seconds. Upload your photo and get 50+ professional portraits in different styles.",
		url: "https://imagify.example.com",
		siteName: "Imagify",
		images: [
			{
				url: "https://imagify.example.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Imagify - AI Portrait Generator",
			},
		],
		locale: "en_US",
		type: "website",
	},
};

export default function Home() {
	return (
		<>
			<WebsiteStructuredData />
			{/* <OrganizationStructuredData />
			<SoftwareApplicationStructuredData /> */}

			<div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
				<Header />
				<main className="flex-1">
					<section
						className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden"
						aria-labelledby="hero-heading"
					>
						{/* Animated gradient background */}
						<div
							className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 opacity-30"
							aria-hidden="true"
						></div>
						<div
							className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-pulse"
							aria-hidden="true"
						></div>
						<div
							className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600 rounded-full filter blur-3xl opacity-10 animate-pulse"
							style={{ animationDelay: "2s" }}
							aria-hidden="true"
						></div>

						<div className="container px-4 md:px-6 relative">
							<div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
								<div className="flex flex-col justify-center space-y-4">
									<div className="space-y-2">
										<Badge className="mb-2 bg-purple-900/50 text-purple-300 hover:bg-purple-900/70 transition-colors">
											AI-Powered Portraits
										</Badge>
										<h1
											id="hero-heading"
											className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
										>
											Transform Your Photos with AI Magic
										</h1>
										<p className="max-w-[600px] text-gray-400 md:text-xl">
											Create stunning AI portraits in seconds. Upload your photo
											and get 50+ professional portraits in different styles
											with our advanced AI technology.
										</p>
									</div>
									<div className="flex flex-col gap-2 min-[400px]:flex-row">
										<Link href="/generate">
											<Button
												size="lg"
												className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-900/20 animate-pulse"
											>
												Create Your Portraits{" "}
												<ArrowRight
													className="h-4 w-4"
													aria-hidden="true"
												/>
											</Button>
										</Link>
									</div>
								</div>
								<div className="mx-auto grid grid-cols-2 gap-4 relative">
									<div
										className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl filter blur-xl opacity-30 animate-pulse"
										aria-hidden="true"
									></div>
									<div className="grid gap-4 relative z-10">
										<div className="overflow-hidden rounded-lg shadow-xl shadow-purple-900/20 transition-all duration-500 hover:scale-105">
											<Image
												alt="Professional AI portrait of a woman with business attire"
												className="rounded-lg object-cover"
												height={300}
												src="/placeholder.svg?height=300&width=250"
												width={250}
											/>
										</div>
										<div
											className="overflow-hidden rounded-lg shadow-xl shadow-purple-900/20 transition-all duration-500 hover:scale-105"
											style={{ transitionDelay: "0.1s" }}
										>
											<Image
												alt="Artistic AI portrait of a man with creative lighting"
												className="rounded-lg object-cover"
												height={300}
												src="/placeholder.svg?height=300&width=250"
												width={250}
											/>
										</div>
									</div>
									<div className="grid gap-4 mt-8 relative z-10">
										<div
											className="overflow-hidden rounded-lg shadow-xl shadow-purple-900/20 transition-all duration-500 hover:scale-105"
											style={{ transitionDelay: "0.2s" }}
										>
											<Image
												alt="Vintage style AI portrait with sepia tones"
												className="rounded-lg object-cover"
												height={300}
												src="/placeholder.svg?height=300&width=250"
												width={250}
											/>
										</div>
										<div
											className="overflow-hidden rounded-lg shadow-xl shadow-purple-900/20 transition-all duration-500 hover:scale-105"
											style={{ transitionDelay: "0.3s" }}
										>
											<Image
												alt="Fantasy themed AI portrait with magical elements"
												className="rounded-lg object-cover"
												height={300}
												src="/placeholder.svg?height=300&width=250"
												width={250}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section
						id="features"
						className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 relative"
						aria-labelledby="features-heading"
					>
						<div
							className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent"
							aria-hidden="true"
						></div>
						<div className="container px-4 md:px-6 relative">
							<div className="flex flex-col items-center justify-center space-y-4 text-center">
								<div className="space-y-2 max-w-3xl">
									<Badge className="mb-2 bg-purple-900/50 text-purple-300 hover:bg-purple-900/70 transition-colors">
										Features
									</Badge>
									<h2
										id="features-heading"
										className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
									>
										Advanced AI Portrait Generation
									</h2>
									<p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
										Our cutting-edge AI technology transforms your ordinary
										photos into extraordinary portraits
									</p>
								</div>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
								<Card className="bg-gray-900/50 border-gray-800 shadow-xl shadow-purple-900/5 transition-all duration-300 hover:shadow-purple-900/10 hover:translate-y-[-5px]">
									<CardHeader>
										<div className="p-2 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 w-fit">
											<Palette
												className="h-6 w-6 text-white"
												aria-hidden="true"
											/>
										</div>
										<CardTitle className="mt-4">50+ Unique Styles</CardTitle>
										<CardDescription className="text-gray-400">
											Choose from professional, artistic, vintage, anime, and
											many more portrait styles
										</CardDescription>
									</CardHeader>
								</Card>

								<Card className="bg-gray-900/50 border-gray-800 shadow-xl shadow-purple-900/5 transition-all duration-300 hover:shadow-purple-900/10 hover:translate-y-[-5px]">
									<CardHeader>
										<div className="p-2 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 w-fit">
											<Zap
												className="h-6 w-6 text-white"
												aria-hidden="true"
											/>
										</div>
										<CardTitle className="mt-4">Lightning Fast</CardTitle>
										<CardDescription className="text-gray-400">
											Generate stunning portraits in seconds with our optimized
											AI processing
										</CardDescription>
									</CardHeader>
								</Card>

								<Card className="bg-gray-900/50 border-gray-800 shadow-xl shadow-purple-900/5 transition-all duration-300 hover:shadow-purple-900/10 hover:translate-y-[-5px]">
									<CardHeader>
										<div className="p-2 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 w-fit">
											<Shield
												className="h-6 w-6 text-white"
												aria-hidden="true"
											/>
										</div>
										<CardTitle className="mt-4">Privacy First</CardTitle>
										<CardDescription className="text-gray-400">
											Your photos are processed securely and never shared with
											third parties
										</CardDescription>
									</CardHeader>
								</Card>

								<Card className="bg-gray-900/50 border-gray-800 shadow-xl shadow-purple-900/5 transition-all duration-300 hover:shadow-purple-900/10 hover:translate-y-[-5px]">
									<CardHeader>
										<div className="p-2 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 w-fit">
											<Layers
												className="h-6 w-6 text-white"
												aria-hidden="true"
											/>
										</div>
										<CardTitle className="mt-4">Advanced AI Models</CardTitle>
										<CardDescription className="text-gray-400">
											Powered by state-of-the-art AI models trained on millions
											of professional portraits
										</CardDescription>
									</CardHeader>
								</Card>

								<Card className="bg-gray-900/50 border-gray-800 shadow-xl shadow-purple-900/5 transition-all duration-300 hover:shadow-purple-900/10 hover:translate-y-[-5px]">
									<CardHeader>
										<div className="p-2 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 w-fit">
											<Repeat
												className="h-6 w-6 text-white"
												aria-hidden="true"
											/>
										</div>
										<CardTitle className="mt-4">
											Unlimited Generations
										</CardTitle>
										<CardDescription className="text-gray-400">
											Create as many portraits as you want with our premium
											plans
										</CardDescription>
									</CardHeader>
								</Card>

								<Card className="bg-gray-900/50 border-gray-800 shadow-xl shadow-purple-900/5 transition-all duration-300 hover:shadow-purple-900/10 hover:translate-y-[-5px]">
									<CardHeader>
										<div className="p-2 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 w-fit">
											<Download
												className="h-6 w-6 text-white"
												aria-hidden="true"
											/>
										</div>
										<CardTitle className="mt-4">High Resolution</CardTitle>
										<CardDescription className="text-gray-400">
											Download your portraits in high resolution for printing
											and sharing
										</CardDescription>
									</CardHeader>
								</Card>
							</div>
						</div>
					</section>

					<section
						id="examples"
						className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-950 to-gray-900 relative"
						aria-labelledby="examples-heading"
					>
						<div
							className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"
							aria-hidden="true"
						></div>
						<div className="container px-4 md:px-6 relative">
							<div className="flex flex-col items-center justify-center space-y-4 text-center">
								<div className="space-y-2 max-w-3xl">
									<Badge className="mb-2 bg-purple-900/50 text-purple-300 hover:bg-purple-900/70 transition-colors">
										Examples
									</Badge>
									<h2
										id="examples-heading"
										className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
									>
										See What Imagify Can Create
									</h2>
									<p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
										Browse through our gallery of AI-generated portraits in
										various styles
									</p>
								</div>
							</div>

							<div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
								{[
									{
										style: "Professional",
										desc: "Business portrait with formal attire",
									},
									{
										style: "Artistic",
										desc: "Creative portrait with artistic lighting",
									},
									{
										style: "Vintage",
										desc: "Classic portrait with retro styling",
									},
									{
										style: "Anime",
										desc: "Japanese anime-inspired character portrait",
									},
									{
										style: "Cyberpunk",
										desc: "Futuristic portrait with neon elements",
									},
									{
										style: "Fantasy",
										desc: "Magical portrait with fantasy elements",
									},
									{
										style: "Noir",
										desc: "Black and white portrait with dramatic shadows",
									},
									{
										style: "Casual",
										desc: "Relaxed portrait with natural lighting",
									},
								].map((item, i) => (
									<div
										key={i}
										className="group relative overflow-hidden rounded-lg shadow-xl shadow-purple-900/10 transition-all duration-500 hover:shadow-purple-900/20 hover:scale-105"
										style={{ transitionDelay: `${i * 0.05}s` }}
									>
										<Image
											src={`/placeholder.svg?height=400&width=300&text=Example+${i + 1}`}
											alt={`${item.style} style AI portrait - ${item.desc}`}
											width={300}
											height={400}
											className="w-full h-auto object-cover aspect-[3/4]"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
											<div className="p-4 w-full">
												<Badge className="mb-2 bg-purple-600/80">
													{item.style}
												</Badge>
												<p className="text-sm text-white">{item.desc}</p>
											</div>
										</div>
									</div>
								))}
							</div>

							<div className="mt-12 text-center">
								<Link href="/generate">
									<Button className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-900/20">
										Create Your Own{" "}
										<ArrowRight
											className="h-4 w-4"
											aria-hidden="true"
										/>
									</Button>
								</Link>
							</div>
						</div>
					</section>

					<Pricing />

					<section
						className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden"
						aria-labelledby="cta-heading"
					>
						<div
							className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"
							aria-hidden="true"
						></div>
						<div
							className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-pulse"
							aria-hidden="true"
						></div>
						<div
							className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600 rounded-full filter blur-3xl opacity-10 animate-pulse"
							style={{ animationDelay: "2s" }}
							aria-hidden="true"
						></div>

						<div className="container px-4 md:px-6 relative">
							<div className="flex flex-col items-center text-center space-y-4 py-8 md:py-12">
								<h2
									id="cta-heading"
									className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
								>
									Ready to Transform Your Photos?
								</h2>
								<p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed">
									Join thousands of users creating stunning AI portraits with
								Imagify	
								</p>
								<Link href="/generate">
									<Button
										size="lg"
										className="mt-4 gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-900/20 animate-pulse"
									>
										Get Started Now{" "}
										<ArrowRight
											className="h-4 w-4"
											aria-hidden="true"
										/>
									</Button>
								</Link>
							</div>
						</div>
					</section>
				</main>
			</div>
		</>
	);
}
