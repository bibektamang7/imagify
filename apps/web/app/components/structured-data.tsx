export function WebsiteStructuredData() {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "WebSite",
					name: "PhotoAI",
					url: "https://photoai.example.com",
					potentialAction: {
						"@type": "SearchAction",
						target: "https://photoai.example.com/search?q={search_term_string}",
						"query-input": "required name=search_term_string",
					},
				}),
			}}
		/>
	);
}

export function OrganizationStructuredData() {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Organization",
					name: "PhotoAI",
					url: "https://photoai.example.com",
					logo: "https://photoai.example.com/logo.png",
					sameAs: [
						"https://twitter.com/photoai",
						"https://facebook.com/photoai",
						"https://instagram.com/photoai",
						"https://linkedin.com/company/photoai",
					],
				}),
			}}
		/>
	);
}

export function SoftwareApplicationStructuredData() {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "SoftwareApplication",
					name: "PhotoAI",
					applicationCategory: "MultimediaApplication",
					offers: {
						"@type": "Offer",
						price: "0",
						priceCurrency: "USD",
					},
					aggregateRating: {
						"@type": "AggregateRating",
						ratingValue: "4.8",
						ratingCount: "1024",
					},
				}),
			}}
		/>
	);
}
