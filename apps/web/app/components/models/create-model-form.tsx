"use client";

import type React from "react";
import { useRef, useState } from "react";
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
import { CloudUpload, Loader2 } from "lucide-react";
import {
	ModelTypeEnum,
	EthnecityEnum,
	EyeColorEnum,
	type ModelFormData,
} from "@/types/model";
import { getSignedUrl, uploadFiles } from "@/lib/api";
import JSZip from "jszip";

const CreateModelForm = () => {
	const router = useRouter();
	const fileRef = useRef<HTMLInputElement | null>(null);
	const [files, setFiles] = useState<File[]>([]);
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

	const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const fileArray = Array.from(e.target.files as FileList);
		setFiles((prev) => [...prev, ...fileArray]);
	};

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
			const signedResponse = await getSignedUrl();
			console.log(signedResponse);

			const zip = new JSZip();
			const fileNames: string[] = [];

			for (const file of files) {
				zip.file(file.name, await file.arrayBuffer());
				fileNames.push(file.name);
			}
			const content = await zip.generateAsync({ type: "blob" });
			await uploadFiles(signedResponse.data.url, content);

			router.push("/dashboard/models");
		} catch (error) {
			console.error("Error creating model:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleUploadFile = () => {
		fileRef.current?.click();
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

						<div className="space-y-2">
							<Label htmlFor="images">
								Images<span className="text-red-500">*</span>
							</Label>
							<p className="text-xs text-gray-500">minimum 15 images</p>

							<div
								onClick={handleUploadFile}
								className="hover:cursor-pointer w-full h-48 bg-gray-800 rounded-md flex items-center justify-center gap-2 flex-col"
							>
								<CloudUpload
									className=""
									size={24}
								/>
								<p className="text-gray-100">Upload a File</p>
								<span className="text-sm text-gray-400">
									Drag and drop files here
								</span>
							</div>
							<Input
								ref={fileRef}
								multiple
								min={15}
								max={20}
								type="file"
								id="images"
								onChange={handleFileInputChange}
								className="hidden"
							/>
							{files.length > 0 && <p>{files.length} images selected</p>}
							{errors.zipUrl && (
								<p className="text-red-500 text-sm">{errors.zipUrl}</p>
							)}
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
};
export default CreateModelForm;
