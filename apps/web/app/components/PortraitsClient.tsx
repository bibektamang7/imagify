"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Share, Search, Filter } from "lucide-react";
import { OutputImageProps } from "@/types/outputImage";
import { getPortraits } from "@/lib/api";

interface PortraitsClientProps {
	portraits: OutputImageProps[];
}

const PortraitsClient = ({ portraits }: PortraitsClientProps) => {
	const [images, setImages] = useState(portraits);
	const [isImageLoading, setIsImageLoading] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredPortraits, setFilteredPortraits] = useState<
		OutputImageProps[]
	>([]);

	const userFilteredPortraits = () => {
		const porttraitsFiltered = images.filter(
			(image) => image.tag === searchQuery
		);
		setFilteredPortraits(porttraitsFiltered);
	};

	const fetchImages = async () => {
		setIsImageLoading(true);
		const response = await getPortraits();

		if (response.success) {
			setImages(response.data.images);
		}
		setIsImageLoading(false);
	};
	useEffect(() => {
		userFilteredPortraits();
	}, [searchQuery]);

	useEffect(() => {
		fetchImages();
	}, []);
	return (
		<div className="space-y-6">
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">My Portraits</h1>
					<p className="text-gray-500">
						Browse and manage your AI-generated portraits
					</p>
				</div>
				<div className="flex items-center gap-2">
					<div className="relative">
						<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
						<Input
							type="search"
							placeholder="Search portraits..."
							className="pl-8 bg-gray-800 border-gray-700 w-full sm:w-[200px] md:w-[300px]"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</div>
					<Button
						variant="outline"
						size="icon"
						className="border-gray-700"
					>
						<Filter className="h-4 w-4" />
						<span className="sr-only">Filter</span>
					</Button>
				</div>
			</div>

			<Tabs
				defaultValue="all"
				className="space-y-4"
			>
				<TabsList>
					<TabsTrigger value="all">All Portraits</TabsTrigger>
					<TabsTrigger value="professional">Professional</TabsTrigger>
					<TabsTrigger value="artistic">Artistic</TabsTrigger>
					<TabsTrigger value="other">Other Styles</TabsTrigger>
				</TabsList>
				<TabsContent
					value="all"
					className="space-y-4"
				>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{filteredPortraits.map((portrait) => (
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
												<Badge className="bg-purple-600/80">
													{portrait.tag}
												</Badge>
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
				</TabsContent>
				<TabsContent
					value="professional"
					className="space-y-4"
				>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{filteredPortraits
							.filter((portrait) => portrait.tag === "Professional")
							.map((portrait) => (
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
													<Badge className="bg-purple-600/80">
														{portrait.tag}
													</Badge>
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
				</TabsContent>
				<TabsContent
					value="artistic"
					className="space-y-4"
				>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{filteredPortraits
							.filter((portrait) => portrait.tag === "Artistic")
							.map((portrait) => (
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
													<Badge className="bg-purple-600/80">
														{portrait.tag}
													</Badge>
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
				</TabsContent>
				<TabsContent
					value="other"
					className="space-y-4"
				>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{filteredPortraits
							.filter(
								(portrait) =>
									portrait.tag !== "Professional" && portrait.tag !== "Artistic"
							)
							.map((portrait) => (
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
													<Badge className="bg-purple-600/80">
														{portrait.tag}
													</Badge>
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
				</TabsContent>
			</Tabs>
		</div>
	);
};
export default PortraitsClient;
