import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ModelsList } from "@/components/models/model-list";

export const metadata: Metadata = {
	title: "Models | PhotoAI",
	description: "Manage your AI models for portrait generation",
};

export default function ModelsPage() {
	return (
		<div className="space-y-6">
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Models</h1>
					<p className="text-gray-500">
						Manage your AI models for portrait generation
					</p>
				</div>
				<Link href="/dashboard/models/create">
					<Button className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
						<Plus className="h-4 w-4" /> Create Model
					</Button>
				</Link>
			</div>

			<div className="flex flex-col items-center justify-center p-8 bg-gray-900/50 border border-gray-800 rounded-lg">
				<p className="text-gray-400 mb-4">
					No models found. Create your first model to get started.
				</p>
				<Link href="/dashboard/models/create">
					<Button className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
						<Plus className="h-4 w-4" /> Create Model
					</Button>
				</Link>
			</div>
			<ModelsList />
		</div>
	);
}
