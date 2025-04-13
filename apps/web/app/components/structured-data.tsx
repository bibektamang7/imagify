export function WebsiteStructuredData() {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "WebSite",
					name: "Imagify",
					url: "https://imagify.example.com",
					potentialAction: {
						"@type": "SearchAction",
						target: "https://imagify.example.com/search?q={search_term_string}",
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
					name: "Imagify",
					url: "https://imagify.example.com",
					logo: "https://imagify.example.com/logo.png",
					sameAs: [
						"https://twitter.com/imagify",
						"https://facebook.com/imagify",
						"https://instagram.com/imagify",
						"https://linkedin.com/company/imagify",
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
					name: "Imagify",
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
