"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Download, Share, Sparkles, Loader2, Wand2 } from "lucide-react";

const generateImageFromPrompt = async (
	prompt: string,
	style: string,
	settings: any
) => {
	console.log("Generating image with:", { prompt, style, settings });

	await new Promise((resolve) => setTimeout(resolve, 3000));

	return `/placeholder.svg?height=512&width=512&text=${encodeURIComponent(prompt.substring(0, 20))}...`;
};

const PromptClient = () => {
	const router = useRouter();
	const [prompt, setPrompt] = useState("");
	const [style, setStyle] = useState("realistic");
	const [settings, setSettings] = useState({
		creativity: 70,
		quality: 80,
	});
	const [isGenerating, setIsGenerating] = useState(false);
	const [generatedImages, setGeneratedImages] = useState<string[]>([]);
	const [activeTab, setActiveTab] = useState("prompt");

	const handleGenerate = async () => {
		if (!prompt) return;

		setIsGenerating(true);
		try {
			const imageUrl = await generateImageFromPrompt(prompt, style, settings);
			setGeneratedImages((prev) => [imageUrl, ...prev]);
			setActiveTab("results");
		} catch (error) {
			console.error("Error generating image:", error);
		} finally {
			setIsGenerating(false);
		}
	};

	const handleDownload = (imageUrl: string) => {
		console.log("Downloading image:", imageUrl);
	};

	const handleShare = (imageUrl: string) => {
		console.log("Sharing image:", imageUrl);
	};

	// Example prompts for inspiration
	const examplePrompts = [
		"A professional headshot of a woman with short blonde hair in a business suit",
		"A creative portrait of a man with a beard in dramatic lighting",
		"A vintage-style portrait of a person with a 1950s hairstyle",
		"An anime-style portrait of a character with blue hair and green eyes",
		"A cyberpunk portrait with neon lights and futuristic elements",
		"A fantasy portrait of a character with elven features and ornate jewelry",
	];

	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold tracking-tight">Text to Image</h1>
				<p className="text-gray-500">
					Generate AI portraits using text prompts
				</p>
			</div>

			<Tabs
				value={activeTab}
				onValueChange={setActiveTab}
				className="space-y-4"
			>
				<TabsList>
					<TabsTrigger value="prompt">Create Prompt</TabsTrigger>
					<TabsTrigger
						value="results"
						disabled={generatedImages.length === 0}
					>
						Results
					</TabsTrigger>
				</TabsList>

				<TabsContent
					value="prompt"
					className="space-y-4"
				>
					<Card className="bg-gray-900/50 border-gray-800 shadow-xl">
						<CardHeader>
							<CardTitle>Describe Your Portrait</CardTitle>
							<CardDescription>
								Be specific about appearance, style, lighting, and mood for best
								results
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="prompt">Prompt</Label>
								<Textarea
									id="prompt"
									placeholder="Describe the portrait you want to generate..."
									className="min-h-[120px] bg-gray-800 border-gray-700"
									value={prompt}
									onChange={(e) => setPrompt(e.target.value)}
								/>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="style">Style</Label>
									<Select
										value={style}
										onValueChange={setStyle}
									>
										<SelectTrigger
											id="style"
											className="bg-gray-800 border-gray-700"
										>
											<SelectValue placeholder="Select style" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="realistic">Realistic</SelectItem>
											<SelectItem value="artistic">Artistic</SelectItem>
											<SelectItem value="vintage">Vintage</SelectItem>
											<SelectItem value="anime">Anime</SelectItem>
											<SelectItem value="cyberpunk">Cyberpunk</SelectItem>
											<SelectItem value="fantasy">Fantasy</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div className="space-y-2">
									<Label htmlFor="ratio">Aspect Ratio</Label>
									<Select defaultValue="square">
										<SelectTrigger
											id="ratio"
											className="bg-gray-800 border-gray-700"
										>
											<SelectValue placeholder="Select aspect ratio" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="square">Square (1:1)</SelectItem>
											<SelectItem value="portrait">Portrait (3:4)</SelectItem>
											<SelectItem value="landscape">Landscape (4:3)</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>

							<div className="space-y-4">
								<div className="space-y-2">
									<div className="flex justify-between">
										<Label htmlFor="creativity">Creativity</Label>
										<span className="text-sm text-gray-400">
											{settings.creativity}%
										</span>
									</div>
									<Slider
										id="creativity"
										min={0}
										max={100}
										step={1}
										value={[settings.creativity]}
										onValueChange={(value) =>
											setSettings({ ...settings, creativity: value[0]! })
										}
										className="py-2"
									/>
								</div>

								<div className="space-y-2">
									<div className="flex justify-between">
										<Label htmlFor="quality">Quality</Label>
										<span className="text-sm text-gray-400">
											{settings.quality}%
										</span>
									</div>
									<Slider
										id="quality"
										min={0}
										max={100}
										step={1}
										value={[settings.quality]}
										onValueChange={(value) =>
											setSettings({ ...settings, quality: value[0]! })
										}
										className="py-2"
									/>
								</div>
							</div>

							<Button
								onClick={handleGenerate}
								disabled={!prompt || isGenerating}
								className="w-full gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-900/20"
							>
								{isGenerating ? (
									<>
										<Loader2 className="h-4 w-4 animate-spin" />
										Generating...
									</>
								) : (
									<>
										<Wand2 className="h-4 w-4" />
										Generate Portrait
									</>
								)}
							</Button>
						</CardContent>
					</Card>

					<Card className="bg-gray-900/50 border-gray-800 shadow-xl">
						<CardHeader>
							<CardTitle>Prompt Inspiration</CardTitle>
							<CardDescription>
								Click on any example to use it as a starting point
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
								{examplePrompts.map((examplePrompt, index) => (
									<Button
										key={index}
										variant="outline"
										className="h-auto py-3 px-4 justify-start text-left border-gray-700 hover:bg-gray-800 transition-all duration-300"
										onClick={() => setPrompt(examplePrompt)}
									>
										<Sparkles className="h-4 w-4 mr-2 flex-shrink-0 text-purple-400" />
										<span className="line-clamp-2 text-sm">
											{examplePrompt}
										</span>
									</Button>
								))}
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent
					value="results"
					className="space-y-4"
				>
					<Card className="bg-gray-900/50 border-gray-800 shadow-xl">
						<CardHeader>
							<CardTitle>Generated Portraits</CardTitle>
							<CardDescription>
								Your AI-generated portraits based on text prompts
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
								{generatedImages.map((image, index) => (
									<Card
										key={index}
										className="overflow-hidden bg-gray-900/50 border-gray-800 shadow-xl transition-all duration-300 hover:shadow-purple-900/10 hover:translate-y-[-5px]"
									>
										<CardContent className="p-0">
											<div className="relative group">
												<Image
													src={image || "/placeholder.svg"}
													alt={`Generated portrait ${index + 1}`}
													width={512}
													height={512}
													className="w-full h-auto object-cover"
												/>
												<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
													<div className="flex items-center justify-between mb-2">
														<Badge className="bg-purple-600/80">{style}</Badge>
														<span className="text-xs text-gray-400">
															Just now
														</span>
													</div>
													<div className="flex gap-2">
														<Button
															size="sm"
															variant="outline"
															className="w-full border-gray-700 bg-gray-800/50"
															onClick={() => handleDownload(image)}
														>
															<Download className="h-4 w-4 mr-1" /> Download
														</Button>
														<Button
															size="sm"
															variant="outline"
															className="w-full border-gray-700 bg-gray-800/50"
															onClick={() => handleShare(image)}
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

							{generatedImages.length > 0 && (
								<div className="mt-6 flex justify-center">
									<Button
										onClick={() => setActiveTab("prompt")}
										className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-900/20"
									>
										<Wand2 className="h-4 w-4" />
										Create Another Portrait
									</Button>
								</div>
							)}
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
};
export default PromptClient;
