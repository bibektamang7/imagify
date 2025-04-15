"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import {
	ModelTypeEnum,
	EthnecityEnum,
	EyeColorEnum,
	type ModelFormData,
} from "@/types/model";

export function CreateModelForm() {
	const router = useRouter();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formData, setFormData] = useState<ModelFormData>({
		name: "",
		type: ModelTypeEnum.Portrait,
		age: 25,
		ethnicity: EthnecityEnum.Caucasian,
		eyeColor: EyeColorEnum.Brown,
		bald: false,
		triggerWord: "",
		zipUrl: "",
		open: false,
	});
	const [errors, setErrors] = useState<
		Partial<Record<keyof ModelFormData, string>>
	>({});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		// Clear error when field is edited
		if (errors[name as keyof ModelFormData]) {
			setErrors((prev) => ({ ...prev, [name]: undefined }));
		}
	};

	const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: Number.parseInt(value) || 0 }));
		// Clear error when field is edited
		if (errors[name as keyof ModelFormData]) {
			setErrors((prev) => ({ ...prev, [name]: undefined }));
		}
	};

	const handleSelectChange = (name: string, value: string) => {
		setFormData((prev) => ({ ...prev, [name]: value }));
		// Clear error when field is edited
		if (errors[name as keyof ModelFormData]) {
			setErrors((prev) => ({ ...prev, [name]: undefined }));
		}
	};

	const handleSwitchChange = (name: string, checked: boolean) => {
		setFormData((prev) => ({ ...prev, [name]: checked }));
	};

	const validateForm = (): boolean => {
		const newErrors: Partial<Record<keyof ModelFormData, string>> = {};

		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
		}

		if (formData.age < 18 || formData.age > 100) {
			newErrors.age = "Age must be between 18 and 100";
		}

		if (!formData.zipUrl.trim()) {
			newErrors.zipUrl = "ZIP URL is required";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		setIsSubmitting(true);

		try {
			// In a real app, you would submit the form data to your API
			console.log("Submitting model data:", formData);

			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1500));

			// Redirect to models page
			router.push("/dashboard/models");
		} catch (error) {
			console.error("Error creating model:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<Card className="bg-gray-900/50 border-gray-800 shadow-xl">
			<CardHeader>
				<CardTitle>Create New Model</CardTitle>
			</CardHeader>
			<form onSubmit={handleSubmit}>
				<CardContent className="space-y-6">
					<div className="space-y-4">
						{/* Name */}
						<div className="space-y-2">
							<Label htmlFor="name">
								Model Name <span className="text-red-500">*</span>
							</Label>
							<Input
								id="name"
								name="name"
								placeholder="Enter model name"
								value={formData.name}
								onChange={handleInputChange}
								className="bg-gray-800 border-gray-700"
							/>
							{errors.name && (
								<p className="text-red-500 text-sm">{errors.name}</p>
							)}
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{/* Type */}
							<div className="space-y-2">
								<Label htmlFor="type">
									Model Type <span className="text-red-500">*</span>
								</Label>
								<Select
									value={formData.type}
									onValueChange={(value) => handleSelectChange("type", value)}
								>
									<SelectTrigger
										id="type"
										className="bg-gray-800 border-gray-700"
									>
										<SelectValue placeholder="Select model type" />
									</SelectTrigger>
									<SelectContent>
										{Object.values(ModelTypeEnum).map((type) => (
											<SelectItem
												key={type}
												value={type}
											>
												{type}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>

							{/* Age */}
							<div className="space-y-2">
								<Label htmlFor="age">
									Age <span className="text-red-500">*</span>
								</Label>
								<Input
									id="age"
									name="age"
									type="number"
									min={18}
									max={100}
									value={formData.age}
									onChange={handleNumberChange}
									className="bg-gray-800 border-gray-700"
								/>
								{errors.age && (
									<p className="text-red-500 text-sm">{errors.age}</p>
								)}
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{/* Ethnicity */}
							<div className="space-y-2">
								<Label htmlFor="ethnicity">
									Ethnicity <span className="text-red-500">*</span>
								</Label>
								<Select
									value={formData.ethnicity}
									onValueChange={(value) =>
										handleSelectChange("ethnicity", value)
									}
								>
									<SelectTrigger
										id="ethnicity"
										className="bg-gray-800 border-gray-700"
									>
										<SelectValue placeholder="Select ethnicity" />
									</SelectTrigger>
									<SelectContent>
										{Object.values(EthnecityEnum).map((ethnicity) => (
											<SelectItem
												key={ethnicity}
												value={ethnicity}
											>
												{ethnicity}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>

							{/* Eye Color */}
							<div className="space-y-2">
								<Label htmlFor="eyeColor">
									Eye Color <span className="text-red-500">*</span>
								</Label>
								<Select
									value={formData.eyeColor}
									onValueChange={(value) =>
										handleSelectChange("eyeColor", value)
									}
								>
									<SelectTrigger
										id="eyeColor"
										className="bg-gray-800 border-gray-700"
									>
										<SelectValue placeholder="Select eye color" />
									</SelectTrigger>
									<SelectContent>
										{Object.values(EyeColorEnum).map((eyeColor) => (
											<SelectItem
												key={eyeColor}
												value={eyeColor}
											>
												{eyeColor}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
						</div>

						{/* ZIP URL */}
						<div className="space-y-2">
							<Label htmlFor="zipUrl">
								ZIP URL <span className="text-red-500">*</span>
							</Label>
							<Input
								id="zipUrl"
								name="zipUrl"
								placeholder="Enter ZIP file URL"
								value={formData.zipUrl}
								onChange={handleInputChange}
								className="bg-gray-800 border-gray-700"
							/>
							{errors.zipUrl && (
								<p className="text-red-500 text-sm">{errors.zipUrl}</p>
							)}
							<p className="text-xs text-gray-500">
								URL to the ZIP file containing model data
							</p>
						</div>

						{/* Trigger Word */}
						<div className="space-y-2">
							<Label htmlFor="triggerWord">Trigger Word (Optional)</Label>
							<Input
								id="triggerWord"
								name="triggerWord"
								placeholder="Enter trigger word"
								value={formData.triggerWord || ""}
								onChange={handleInputChange}
								className="bg-gray-800 border-gray-700"
							/>
							<p className="text-xs text-gray-500">
								A unique word to identify this model in prompts
							</p>
						</div>

						{/* Bald */}
						<div className="flex items-center space-x-2">
							<Switch
								id="bald"
								checked={formData.bald}
								onCheckedChange={(checked) =>
									handleSwitchChange("bald", checked)
								}
							/>
							<Label htmlFor="bald">Bald</Label>
						</div>

						{/* Open */}
						<div className="flex items-center space-x-2">
							<Switch
								id="open"
								checked={formData.open}
								onCheckedChange={(checked) =>
									handleSwitchChange("open", checked)
								}
							/>
							<Label htmlFor="open">Make model publicly available</Label>
						</div>
					</div>
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button
						type="button"
						variant="outline"
						onClick={() => router.back()}
						className="border-gray-700 hover:bg-gray-800"
					>
						Cancel
					</Button>
					<Button
						type="submit"
						disabled={isSubmitting}
						className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
					>
						{isSubmitting ? (
							<>
								<Loader2 className="h-4 w-4 animate-spin" /> Creating...
							</>
						) : (
							"Create Model"
						)}
					</Button>
				</CardFooter>
			</form>
		</Card>
	);
}
