"use client";

import { useState } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Wand2 } from "lucide-react";
import { ModelSchema } from "@/types/model";
import { useSearchParams } from "next/navigation";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";

interface PromptClientProps {
	models: ModelSchema[];
}

const PromptClient = ({ models }: PromptClientProps) => {
	const searchParams = useSearchParams();
	const modelName = searchParams.get("modelName");
	const [selectedModelName, setSelectedModelName] = useState<string>(
		modelName || ""
	);
	const [prompt, setPrompt] = useState("");
	const [isGenerating, setIsGenerating] = useState(false);
	const [generatedImages, setGeneratedImages] = useState<string[]>([]);
	const [activeTab, setActiveTab] = useState("prompt");

	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold tracking-tight">Text to Image</h1>
				<p className="text-gray-500">
					Generate AI portraits using text prompts
				</p>
			</div>

			{models.length > 0 ? (
				<Select>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder={selectedModelName || "Select model"} />
					</SelectTrigger>
					<SelectContent className="text-white outline-none border-none">
						<SelectGroup>
							{models.map((model) => (
								<SelectItem
									key={model.id}
									value={model.name}
								>
									{model.name}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			) : (
				<span className="text-sm">No models yet.</span>
			)}
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

							<Button
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
				</TabsContent>
			</Tabs>
		</div>
	);
};
export default PromptClient;
