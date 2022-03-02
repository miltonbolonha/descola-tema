import React from 'react'
import { graphql, Link } from 'gatsby'

import DescolaLogo from '../../static/images/descola-logo.svg'
import DescolaLogoDark from '../../static/images/descola-logo-dark.svg'

import Layout from '../modules/layout'
import FooterBlock from '../modules/block-builder/FooterBlock'

import PostsBlock from '../modules/block-builder/PostsBlock'

const TagsList = (props) => {
	const tagList = props.data.allMarkdownRemark.edges

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
					<h1>Posts da Tag: {props.pageContext.tag}</h1>
					<PostsBlock
						postList={tagList}
						postsPerPage={5}
						readMoreText="Mais Posts"
						pagination={{
							loadMoreBtn: true,
							loadMore: 'Carregar Mais',
						}}
					/>
					<Link to="/tags">All tags</Link>
				</main>
			</Layout>
			<FooterBlock
				placeholderImg={props.data.imgHolder}
				footerLogo={<DescolaLogoDark />}
				featurePosts={props.data.allMarkdownRemark.edges}
			/>
		</Layout>
	)
}
export const query = graphql`
	query TagsList($tag: String) {
		allMarkdownRemark(
			sort: { fields: frontmatter___date, order: DESC }
			filter: { frontmatter: { tags: { in: [$tag] } } }
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
					excerpt(pruneLength: 300)
				}
			}
		}
		imgHolder: file(relativePath: { eq: "placeholder700x300.png" }) {
			childrenImageSharp {
				gatsbyImageData(width: 76, height: 76, placeholder: NONE, quality: 100)
			}
		}
	}
`

export default TagsList
