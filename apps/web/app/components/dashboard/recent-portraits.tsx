import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Share, Eye } from "lucide-react";

interface OutputImageProps {
	id: string;
	imageUrl: string;
	modelId: string;
	userId: string;
	prompt: string;
	status: string;
	createdAt: Date;
	isDownloaded: boolean;
	tag: string;
}

interface RecentPortraitsProps {
	outputImages: OutputImageProps[];
}

export function RecentPortraits({ outputImages }: RecentPortraitsProps) {
	return (
		<>
			{outputImages.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{outputImages.map((portrait) => (
						<Card
							key={portrait.id}
							className="overflow-hidden bg-gray-900/50 border-gray-800 shadow-xl transition-all duration-300 hover:shadow-purple-900/10 hover:translate-y-[-5px]"
						>
							<CardContent className="p-0">
								<div className="relative group">
									<Image
										src={portrait.imageUrl || "/placeholder.svg"}
										alt={`${portrait.tag} portrait`}
										width={300}
										height={400}
										className="w-full h-auto object-cover aspect-[3/4]"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
										<div className="flex items-center justify-between mb-2">
											<Badge className="bg-purple-600/80">{portrait.tag}</Badge>
											<span className="text-xs text-gray-400">
												{portrait.createdAt.toDateString()}
											</span>
										</div>
										<div className="flex gap-2">
											<Button
												size="sm"
												variant="outline"
												className="w-full border-gray-700 bg-gray-800/50"
											>
												<Download className="h-4 w-4 mr-1" /> Download
											</Button>
											<Button
												size="sm"
												variant="outline"
												className="w-full border-gray-700 bg-gray-800/50"
											>
												<Share className="h-4 w-4 mr-1" /> Share
											</Button>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			) : (
				<div className="w-full text-center">No portraits yet.</div>
			)}
		</>
	);
}
