import React, { useState } from 'react'

import { Link } from 'gatsby'
import Layout from '../layout'
import PostCard from './PostCard'

const PostsBlock = ({
	postList,
	currentPage,
	numPages,
	isFirst,
	prevPage,
	isLast,
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
		console.log('askjdsajkdnasjkdnasjkdnjkasn')
	}

	// let currentPage = 1

	const numCollections = Math.ceil(postList.length / postsPerPage)
	// const isFirst = currentPage === 1
	// const isLast = currentPage === numPages
	// const prevPage = currentPage - 1 === 1 ? (currentPage = 1) : currentPage - 1
	// const nextPage = currentPage + 1
	const nextCollection = currentFirstItem + postsPerPage
	console.log('nextCollection>>>>>>>>>>>>>')
	console.log(nextCollection)
	const posts = postList.slice(currentFirstItem, nextCollection)
	// console.log('É a primeira página: ' + isFirst)
	// console.log('É a última página: ' + isLast)
	// console.log('A página anterior: ' + prevPage)
	// console.log('A próxima página: ' + nextPage)
	// console.log('Número de páginas total' + numPages)
	console.log('Posts por página' + postsPerPage)
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
					console.log('Esse é o i do postList.map')
					console.log(i)
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
				<>
					<button
						onClick={(e) => handleBtnLoadMore(e)}
						value={currentFirstItem}
					>
						{pagination.loadMore}
					</button>
				</>
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
