import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlockImage = ({ opt }) => {
	const image = getImage(opt.queryCard.childrenImageSharp[0])
	return (
		<>
			{opt.hasLink ? (
				<>
					<Link to={opt.link}>
						<GatsbyImage
							image={image}
							alt="Card"
							placeholder="NONE"
							critical="true"
							className={opt.classes}
						/>
					</Link>
				</>
			) : (
				<GatsbyImage
					image={image}
					alt="Card"
					placeholder="NONE"
					critical="true"
					className={opt.classes}
				/>
			)}
		</>
	)
}

export default BlockImage
