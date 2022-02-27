import React from 'react'
import { graphql, Link } from 'gatsby'

import DescolaLogo from '../../static/images/descola-logo.svg'
import DescolaLogoDark from '../../static/images/descola-logo-dark.svg'

import Layout from '../modules/layout'
import FooterBlock from '../modules/block-builder/FooterBlock'

import PostCard from '../modules/block-builder/PostCard'

const BlogList = (props) => {
	const postList = props.data.allMarkdownRemark.edges

	const { currentPage, numPages } = props.pageContext
	const isFirst = currentPage === 1
	const isLast = currentPage === numPages
	const prevPage = currentPage - 1 === 1 ? '/blog' : `/page/${currentPage - 1}`
	const nextPage = `/page/${currentPage + 1}`
	console.log(postList)
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
					<div className="post-cards-wrapper">
						<Layout
							type="ROW"
							opt={{
								numColumns: 'auto-fit',
								classes: 'post-cards-row',
								widthColumns: 'minmax(290px, 1fr)',
							}}
						>
							{postList.map(
								(
									{
										node: {
											frontmatter: { title, featuredImage },
											fields: { slug },
											excerpt,
										},
									},
									i
								) => {
									let imgFeature = featuredImage
									const urlImageObj =
										imgFeature && typeof imgFeature === 'object'
											? true
											: !imgFeature && typeof imgFeature === 'string'
											? 'string'
											: false
									// if (!urlImageObj) {
									// 	imgFeature = featuredImage.slice(12)
									// }
									// console.log(imgFeature)
									return (
										<PostCard
											postImage={imgFeature}
											linkUrl={slug}
											title={title}
											excerpt={excerpt}
											readMoreText="Leia Mais"
											key={i}
										/>
									)
								}
							)}
							<p>
								{currentPage} de {numPages}
							</p>
						</Layout>
					</div>
				</main>
			</Layout>
			{!isFirst && <Link to={prevPage}>← página anterior</Link>}
			{!isLast && <Link to={nextPage}>próxima página →</Link>}
			<FooterBlock
				placeholderImg={props.data.imgHolder}
				footerLogo={<DescolaLogoDark />}
			/>
		</Layout>
	)
}
export const query = graphql`
	query BlogList($skip: Int!, $limit: Int!) {
		allMarkdownRemark(
			sort: { fields: frontmatter___date, order: DESC }
			limit: $limit
			skip: $skip
		) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
						title
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

export default BlogList
