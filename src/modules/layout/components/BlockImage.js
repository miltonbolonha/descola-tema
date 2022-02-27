import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { StaticImage } from 'gatsby-plugin-image'

const BlockImage = ({ opt }) => {
	const image =
		opt.queryCard && typeof opt.queryCard === 'object'
			? getImage(opt.queryCard.childrenImageSharp[0])
			: !opt.queryCard
			? console.log('uaiiii')
			: getImage(opt.queryCard)
	console.log(image)
	if (!image) {
		return null
	}
	return (
		<>
			{opt.hasLink ? (
				<>
					<Link to={opt.link}>
						<GatsbyImage
							image={image}
							alt={opt.alt}
							placeholder="NONE"
							critical="true"
							className={opt.classes}
						/>
					</Link>
				</>
			) : (
				<GatsbyImage
					image={image}
					alt={opt.alt}
					placeholder="NONE"
					critical="true"
					className={opt.classes}
				/>
			)}
		</>
	)
}

export default BlockImage
