import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageIcon, Clock, Download, Star } from "lucide-react";

interface StatsCardsProps {
	totalPortraits: number;
	remainingCredits: number;
	totalDownloads: number;
	favoriteStyle: string;
	numberOfFavoriteStyle: number;
}

export function StatsCards({
	totalDownloads = 0,
	remainingCredits = 0,
	totalPortraits = 0,
	favoriteStyle = "none",
	numberOfFavoriteStyle = 0,
}: StatsCardsProps) {
	return (
		<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
			<Card className="bg-gray-900/50 border-gray-800 shadow-xl">
				<CardHeader className="flex flex-row items-center justify-between pb-2">
					<CardTitle className="text-sm font-medium">Total Portraits</CardTitle>
					<ImageIcon className="h-4 w-4 text-gray-500" />
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold">{totalPortraits}</div>
					{/* <p className="text-xs text-gray-500">+12 from last month</p> */}
				</CardContent>
			</Card>
			<Card className="bg-gray-900/50 border-gray-800 shadow-xl">
				<CardHeader className="flex flex-row items-center justify-between pb-2">
					<CardTitle className="text-sm font-medium">
						Remaining Credits
					</CardTitle>
					<Clock className="h-4 w-4 text-gray-500" />
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold">{remainingCredits}</div>
					{/* <p className="text-xs text-gray-500">Resets in 18 days</p> */}
				</CardContent>
			</Card>
			<Card className="bg-gray-900/50 border-gray-800 shadow-xl">
				<CardHeader className="flex flex-row items-center justify-between pb-2">
					<CardTitle className="text-sm font-medium">Downloads</CardTitle>
					<Download className="h-4 w-4 text-gray-500" />
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold">{totalDownloads}</div>
					{/* <p className="text-xs text-gray-500">+4 from last month</p> */}
				</CardContent>
			</Card>
			<Card className="bg-gray-900/50 border-gray-800 shadow-xl">
				<CardHeader className="flex flex-row items-center justify-between pb-2">
					<CardTitle className="text-sm font-medium">Favorite Style</CardTitle>
					<Star className="h-4 w-4 text-gray-500" />
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold">{favoriteStyle}</div>
					<p className="text-xs text-gray-500">
						{numberOfFavoriteStyle} portraits generated
					</p>
				</CardContent>
			</Card>
		</div>
	);
}
