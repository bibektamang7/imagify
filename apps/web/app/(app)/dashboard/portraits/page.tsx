import PortraitsClient from "@/components/PortraitsClient";
import { getUserFromToken } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prismaClient } from "db";

async function getPortraits(userId: string) {
	try {
		const portraits = await prismaClient.outputImages.findMany({
			where: {
				userId,
			},
		});
		return portraits;
	} catch (error: any) {
		console.error("Error fetching portraits.");
		throw new Error("Failed to fetch packs.");
		// return [] option
	}
}

const Portraits = async () => {
	const decodedUser = await getUserFromToken();
	if (!decodedUser) {
		redirect("/sign-in");
	}

	const portraits = await getPortraits(decodedUser.id);

	return <PortraitsClient portraits={portraits} />;
};

export default Portraits;
