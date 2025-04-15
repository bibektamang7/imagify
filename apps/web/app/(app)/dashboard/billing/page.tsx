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
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { CreditCard, Download, Check, ArrowRight } from "lucide-react";

export default function BillingPage() {
	const router = useRouter();
	const [activeTab, setActiveTab] = useState("overview");

	// Mock data for billing
	const subscriptionData = {
		// plan: user.plan,
		status: "active",
		nextBillingDate: new Date(
			Date.now() + 15 * 24 * 60 * 60 * 1000
		).toLocaleDateString(),
		portraitsGenerated: 24,
		// portraitsLimit: user.plan === "free" ? 5 : user.plan === "pro" ? 50 : 1000,
		paymentMethod: {
			type: "card",
			last4: "4242",
			expiry: "04/25",
			brand: "Visa",
		},
	};

	const invoices = [
		{
			id: "INV-001",
			date: new Date(
				Date.now() - 30 * 24 * 60 * 60 * 1000
			).toLocaleDateString(),
			//   amount: user.plan === "free" ? "$0.00" : user.plan === "pro" ? "$19.00" : "$49.00",
			status: "paid",
		},
		{
			id: "INV-002",
			date: new Date(
				Date.now() - 60 * 24 * 60 * 60 * 1000
			).toLocaleDateString(),
			//   amount: user.plan === "free" ? "$0.00" : user.plan === "pro" ? "$19.00" : "$49.00",
			status: "paid",
		},
		{
			id: "INV-003",
			date: new Date(
				Date.now() - 90 * 24 * 60 * 60 * 1000
			).toLocaleDateString(),
			//   amount: user.plan === "free" ? "$0.00" : user.plan === "pro" ? "$19.00" : "$49.00",
			status: "paid",
		},
	];

	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold tracking-tight">Billing</h1>
				<p className="text-gray-500">
					Manage your subscription and payment methods
				</p>
			</div>

			<Tabs
				value={activeTab}
				onValueChange={setActiveTab}
				className="space-y-4"
			>
				<TabsList>
					<TabsTrigger value="overview">Overview</TabsTrigger>
					<TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
					<TabsTrigger value="invoices">Invoices</TabsTrigger>
				</TabsList>

				<TabsContent
					value="overview"
					className="space-y-4"
				>
					<Card className="bg-gray-900/50 border-gray-800 shadow-xl">
						<CardHeader>
							<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
								<div>
									<CardTitle>Subscription Plan</CardTitle>
									{/* <CardDescription>You are currently on the {user.plan} plan</CardDescription> */}
								</div>
								<Badge
									className={
										subscriptionData.status === "active"
											? "bg-green-600/20 text-green-400 hover:bg-green-600/30"
											: "bg-yellow-600/20 text-yellow-400 hover:bg-yellow-600/30"
									}
								>
									{subscriptionData.status === "active" ? "Active" : "Pending"}
								</Badge>
							</div>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
								<div className="space-y-2">
									<p className="text-sm text-gray-500">Current Plan</p>
									{/* <p className="font-medium text-lg capitalize">{user.plan} Plan</p> */}
								</div>
								<div className="space-y-2">
									<p className="text-sm text-gray-500">Next Billing Date</p>
									<p className="font-medium text-lg">
										{subscriptionData.nextBillingDate}
									</p>
								</div>
								<div className="space-y-2">
									<p className="text-sm text-gray-500">Monthly Price</p>
									{/* <p className="font-medium text-lg">
                    {user.plan === "free" ? "$0" : user.plan === "pro" ? "$19" : "$49"}
                  </p> */}
								</div>
							</div>

							<div className="space-y-2">
								<div className="flex items-center justify-between">
									{/* <p className="text-sm font-medium">
                    Portraits Generated: {subscriptionData.portraitsGenerated} / {subscriptionData.portraitsLimit}
                  </p> */}
									{/* <p className="text-sm text-gray-500">
                    {Math.round((subscriptionData.portraitsGenerated / subscriptionData.portraitsLimit) * 100)}%
                  </p> */}
								</div>
								<Progress
									//   value={(subscriptionData.portraitsGenerated / subscriptionData.portraitsLimit) * 100}
									className="h-2 bg-gray-800"
								/>
								{/* <p className="text-xs text-gray-500">
                  {subscriptionData.portraitsLimit - subscriptionData.portraitsGenerated} portraits remaining this month
                </p> */}
							</div>
						</CardContent>
						{/* <CardFooter className="flex flex-col sm:flex-row gap-4">
              {user.plan !== "business" && (
                <Button className="w-full sm:w-auto gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Upgrade Plan <ArrowRight className="h-4 w-4" />
                </Button>
              )}
              {user.plan !== "free" && (
                <Button variant="outline" className="w-full sm:w-auto border-gray-700 hover:bg-gray-800">
                  Cancel Subscription
                </Button>
              )} */}
						{/* </CardFooter> */}
					</Card>

					<div className="grid gap-4 md:grid-cols-3">
						<Card className="bg-gray-900/50 border-gray-800 shadow-xl">
							<CardHeader>
								<CardTitle>Free</CardTitle>
								<div className="mt-4 flex items-baseline text-gray-200">
									<span className="text-4xl font-extrabold tracking-tight">
										$0
									</span>
									<span className="ml-1 text-xl font-semibold text-gray-400">
										/month
									</span>
								</div>
							</CardHeader>
							<CardContent className="mt-2">
								<ul className="space-y-3">
									{[
										"5 AI portraits per month",
										"10 styles",
										"Standard resolution",
										"Basic editing tools",
										"24-hour generation time",
									].map((feature, i) => (
										<li
											key={i}
											className="flex items-center"
										>
											<Check
												className="h-4 w-4 text-purple-400 mr-3 flex-shrink-0"
												aria-hidden="true"
											/>
											<span className="text-gray-400 text-sm">{feature}</span>
										</li>
									))}
								</ul>
							</CardContent>
							{/* <CardFooter>
                <Button disabled={user.plan === "free"} className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                  {user.plan === "free" ? "Current Plan" : "Downgrade"}
                </Button>
              </CardFooter> */}
						</Card>

						<Card className="bg-gradient-to-b from-purple-900/20 to-gray-900/90 border-purple-800/50 shadow-xl shadow-purple-900/10 relative">
							<div
								className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-t-lg"
								aria-hidden="true"
							></div>
							<Badge className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
								Popular
							</Badge>
							<CardHeader>
								<CardTitle>Pro</CardTitle>
								<div className="mt-4 flex items-baseline text-gray-200">
									<span className="text-4xl font-extrabold tracking-tight">
										$19
									</span>
									<span className="ml-1 text-xl font-semibold text-gray-400">
										/month
									</span>
								</div>
							</CardHeader>
							<CardContent className="mt-2">
								<ul className="space-y-3">
									{[
										"50 AI portraits per month",
										"30 styles",
										"High resolution",
										"Advanced editing tools",
										"1-hour generation time",
										"Remove watermarks",
										"Priority support",
									].map((feature, i) => (
										<li
											key={i}
											className="flex items-center"
										>
											<Check
												className="h-4 w-4 text-purple-400 mr-3 flex-shrink-0"
												aria-hidden="true"
											/>
											<span className="text-gray-300 text-sm">{feature}</span>
										</li>
									))}
								</ul>
							</CardContent>
							{/* <CardFooter>
                <Button
                  disabled={user.plan === "pro"}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-900/20"
                >
                  {user.plan === "pro" ? "Current Plan" : user.plan === "free" ? "Upgrade" : "Downgrade"}
                </Button>
              </CardFooter> */}
						</Card>

						<Card className="bg-gray-900/50 border-gray-800 shadow-xl">
							<CardHeader>
								<CardTitle>Business</CardTitle>
								<div className="mt-4 flex items-baseline text-gray-200">
									<span className="text-4xl font-extrabold tracking-tight">
										$49
									</span>
									<span className="ml-1 text-xl font-semibold text-gray-400">
										/month
									</span>
								</div>
							</CardHeader>
							<CardContent className="mt-2">
								<ul className="space-y-3">
									{[
										"Unlimited AI portraits",
										"All 50+ styles",
										"Ultra-high resolution",
										"Professional editing suite",
										"Instant generation",
										"Commercial usage rights",
										"API access",
										"Dedicated support",
									].map((feature, i) => (
										<li
											key={i}
											className="flex items-center"
										>
											<Check
												className="h-4 w-4 text-purple-400 mr-3 flex-shrink-0"
												aria-hidden="true"
											/>
											<span className="text-gray-400 text-sm">{feature}</span>
										</li>
									))}
								</ul>
							</CardContent>
							{/* <CardFooter>
                <Button disabled={user.plan === "business"} className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                  {user.plan === "business" ? "Current Plan" : "Upgrade"}
                </Button>
              </CardFooter> */}
						</Card>
					</div>
				</TabsContent>

				<TabsContent
					value="payment-methods"
					className="space-y-4"
				>
					<Card className="bg-gray-900/50 border-gray-800 shadow-xl">
						<CardHeader>
							<CardTitle>Payment Methods</CardTitle>
							<CardDescription>Manage your payment methods</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-gray-800 rounded-lg">
								<div className="flex items-center gap-4">
									<div className="h-10 w-16 bg-gray-800 rounded-md flex items-center justify-center">
										<CreditCard className="h-6 w-6 text-gray-400" />
									</div>
									<div>
										<p className="font-medium">
											{subscriptionData.paymentMethod.brand} ••••{" "}
											{subscriptionData.paymentMethod.last4}
										</p>
										<p className="text-sm text-gray-500">
											Expires {subscriptionData.paymentMethod.expiry}
										</p>
									</div>
								</div>
								<Badge>Default</Badge>
							</div>
						</CardContent>
						<CardFooter>
							<Button className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
								<CreditCard className="h-4 w-4" /> Add Payment Method
							</Button>
						</CardFooter>
					</Card>
				</TabsContent>

				<TabsContent
					value="invoices"
					className="space-y-4"
				>
					<Card className="bg-gray-900/50 border-gray-800 shadow-xl">
						<CardHeader>
							<CardTitle>Invoices</CardTitle>
							<CardDescription>View and download your invoices</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{invoices.length === 0 ? (
									<div className="text-center py-4">
										<p className="text-gray-500">No invoices found</p>
									</div>
								) : (
									<div className="rounded-md border border-gray-800">
										<div className="grid grid-cols-4 gap-4 p-4 font-medium border-b border-gray-800">
											<div>Invoice</div>
											<div>Date</div>
											<div>Amount</div>
											<div>Status</div>
										</div>
										<div className="divide-y divide-gray-800">
											{invoices.map((invoice) => (
												<div
													key={invoice.id}
													className="grid grid-cols-4 gap-4 p-4 text-sm"
												>
													<div>{invoice.id}</div>
													<div>{invoice.date}</div>
													{/* <div>{invoice.amount}</div> */}
													<div>
														<Badge
															className={
																invoice.status === "paid"
																	? "bg-green-600/20 text-green-400 hover:bg-green-600/30"
																	: "bg-yellow-600/20 text-yellow-400 hover:bg-yellow-600/30"
															}
														>
															{invoice.status}
														</Badge>
													</div>
												</div>
											))}
										</div>
									</div>
								)}
							</div>
						</CardContent>
						<CardFooter>
							<Button
								variant="outline"
								className="gap-2 border-gray-700 hover:bg-gray-800"
							>
								<Download className="h-4 w-4" /> Download All
							</Button>
						</CardFooter>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
