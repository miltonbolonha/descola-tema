import React from 'react'
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
}) => (
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
				<button>{pagination.loadMore}</button>
			</>
		) : (
			<>
				<p>
					{currentPage} de {numPages}
				</p>
				{!isFirst && <Link to={prevPage}>← página anterior</Link>}
				{!isLast && <Link to={nextPage}>próxima página →</Link>}
			</>
		)}
	</Layout>
)

export default PostsBlock
