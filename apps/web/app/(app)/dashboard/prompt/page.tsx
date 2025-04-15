import type { Metadata } from "next";
import PromptClient from "@/components/PromptClient";

export const metadata: Metadata = {
	title: "Text to Image | PhotoAI",
	description: "Generate AI portraits using text prompts",
};

const Prompt = () => {
	return <PromptClient />;
};

export default Prompt;
