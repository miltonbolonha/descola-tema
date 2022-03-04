import React from 'react'
import { graphql } from 'gatsby'

import DescolaLogo from '../../static/images/descola-logo.svg'
import DescolaLogoDark from '../../static/images/descola-logo-dark.svg'

import Layout from '../modules/layout'
import HeaderBlock from '../modules/block-builder/HeaderBlock'
import FooterBlock from '../modules/block-builder/FooterBlock'
import PostsBlock from '../modules/block-builder/PostsBlock'

const IndexPage = ({ data }) => {
	const posts = data.allMarkdownRemark.edges
	return (
		<Layout
			type="BODY"
			opt={{
				titleSeo: `Descola`,
				classes: 'blog-list',
			}}
		>
			<HeaderBlock logotipoSvg={<DescolaLogo />} />
			<Layout
				type="ROW"
				opt={{ isBoxed: true, classes: 'main-container-wrapper' }}
			>
				<main className="main-container">
					<h1>Posts</h1>

					<PostsBlock
						postsPerPage={data.site.siteMetadata.postsPerPage}
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
				featurePosts={data.footerThreeMarkdowRemark.edges}
				postsForTags={posts}
			/>
		</Layout>
	)
}
export default IndexPage

export const queryAtividade = graphql`
	query {
		site {
			siteMetadata {
				postsPerPage
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

		footerThreeMarkdowRemark: allMarkdownRemark(
			sort: { fields: frontmatter___date, order: DESC }
			filter: { frontmatter: { featuredPost: { eq: true } } }
		) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
						title
						tags
						footerFeaturedImage: featuredImage {
							childrenImageSharp {
								gatsbyImageData(
									width: 76
									height: 76
									placeholder: DOMINANT_COLOR
									quality: 70
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
