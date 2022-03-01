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
				return (
					<PostCard
						postImage={featuredImage}
						linkUrl={slug}
						title={title}
						excerpt={excerpt}
						readMoreText="Leia Mais"
						key={i}
						tags={tags}
					/>
				)
			}
		)}
		<p>
			{currentPage} de {numPages}
		</p>
		{!isFirst && <Link to={prevPage}>← página anterior</Link>}
		{!isLast && <Link to={nextPage}>próxima página →</Link>}
	</Layout>
)

export default PostsBlock
