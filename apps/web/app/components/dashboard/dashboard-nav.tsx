"use client";

import type React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
	Sparkles,
	Grid,
	User,
	Settings,
	CreditCard,
	Menu,
	ImageIcon,
	Home,
} from "lucide-react";
import { useState } from "react";

interface NavItem {
	title: string;
	href: string;
	icon: React.ReactNode;
}

const navItems: NavItem[] = [
	{
		title: "Overview",
		href: "/dashboard",
		icon: <Grid className="h-4 w-4" />,
	},
	{
		title: "My Portraits",
		href: "/dashboard/portraits",
		icon: <ImageIcon className="h-4 w-4" />,
	},
	{
		title: "Prompt",
		href: "/dashboard/prompt",
		icon: <Sparkles className="h-4 w-4" />,
	},
	{
		title: "Profile",
		href: "/dashboard/profile",
		icon: <User className="h-4 w-4" />,
	},
	{
		title: "Billing",
		href: "/dashboard/billing",
		icon: <CreditCard className="h-4 w-4" />,
	},
	{
		title: "Settings",
		href: "/dashboard/settings",
		icon: <Settings className="h-4 w-4" />,
	},
];

export function DashboardNav() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	return (
		<>
			{/* Mobile Navigation */}
			<Sheet
				open={open}
				onOpenChange={setOpen}
			>
				<SheetTrigger
					asChild
					className="lg:hidden absolute left-4 top-4 z-50"
				>
					<Button
						variant="outline"
						size="icon"
						className="bg-gray-900/50 border-gray-800"
					>
						<Menu className="h-5 w-5" />
						<span className="sr-only">Toggle Menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent
					side="left"
					className="bg-gray-900 border-gray-800 p-0"
				>
					<div className="flex flex-col h-full">
						<div className="p-4 border-b border-gray-800">
							<Link
								href="/"
								className="flex items-center gap-2 font-bold text-xl"
								onClick={() => setOpen(false)}
							>
								<Sparkles className="h-6 w-6 text-purple-400" />
								<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
									Imagify
								</span>
							</Link>
						</div>
						<ScrollArea className="flex-1">
							<div className="p-4">
								<nav className="grid gap-2">
									<Link
										href="/"
										className="flex items-center gap-2 text-gray-400 hover:text-white px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
										onClick={() => setOpen(false)}
									>
										<Home className="h-4 w-4" />
										<span>Home</span>
									</Link>
									{navItems.map((item) => (
										<Link
											key={item.href}
											href={item.href}
											onClick={() => setOpen(false)}
											className={cn(
												"flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors",
												pathname === item.href
													? "bg-gray-800 text-white font-medium"
													: "text-gray-400 hover:text-white"
											)}
										>
											{item.icon}
											<span>{item.title}</span>
										</Link>
									))}
								</nav>
							</div>
						</ScrollArea>
					</div>
				</SheetContent>
			</Sheet>

			{/* Desktop Navigation */}
			<div className="hidden lg:flex flex-col w-64 border-r border-gray-800 bg-gray-900/50 backdrop-blur-sm lg:max-h-screen">
				<div className="px-6 py-4! border-b border-gray-800">
					<Link
						href="/"
						className="flex items-center gap-2 font-bold text-xl"
					>
						<Sparkles className="h-6 w-6 text-purple-400" />
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
							Imagify
						</span>
					</Link>
				</div>
				<ScrollArea className="flex-1 py-6">
					<nav className="grid gap-2 px-4">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									"flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors",
									pathname === item.href
										? "bg-gray-800 text-white font-medium"
										: "text-gray-400 hover:text-white"
								)}
							>
								{item.icon}
								<span>{item.title}</span>
							</Link>
						))}
					</nav>
				</ScrollArea>
			</div>
		</>
	);
}
