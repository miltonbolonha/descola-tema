import React, { useState } from 'react'

import { Link } from 'gatsby'
import Layout from '../layout'
import PostCard from './PostCard'

const PostsBlock = ({
	postList,
	currentPage,
	numPages,
	typeLoad,
	isFirst,
	prevPage,
	// isLast,
	nextPage,
	readMoreText,
	pagination,
	postsPerPage,
}) => {
	const [currentFirstItem, setCurrentFirstItem] = useState(0)
	function handleCurrentFirstItem(current) {
		setCurrentFirstItem(current)
	}

	const handleBtnLoadMore = (e) => {
		e.preventDefault()
		handleCurrentFirstItem(currentFirstItem + postsPerPage)
	}

	// let currentPage = 1

	const numCollections = Math.ceil(postList.length / postsPerPage)
	// const isFirst = currentPage === 1
	const nextCollection = currentFirstItem + postsPerPage
	const isLast = nextCollection >= postList.length
	// const prevPage = currentPage - 1 === 1 ? (currentPage = 1) : currentPage - 1
	// const nextPage = currentPage + 1
	const initialLoad = typeLoad === 'push' ? 0 : currentFirstItem
	const posts = postList.slice(initialLoad, nextCollection)
	// console.log('É a primeira página: ' + isFirst)
	console.log('É a última página: ' + isLast)
	// console.log('A página anterior: ' + prevPage)
	// console.log('A próxima página: ' + nextPage)
	// console.log('Número de páginas total' + numPages)
	// console.log('Posts por página' + postsPerPage)
	return (
		<Layout
			type="ROW"
			opt={{
				numColumns: 'auto-fit',
				classes: 'post-cards-row',
				widthColumns: 'minmax(290px, 1fr)',
			}}
		>
			{posts.map(
				(
					{
						node: {
							frontmatter: { title, tags, featuredImage },
							fields: { slug },
							excerpt,
						},
					},
					i
				) => {
					return (
						<PostCard
							postImage={featuredImage}
							linkUrl={slug}
							title={title}
							excerpt={excerpt}
							readMoreText={readMoreText}
							key={i}
							tags={tags}
						/>
					)
				}
			)}
			{pagination.style === 'LOAD_MORE_BTN' ? (
				<p className="btn-load-more">
					{isLast ? (
						' '
					) : (
						<button
							onClick={(e) => handleBtnLoadMore(e)}
							value={currentFirstItem}
						>
							{pagination.loadMore}
						</button>
					)}
				</p>
			) : (
				<>
					<p>
						{currentPage} de {numCollections}
					</p>
					{!isFirst && <Link to={prevPage}>← página anterior</Link>}
					{!isLast && <Link to={nextPage}>próxima página →</Link>}
				</>
			)}
		</Layout>
	)
}

export default PostsBlock
