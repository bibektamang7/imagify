import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/generate/results", "/api/"],
		},
		sitemap: "https://photoai.example.com/sitemap.xml",
	};
}
