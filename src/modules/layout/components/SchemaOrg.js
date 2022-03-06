import React from 'react'
import { Helmet } from 'react-helmet'

export default React.memo(
	({
		author,
		siteUrl,
		datePublished,
		defaultTitle,
		description,
		image,
		schemaType,
		organization,
		title,
		url,
		socialSameAs,
	}) => {
		const baseSchema = [
			{
				'@context': 'http://schema.org',
				'@type': 'School',
				url: url,
				name: title,
				logo: image,
				sameAs: [
					socialSameAs.instagram,
					socialSameAs.facebook,
					socialSameAs.linkedIn,
					socialSameAs.youtube,
				],
			},
		]

		const schema =
			schemaType === 'article'
				? [
						...baseSchema,
						// {
						// 	'@context': 'http://schema.org',
						// 	'@type': 'BlogPosting',
						// 	itemListElement: [
						// 		{
						// 			'@type': 'ListItem',
						// 			position: 1,
						// 			item: {
						// 				'@id': url,
						// 				name: title,
						// 				image,
						// 			},
						// 		},
						// 	],
						// },
						{
							'@context': 'http://schema.org',
							'@type': 'BlogPosting',
							name: title,
							alternateName: defaultTitle,
							headline: title,
							image: image,
							description: description,
							author: {
								'@type': 'Person',
								name: author.name,
							},
							publisher: {
								'@type': 'Organization',
								url: organization.url,
								name: organization.name,
								logo: {
									'@type': 'ImageObject',
									url: image,
								},
							},
							mainEntityOfPage: {
								'@type': 'WebSite',
								'@id': siteUrl,
							},
							datePublished: datePublished,
						},
				  ]
				: baseSchema

		return (
			<Helmet>
				{/* Schema.org tags */}
				<script type="application/ld+json">{JSON.stringify(schema)}</script>
			</Helmet>
		)
	}
)
