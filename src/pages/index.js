import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'

import DescolaLogo from '../../static/images/descola-logo.svg'
import DescolaLogoDark from '../../static/images/descola-logo-dark.svg'

import Layout from '../modules/layout'

import FooterBlock from '../modules/block-builder/FooterBlock'
import PostsBlock from '../modules/block-builder/PostsBlock'

const IndexPage = ({ data }) => {
	const posts = data.allMarkdownRemark.edges
	const postsPerPage = 5
	return (
		<Layout
			type="BODY"
			opt={{
				titleSeo: `Descola`,
				classes: 'blog-list',
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
					<h1>Posts</h1>

					<PostsBlock
						postsPerPage={postsPerPage}
						postList={posts}
						typeLoad={'push'} // or false
						readMoreText="Mais Posts"
						pagination={{
							loadMoreBtn: true,
							loadMore: 'Carregar Mais',
						}}
					/>
				</main>
			</Layout>
			<FooterBlock
				placeholderImg={data.imgHolder}
				footerLogo={<DescolaLogoDark />}
			/>
		</Layout>
	)
}
export default IndexPage

export const queryAtividade = graphql`
	query {
		site {
			siteMetadata {
				title
				description
				siteUrl
				social {
					instagram
					facebook
					twitter
					youtube
				}
			}
		}

		allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
						title
						tags
						featuredImage {
							childrenImageSharp {
								gatsbyImageData(
									width: 350
									height: 224
									placeholder: DOMINANT_COLOR
									quality: 90
								)
							}
						}
					}
					excerpt(pruneLength: 200)
				}
			}
		}

		bgroom: file(relativePath: { eq: "bg-app-room.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(width: 301, placeholder: DOMINANT_COLOR, quality: 100)
			}
		}

		imgHolder: file(relativePath: { eq: "placeholder700x300.png" }) {
			childrenImageSharp {
				gatsbyImageData(width: 76, height: 76, placeholder: NONE, quality: 100)
			}
		}

		blogImgHolder: file(relativePath: { eq: "placeholder700x300.png" }) {
			childrenImageSharp {
				gatsbyImageData(
					width: 350
					height: 224
					placeholder: NONE
					quality: 100
				)
			}
		}
	}
`
