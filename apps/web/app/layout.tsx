import type React from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: "PhotoAI - AI Portrait Generator | Transform Your Photos with AI",
		template: "%s | PhotoAI",
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
	authors: [{ name: "PhotoAI" }],
	creator: "PhotoAI",
	publisher: "PhotoAI",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL("https://photoai.example.com"),
	alternates: {
		canonical: "/",
		languages: {
			"en-US": "/en-US",
		},
	},
	openGraph: {
		title: "PhotoAI - Transform Your Photos with AI",
		description:
			"Create stunning AI portraits in seconds. Upload your photo and get 50+ professional portraits in different styles.",
		url: "https://photoai.example.com",
		siteName: "PhotoAI",
		images: [
			{
				url: "https://photoai.example.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "PhotoAI - AI Portrait Generator",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "PhotoAI - Transform Your Photos with AI",
		description:
			"Create stunning AI portraits in seconds. Upload your photo and get 50+ professional portraits in different styles.",
		images: ["https://photoai.example.com/twitter-image.jpg"],
		creator: "@photoai",
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
			<body className={inter.className}>{children}</body>
		</html>
	);
}
