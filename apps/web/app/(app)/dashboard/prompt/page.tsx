import type { Metadata } from "next";
import PromptClient from "@/components/PromptClient";
import { prismaClient } from "db";
import { getUserFromToken } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
	title: "Text to Image | PhotoAI",
	description: "Generate AI portraits using text prompts",
};

const Prompt = async () => {
	const user = await getUserFromToken();
	if (!user) {
		redirect("/sign-in");
	}
	const models = await prismaClient.model.findMany({
		where: {
			userId: user.id,
		},
	});

	return <PromptClient models={models} />;
};

export default Prompt;
