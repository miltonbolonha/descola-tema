import React from 'react'
import { graphql, Link } from 'gatsby'

import DescolaLogo from '../../static/images/descola-logo.svg'
import DescolaLogoDark from '../../static/images/descola-logo-dark.svg'

import Layout from '../modules/layout'
import FooterBlock from '../modules/block-builder/FooterBlock'

// import PostCard from '../modules/block-builder/PostCard'
import PostsBlock from '../modules/block-builder/PostsBlock'

const TagsList = (props) => {
	const tagList = props.data.allMarkdownRemark.edges

	const { currentPage, numPages } = props.pageContext
	const isFirst = currentPage === 1
	const isLast = currentPage === numPages
	const prevPage = currentPage - 1 === 1 ? '/blog' : `/page/${currentPage - 1}`
	const nextPage = `/page/${currentPage + 1}`
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
					<h1>Posts da Tag: {}</h1>
					<div className="post-cards-wrapper">
						<PostsBlock
							postList={tagList}
							currentPage={currentPage}
							numPages={numPages}
							isFirst={isFirst}
							prevPage={prevPage}
							isLast={isLast}
							nextPage={nextPage}
						/>
					</div>
					<Link to="/tags">All tags</Link>
				</main>
			</Layout>
			<FooterBlock
				placeholderImg={props.data.imgHolder}
				footerLogo={<DescolaLogoDark />}
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
			totalCount
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
