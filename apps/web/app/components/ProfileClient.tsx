"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Loader2, Camera, Save } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const ProfileClient = () => {
	const router = useRouter();
	const [isSaving, setIsSaving] = useState(false);
	const [profileData, setProfileData] = useState({
		name: "",
		email: "",
		username: "",
		bio: "",
	});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setProfileData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSaveProfile = async () => {
		setIsSaving(true);
		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1000));
		setIsSaving(false);
		// In a real app, you would update the user profile here
	};

	const getInitials = (name: string) => {
		return name
			.split(" ")
			.map((n) => n[0])
			.join("")
			.toUpperCase();
	};

	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold tracking-tight">Profile</h1>
				<p className="text-gray-500">
					Manage your account settings and preferences
				</p>
			</div>

			<Tabs
				defaultValue="general"
				className="space-y-4"
			>
				<TabsList>
					<TabsTrigger value="general">General</TabsTrigger>
					<TabsTrigger value="appearance">Appearance</TabsTrigger>
					<TabsTrigger value="notifications">Notifications</TabsTrigger>
					<TabsTrigger value="security">Security</TabsTrigger>
				</TabsList>

				<TabsContent
					value="general"
					className="space-y-4"
				>
					<Card className="bg-gray-900/50 border-gray-800 shadow-xl">
						<CardHeader>
							<CardTitle>Profile Information</CardTitle>
							<CardDescription>
								Update your personal information and public profile
							</CardDescription>
						</CardHeader>
						{/* <CardContent className="space-y-6">
							<div className="flex flex-col sm:flex-row gap-6 items-start">
								
								<div className="space-y-1 flex-1">
									<h3 className="font-medium text-lg">{user.name}</h3>
									<p className="text-sm text-gray-500">
										{user.plan === "free"
											? "Free Plan"
											: user.plan === "pro"
												? "Pro Plan"
												: "Business Plan"}
									</p>
									<p className="text-sm text-gray-500">
										Member since {new Date().toLocaleDateString()}
									</p>
								</div>
							</div>

							<div className="grid gap-4 md:grid-cols-2">
								<div className="space-y-2">
									<Label htmlFor="name">Full Name</Label>
									<Input
										id="name"
										name="name"
										value={profileData.name}
										onChange={handleInputChange}
										className="bg-gray-800 border-gray-700"
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										name="email"
										type="email"
										value={profileData.email}
										onChange={handleInputChange}
										className="bg-gray-800 border-gray-700"
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="username">Username</Label>
									<Input
										id="username"
										name="username"
										value={profileData.username}
										onChange={handleInputChange}
										className="bg-gray-800 border-gray-700"
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="bio">Bio</Label>
									<Input
										id="bio"
										name="bio"
										value={profileData.bio}
										onChange={handleInputChange}
										className="bg-gray-800 border-gray-700"
									/>
								</div>
							</div>
						</CardContent> */}
						<CardFooter className="flex justify-end">
							<Button
								onClick={handleSaveProfile}
								disabled={isSaving}
								className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
							>
								{isSaving ? (
									<>
										<Loader2 className="h-4 w-4 animate-spin" /> Saving...
									</>
								) : (
									<>
										<Save className="h-4 w-4" /> Save Changes
									</>
								)}
							</Button>
						</CardFooter>
					</Card>

					<Card className="bg-gray-900/50 border-gray-800 shadow-xl">
						<CardHeader>
							<CardTitle>Connected Accounts</CardTitle>
							<CardDescription>
								Connect your accounts for a seamless experience
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							{[
								{ name: "Google", connected: true },
								{ name: "Facebook", connected: false },
								{ name: "Twitter", connected: false },
								{ name: "Instagram", connected: true },
							].map((account) => (
								<div
									key={account.name}
									className="flex items-center justify-between"
								>
									<div className="flex items-center gap-3">
										<div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center">
											{account.name.charAt(0)}
										</div>
										<div>
											<p className="font-medium">{account.name}</p>
											<p className="text-sm text-gray-500">
												{account.connected ? "Connected" : "Not connected"}
											</p>
										</div>
									</div>
									<Button
										variant={account.connected ? "outline" : "default"}
										className={
											account.connected
												? "border-gray-700 hover:bg-gray-800"
												: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
										}
									>
										{account.connected ? "Disconnect" : "Connect"}
									</Button>
								</div>
							))}
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent
					value="appearance"
					className="space-y-4"
				>
					<Card className="bg-gray-900/50 border-gray-800 shadow-xl">
						<CardHeader>
							<CardTitle>Appearance</CardTitle>
							<CardDescription>
								Customize how PhotoAI looks on your device
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-2">
								<Label>Theme</Label>
								<div className="grid grid-cols-3 gap-4">
									{[
										{ name: "Light", value: "light" },
										{ name: "Dark", value: "dark", selected: true },
										{ name: "System", value: "system" },
									].map((theme) => (
										<div
											key={theme.value}
											className={`flex flex-col items-center gap-2 p-4 rounded-lg border cursor-pointer ${
												theme.selected
													? "border-purple-600 bg-purple-900/20"
													: "border-gray-700 hover:border-gray-600"
											}`}
										>
											<div
												className={`h-12 w-full rounded-md ${
													theme.value === "light"
														? "bg-gray-200"
														: "bg-gray-800"
												}`}
											></div>
											<span
												className={
													theme.selected ? "text-purple-400" : "text-gray-400"
												}
											>
												{theme.name}
											</span>
										</div>
									))}
								</div>
							</div>
						</CardContent>
						<CardFooter className="flex justify-end">
							<Button className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
								<Save className="h-4 w-4" /> Save Preferences
							</Button>
						</CardFooter>
					</Card>
				</TabsContent>

				<TabsContent
					value="notifications"
					className="space-y-4"
				>
					<Card className="bg-gray-900/50 border-gray-800 shadow-xl">
						<CardHeader>
							<CardTitle>Notification Preferences</CardTitle>
							<CardDescription>
								Manage how you receive notifications
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							{[
								{
									name: "New portrait generation completed",
									email: true,
									push: true,
								},
								{
									name: "Model training status updates",
									email: true,
									push: false,
								},
								{ name: "Account updates", email: true, push: false },
								{ name: "Marketing and promotions", email: false, push: false },
							].map((notification, index) => (
								<div
									key={index}
									className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-2"
								>
									<div>
										<p className="font-medium">{notification.name}</p>
									</div>
									<div className="flex items-center gap-4">
										<div className="flex items-center gap-2">
											<input
												type="checkbox"
												id={`email-${index}`}
												defaultChecked={notification.email}
												className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-purple-600 focus:ring-purple-600"
											/>
											<Label
												htmlFor={`email-${index}`}
												className="text-sm"
											>
												Email
											</Label>
										</div>
										<div className="flex items-center gap-2">
											<input
												type="checkbox"
												id={`push-${index}`}
												defaultChecked={notification.push}
												className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-purple-600 focus:ring-purple-600"
											/>
											<Label
												htmlFor={`push-${index}`}
												className="text-sm"
											>
												Push
											</Label>
										</div>
									</div>
								</div>
							))}
						</CardContent>
						<CardFooter className="flex justify-end">
							<Button className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
								<Save className="h-4 w-4" /> Save Preferences
							</Button>
						</CardFooter>
					</Card>
				</TabsContent>

				<TabsContent
					value="security"
					className="space-y-4"
				>
					<Card className="bg-gray-900/50 border-gray-800 shadow-xl">
						<CardHeader>
							<CardTitle>Change Password</CardTitle>
							<CardDescription>
								Update your password to keep your account secure
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="current-password">Current Password</Label>
								<Input
									id="current-password"
									type="password"
									placeholder="••••••••"
									className="bg-gray-800 border-gray-700"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="new-password">New Password</Label>
								<Input
									id="new-password"
									type="password"
									placeholder="••••••••"
									className="bg-gray-800 border-gray-700"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="confirm-password">Confirm New Password</Label>
								<Input
									id="confirm-password"
									type="password"
									placeholder="••••••••"
									className="bg-gray-800 border-gray-700"
								/>
							</div>
						</CardContent>
						<CardFooter className="flex justify-end">
							<Button className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
								<Save className="h-4 w-4" /> Update Password
							</Button>
						</CardFooter>
					</Card>

					<Card className="bg-gray-900/50 border-gray-800 shadow-xl">
						<CardHeader>
							<CardTitle>Two-Factor Authentication</CardTitle>
							<CardDescription>
								Add an extra layer of security to your account
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
								<div>
									<p className="font-medium">Two-Factor Authentication</p>
									<p className="text-sm text-gray-500">
										Protect your account with 2FA
									</p>
								</div>
								<Button
									variant="outline"
									className="border-gray-700 hover:bg-gray-800 sm:w-auto w-full"
								>
									Enable
								</Button>
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
};
export default ProfileClient;
