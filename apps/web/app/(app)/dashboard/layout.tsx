import type React from "react";
import type { Metadata } from "next";
import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { ScrollArea } from "@/components/ui/scroll-area";

export const metadata: Metadata = {
	title: {
		default: "Dashboard | Imagify",
		template: "%s | Dashboard | Imagify",
	},
	description: "Manage your AI portraits and account settings",
};

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
			<DashboardNav />
			<ScrollArea className="flex-1 max-h-screen">
				<DashboardHeader />
				<main className="p-4 md:p-6 max-w-7xl mx-auto">{children}</main>
			</ScrollArea>
		</div>
	);
}
