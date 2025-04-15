"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	ModelTypeEnum,
	EthnecityEnum,
	EyeColorEnum,
	ModelTrainingStatusEnum,
} from "@/types/model";
import { Eye, Edit, Trash2, MoreHorizontal, Plus } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data for models
const mockModels = [
	{
		id: "1",
		name: "Professional Portrait",
		type: ModelTypeEnum.Portrait,
		age: 28,
		ethnicity: EthnecityEnum.Caucasian,
		eyeColor: EyeColorEnum.Blue,
		bald: false,
		triggerWord: "professional",
		thumbnail: "/placeholder.svg?height=300&width=300&text=Professional",
		trainingStatus: ModelTrainingStatusEnum.Completed,
		createdAt: new Date("2023-05-15"),
		open: true,
	},
	{
		id: "2",
		name: "Artistic Headshot",
		type: ModelTypeEnum.Headshot,
		age: 32,
		ethnicity: EthnecityEnum.Black,
		eyeColor: EyeColorEnum.Brown,
		bald: false,
		triggerWord: "artistic",
		thumbnail: "/placeholder.svg?height=300&width=300&text=Artistic",
		trainingStatus: ModelTrainingStatusEnum.Training,
		createdAt: new Date("2023-06-20"),
		open: false,
	},
	{
		id: "3",
		name: "Full Body Model",
		type: ModelTypeEnum.FullBody,
		age: 25,
		ethnicity: EthnecityEnum.Asian,
		eyeColor: EyeColorEnum.Brown,
		bald: false,
		triggerWord: "fullbody",
		thumbnail: "/placeholder.svg?height=300&width=300&text=FullBody",
		trainingStatus: ModelTrainingStatusEnum.Pending,
		createdAt: new Date("2023-07-05"),
		open: true,
	},
];

export function ModelsList() {
	const router = useRouter();
	const [models, setModels] = useState(mockModels);

	const handleDeleteModel = (id: string) => {
		setModels(models.filter((model) => model.id !== id));
	};

	const handleSelectModel = (name: string) => {
		router.push(`/dashboard/prompt?modelName=${name}`);
	};

	const getStatusColor = (status: ModelTrainingStatusEnum) => {
		switch (status) {
			case ModelTrainingStatusEnum.Completed:
				return "bg-green-600/80";
			case ModelTrainingStatusEnum.Training:
				return "bg-blue-600/80";
			case ModelTrainingStatusEnum.Pending:
				return "bg-yellow-600/80";
			case ModelTrainingStatusEnum.Failed:
				return "bg-red-600/80";
			default:
				return "bg-gray-600/80";
		}
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{models.length === 0 ? (
				<Card className="col-span-full bg-gray-900/50 border-gray-800 shadow-xl">
					<CardContent className="flex flex-col items-center justify-center p-6 text-center">
						<p className="text-gray-500 mb-4">No models found</p>
						<Button className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
							<Plus className="h-4 w-4" /> Create Model
						</Button>
					</CardContent>
				</Card>
			) : (
				models.map((model) => (
					<Card
						key={model.id}
						className="overflow-hidden bg-gray-900/50 border-gray-800 shadow-xl transition-all duration-300 hover:shadow-purple-900/10 hover:translate-y-[-5px] cursor-pointer"
						onClick={() => handleSelectModel(model.name)}
					>
						<CardContent className="p-0">
							<div className="relative">
								<Image
									src={
										model.thumbnail || "/placeholder.svg?height=300&width=300"
									}
									alt={model.name}
									width={300}
									height={300}
									className="w-full h-48 object-cover"
								/>
								<Badge
									className={`absolute top-2 right-2 ${getStatusColor(model.trainingStatus)}`}
								>
									{model.trainingStatus}
								</Badge>
								{model.open && (
									<Badge className="absolute top-2 left-2 bg-purple-600/80">
										Public
									</Badge>
								)}
							</div>

							<div className="p-4">
								<div className="flex items-center justify-between mb-2">
									<h3 className="font-medium truncate">{model.name}</h3>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button
												variant="ghost"
												size="icon"
												className="h-8 w-8"
												onClick={(e) => e.stopPropagation()} // Prevent card click when clicking dropdown
											>
												<MoreHorizontal className="h-4 w-4" />
												<span className="sr-only">Open menu</span>
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent
											align="end"
											className="bg-gray-900 border-gray-800"
										>
											<DropdownMenuLabel>Actions</DropdownMenuLabel>
											<DropdownMenuSeparator className="bg-gray-800" />
											<DropdownMenuItem
												className="cursor-pointer"
												onClick={(e) => {
													e.stopPropagation();
													handleSelectModel(model.id);
												}}
											>
												<Eye className="mr-2 h-4 w-4" /> Use Model
											</DropdownMenuItem>
											<DropdownMenuItem
												className="cursor-pointer"
												onClick={(e) => {
													e.stopPropagation();
													// Handle edit action
												}}
											>
												<Edit className="mr-2 h-4 w-4" /> Edit
											</DropdownMenuItem>
											<DropdownMenuSeparator className="bg-gray-800" />
											<DropdownMenuItem
												className="cursor-pointer text-red-500 focus:text-red-500"
												onClick={(e) => {
													e.stopPropagation();
													handleDeleteModel(model.id);
												}}
											>
												<Trash2 className="mr-2 h-4 w-4" /> Delete
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</div>

								<div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-400 mb-4">
									<div className="flex items-center">
										<span className="font-medium mr-1 text-gray-300">
											Type:
										</span>{" "}
										{model.type}
									</div>
									<div className="flex items-center">
										<span className="font-medium mr-1 text-gray-300">Age:</span>{" "}
										{model.age}
									</div>
									<div className="flex items-center">
										<span className="font-medium mr-1 text-gray-300">
											Ethnicity:
										</span>{" "}
										{model.ethnicity}
									</div>
									<div className="flex items-center">
										<span className="font-medium mr-1 text-gray-300">
											Eye Color:
										</span>{" "}
										{model.eyeColor}
									</div>
								</div>

								<div className="flex justify-between items-center">
									<span className="text-xs text-gray-500">
										Created {model.createdAt.toLocaleDateString()}
									</span>
									<Button
										size="sm"
										className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
										onClick={(e) => {
											e.stopPropagation();
											handleSelectModel(model.id);
										}}
									>
										Use Model
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>
				))
			)}
		</div>
	);
}
