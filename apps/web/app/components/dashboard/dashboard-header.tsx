"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
// import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User, Settings, CreditCard, Plus } from "lucide-react";

export function DashboardHeader() {
	const router = useRouter();
	//   const { user, signOut } = useAuth()

	//   const handleSignOut = () => {
	//     signOut()
	//     router.push("/")
	//   }

	const getInitials = (name: string) => {
		return name
			.split(" ")
			.map((n) => n[0])
			.join("")
			.toUpperCase();
	};

	//   if (!user) {
	//     return null
	//   }

	return (
		<header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm px-4 md:px-6 lg:px-8">
			<div className="flex flex-1 items-center justify-end">
				<div className="flex items-center gap-4">
					<Link href="/dashboard/generate">
						<Button className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
							<Plus className="h-4 w-4" /> New Portrait
						</Button>
					</Link>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="ghost"
								className="relative h-8 w-8 rounded-full"
							>
								<Avatar className="h-8 w-8">
									{/* <AvatarImage src={user.avatarUrl} alt={user.name} /> */}
									{/* <AvatarFallback>{getInitials(user.name)}</AvatarFallback> */}
								</Avatar>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							className="w-56"
							align="end"
							forceMount
						>
							<DropdownMenuLabel className="font-normal">
								<div className="flex flex-col space-y-1">
									{/* <p className="text-sm font-medium leading-none">{user.name}</p> */}
									{/* <p className="text-xs leading-none text-gray-500">{user.email}</p> */}
								</div>
							</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem asChild>
								<Link
									href="/dashboard/profile"
									className="cursor-pointer"
								>
									<User className="mr-2 h-4 w-4" />
									<span>Profile</span>
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link
									href="/dashboard/billing"
									className="cursor-pointer"
								>
									<CreditCard className="mr-2 h-4 w-4" />
									<span>Billing</span>
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link
									href="/dashboard/settings"
									className="cursor-pointer"
								>
									<Settings className="mr-2 h-4 w-4" />
									<span>Settings</span>
								</Link>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							{/* <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem> */}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</header>
	);
}
