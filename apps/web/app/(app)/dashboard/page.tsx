import { prismaClient } from "db";
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
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getUserFromToken } from "@/lib/auth";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
	const decodedUser = await getUserFromToken();
	if (!decodedUser) {
		redirect("/sign-in");
	}
	const user = await prismaClient.user.findUnique({
		where: {
			id: decodedUser?.id,
		},
		select: {
			id: true,
			email: true,
		},
	});

	const outputImages = await prismaClient.outputImages.findMany({
		where: {
			userId: user?.id,
		},
	});

	const totalDownloads = outputImages.filter(
		(image) => image.isDownloaded === true
	);
	//TODO: Login to find favorite style

	return (
		<ScrollArea className="space-y-8">
			<div>
				<h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
			</div>

			<StatsCards
				totalDownloads={totalDownloads.length}
				totalPortraits={outputImages.length}
				remainingCredits={0}
				favoriteStyle="none"
				numberOfFavoriteStyle={0}
			/>

			<Tabs
				defaultValue="recent"
				className="space-y-4"
			>
				<TabsList className="mt-4">
					<TabsTrigger
						value="recent"
						className="hover:cursor-pointer"
					>
						Recent Portraits
					</TabsTrigger>
					<TabsTrigger
						value="popular"
						className="hover:cursor-pointer"
					>
						Popular Styles
					</TabsTrigger>
				</TabsList>
				<TabsContent
					value="recent"
					className="space-y-4"
				>
					<RecentPortraits outputImages={outputImages} />
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
		</ScrollArea>
	);
};

export default DashboardPage;
