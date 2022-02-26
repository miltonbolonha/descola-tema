import React from 'react'
import { graphql } from 'gatsby'

import DescolaLogo from '../../static/images/descola-logo.svg'
import DescolaLogoDark from '../../static/images/descola-logo-dark.svg'

import Layout from '../modules/layout'
import FooterBlock from '../modules/block-builder/FooterBlock'

// import Layout from "../components/Layout"
// import SEO from "../components/seo"

// import * as S from "../styles/components/singlepost"

const SinglePost = ({ data }) => {
	const post = data.markdownRemark

	return (
		<Layout
			type="BODY"
			opt={{
				titleSeo: `Descola`,
			}}
		>
			<Layout
				type="HEADER"
				opt={{
					mainMenu: true,
					logoSvg: <DescolaLogo />,
				}}
			/>
			<Layout
				type="ROW"
				opt={{ isBoxed: true, classes: 'main-container-wrapper' }}
			>
				<main className="main-container">
					<p>
						<p>{post.frontmatter.title}</p>
						<p>{post.frontmatter.date}</p>
					</p>
					<p>
						<div dangerouslySetInnerHTML={{ __html: post.html }}></div>
					</p>
				</main>
			</Layout>

			<FooterBlock
				placeholderImg={data.imgHolder}
				footerLogo={DescolaLogoDark}
			/>
		</Layout>
	)
}

export const query = graphql`
	query SinglePost($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
				author
				tags
				featuredpost
				featuredimage
			}
			html
			fields {
				slug
			}
		}

		imgHolder: file(relativePath: { eq: "placeholder700x300.png" }) {
			childrenImageSharp {
				gatsbyImageData(width: 76, height: 76, placeholder: NONE, quality: 100)
			}
		}
	}
`

export default SinglePost
