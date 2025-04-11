"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
// import { useAuth } from "@/context/auth-context"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { RecentPortraits } from "@/components/dashboard/recent-portraits";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { ArrowRight, Sparkles, Wand2 } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
	const router = useRouter();
	const isLoading = false;
	//   const { user, isLoading } = useAuth()

	// useEffect(() => {
	// 	if (!isLoading && !user) {
	// 		router.push("/sign-in");
	// 	}
	// }, [user, isLoading, router]);

	// if (isLoading || !user) {
	// 	return null;
	// }

	return (
		<div className="space-y-8">
			<div>
				<h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
				{/* <p className="text-gray-500">Welcome back, {user.name}!</p> */}
			</div>

			<StatsCards />

			<Tabs
				defaultValue="recent"
				className="space-y-4"
			>
				<TabsList>
					<TabsTrigger value="recent">Recent Portraits</TabsTrigger>
					<TabsTrigger value="popular">Popular Styles</TabsTrigger>
				</TabsList>
				<TabsContent
					value="recent"
					className="space-y-4"
				>
					<RecentPortraits />
				</TabsContent>
				<TabsContent
					value="popular"
					className="space-y-4"
				>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{[
							{
								name: "Professional",
								count: 1245,
								description: "Perfect for LinkedIn and professional profiles",
							},
							{
								name: "Artistic",
								count: 982,
								description: "Creative and artistic portrait styles",
							},
							{
								name: "Vintage",
								count: 879,
								description: "Classic and timeless portrait styles",
							},
							{
								name: "Anime",
								count: 754,
								description: "Japanese anime-inspired portrait styles",
							},
							{
								name: "Cyberpunk",
								count: 621,
								description: "Futuristic and neon-lit portrait styles",
							},
							{
								name: "Fantasy",
								count: 543,
								description: "Magical and otherworldly portrait styles",
							},
						].map((style) => (
							<Card
								key={style.name}
								className="bg-gray-900/50 border-gray-800 shadow-xl hover:shadow-purple-900/10 transition-all duration-300 hover:translate-y-[-5px]"
							>
								<CardHeader className="pb-2">
									<div className="flex items-center justify-between">
										<CardTitle className="text-lg">{style.name}</CardTitle>
										<Badge variant="secondary">{style.count}+ users</Badge>
									</div>
									<CardDescription>{style.description}</CardDescription>
								</CardHeader>
								<CardContent>
									<Link href="/generate">
										<Button
											variant="outline"
											className="w-full border-purple-800/50 hover:bg-purple-900/20"
										>
											Try this style
										</Button>
									</Link>
								</CardContent>
							</Card>
						))}
					</div>
				</TabsContent>
			</Tabs>

			<Card className="bg-gradient-to-r from-gray-900/90 to-purple-900/20 border-purple-800/50 shadow-xl">
				<CardHeader>
					<CardTitle>New! Text to Image</CardTitle>
					<CardDescription>
						Generate AI portraits using text prompts. Describe the portrait you
						want to create.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col sm:flex-row gap-4 items-center">
						<div className="space-y-2">
							<div className="flex items-center gap-2">
								<Wand2 className="h-4 w-4 text-purple-400" />
								<span>Describe any portrait style</span>
							</div>
							<div className="flex items-center gap-2">
								<Wand2 className="h-4 w-4 text-purple-400" />
								<span>Control creativity and quality</span>
							</div>
							<div className="flex items-center gap-2">
								<Wand2 className="h-4 w-4 text-purple-400" />
								<span>Generate unlimited variations</span>
							</div>
						</div>
						<Link
							href="/dashboard/text-to-image"
							className="sm:ml-auto"
						>
							<Button className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
								Try It Now <ArrowRight className="h-4 w-4" />
							</Button>
						</Link>
					</div>
				</CardContent>
			</Card>

			<Card className="bg-gradient-to-r from-purple-900/20 to-gray-900/90 border-purple-800/50 shadow-xl">
				<CardHeader>
					<CardTitle>Upgrade to Pro</CardTitle>
					<CardDescription>
						Get unlimited AI portraits, 30+ styles, high resolution downloads,
						and more.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col sm:flex-row gap-4 items-center">
						<div className="space-y-2">
							<div className="flex items-center gap-2">
								<Sparkles className="h-4 w-4 text-purple-400" />
								<span>50 AI portraits per month</span>
							</div>
							<div className="flex items-center gap-2">
								<Sparkles className="h-4 w-4 text-purple-400" />
								<span>30 premium styles</span>
							</div>
							<div className="flex items-center gap-2">
								<Sparkles className="h-4 w-4 text-purple-400" />
								<span>High resolution downloads</span>
							</div>
						</div>
						<Button className="sm:ml-auto gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
							Upgrade Now <ArrowRight className="h-4 w-4" />
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
