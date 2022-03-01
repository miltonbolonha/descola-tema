import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'

import DescolaLogo from '../../static/images/descola-logo.svg'
import DescolaLogoDark from '../../static/images/descola-logo-dark.svg'

import Layout from '../modules/layout'

import FooterBlock from '../modules/block-builder/FooterBlock'
import PostsBlock from '../modules/block-builder/PostsBlock'

const IndexPage = (props) => {
	const [currentFirstItem, setCurrentFirstItem] = useState(0)
	function handleCurrentFirstItem(current) {
		setCurrentFirstItem(current)
	}
	const posts = props.data.allMarkdownRemark.edges
	const postsPerPage = 5
	let currentPage = 1

	const numPages = Math.ceil(posts.length / postsPerPage)
	const isFirst = currentPage === 1
	const isLast = currentPage === numPages
	const prevPage = currentPage - 1 === 1 ? (currentPage = 1) : currentPage - 1
	const nextPage = currentPage + 1
	const nextCollection = currentFirstItem + postsPerPage
	console.log('nextCollection>>>>>>>>>>>>>')
	console.log(nextCollection)
	const postsList = posts.slice(currentFirstItem, nextCollection)
	console.log('É a primeira página: ' + isFirst)
	console.log('É a última página: ' + isLast)
	console.log('A página anterior: ' + prevPage)
	console.log('A próxima página: ' + nextPage)
	console.log('Número de páginas total' + numPages)
	console.log('Posts por página' + postsPerPage)
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
						<PostsBlock
							postsPerPage={postsPerPage}
							postList={postsList}
							currentPage={currentPage}
							numPages={numPages}
							isFirst={isFirst}
							prevPage={prevPage}
							isLast={isLast}
							nextPage={nextPage}
							readMoreText="Mais Posts"
							pagination={{
								style: 'LOAD_MORE_BTN',
								loadMore: 'Carregar Mais Posts',
							}}
						/>
					</div>
				</main>
			</Layout>
			<FooterBlock
				placeholderImg={props.data.imgHolder}
				footerLogo={DescolaLogoDark}
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
					excerpt(pruneLength: 300)
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
