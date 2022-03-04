import React from 'react'
import { graphql } from 'gatsby'

import DescolaLogo from '../../static/images/descola-logo.svg'
import DescolaLogoDark from '../../static/images/descola-logo-dark.svg'

import Layout from '../modules/layout'
import FooterBlock from '../modules/block-builder/FooterBlock'
import HeaderBlock from '../modules/block-builder/HeaderBlock'

const SinglePost = ({ data }) => {
	const post = data.markdownRemark
	return (
		<Layout
			type="BODY"
			opt={{
				titleSeo: `Descola`,
				classes: 'single-post',
			}}
		>
			<HeaderBlock logotipoSvg={<DescolaLogo />} />
			<Layout
				type="ROW"
				opt={{
					isBoxed: false,
					classes: 'post-header',
					bgColor: '#111e24',
				}}
			>
				<header>
					<Layout type="ROW" opt={{ isBoxed: true, classes: 'post' }}>
						<div className="post-tags-wrapper">
							{post.frontmatter.tags.map((e, i) => {
								return (
									<p className="post-tags" key={i}>
										{e}
									</p>
								)
							})}
						</div>
						<h1>{post.frontmatter.title}</h1>
					</Layout>
				</header>
			</Layout>
			<Layout type="ROW" opt={{ isBoxed: true, classes: 'main-post' }}>
				<main>
					<div className="container">
						<div className="post-author">
							<Layout
								type="BLOCK_IMAGE"
								opt={{
									queryCard: data.imgHolder,
									alt: 'Descola Holder',
									classes: 'author-img',
								}}
							/>
							<div className="post-author-infos">
								<p className="post-author-date">{post.frontmatter.date}</p>
								<p className="post-author-name">{post.frontmatter.author}</p>
							</div>
						</div>
						<article dangerouslySetInnerHTML={{ __html: post.html }}></article>
					</div>
				</main>
			</Layout>
			<FooterBlock
				placeholderImg={data.imgHolder}
				footerLogo={<DescolaLogoDark />}
				featurePosts={data.allMarkdownRemark.edges}
			/>
		</Layout>
	)
}

export const query = graphql`
	query SinglePost($slug: String!) {
		site {
			siteMetadata {
				postsPerPage
			}
		}

		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
				author
				tags
				featuredPost
				featuredImage {
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
			html
			fields {
				slug
			}
		}

		imgHolder: file(relativePath: { eq: "descola-image.png" }) {
			childrenImageSharp {
				gatsbyImageData(width: 76, height: 76, placeholder: NONE, quality: 100)
			}
		}

		allMarkdownRemark(
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
									quality: 90
								)
							}
						}
					}
					excerpt(pruneLength: 200)
				}
			}
		}
	}
`

export default SinglePost
