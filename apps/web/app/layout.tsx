import type React from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "./context/AuthContext";
import { Toaster } from "./components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: "Imagify - AI Portrait Generator | Transform Your Photos with AI",
		template: "%s | Imagify",
	},
	description:
		"Transform your ordinary photos into stunning AI portraits with 50+ professional styles. Create LinkedIn headshots, artistic portraits, and more in seconds.",
	keywords: [
		"AI portraits",
		"AI headshots",
		"profile pictures",
		"LinkedIn photos",
		"professional headshots",
		"AI photo generator",
		"portrait generator",
	],
	authors: [{ name: "Imagify" }],
	creator: "Imagify",
	publisher: "Imagify",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL("https://imagify.example.com"),
	alternates: {
		canonical: "/",
		languages: {
			"en-US": "/en-US",
		},
	},
	openGraph: {
		title: "Imagify - Transform Your Photos with AI",
		description:
			"Create stunning AI portraits in seconds. Upload your photo and get 50+ professional portraits in different styles.",
		url: "https://imagify.example.com",
		siteName: "Imagify",
		images: [
			{
				url: "https://imagify.example.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Imagify - AI Portrait Generator",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Imagify - Transform Your Photos with AI",
		description:
			"Create stunning AI portraits in seconds. Upload your photo and get 50+ professional portraits in different styles.",
		images: ["https://imagify.example.com/twitter-image.jpg"],
		creator: "@imagify",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "google-site-verification-code",
		yandex: "yandex-verification-code",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body className={`${inter.className} text-white`}>
				<AuthProvider>{children}</AuthProvider>
				<Toaster />
			</body>
		</html>
	);
}
