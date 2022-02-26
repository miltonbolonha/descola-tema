import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const PostItem = ({ slug, title, description, category, date }) => (
	<Link to={slug}>
		<div>
			<div>
				<p>{title} • </p>
				<p>{date} • </p>
				<p>{category}</p>
			</div>
			<p>{description}</p>
		</div>
	</Link>
)

PostItem.propTypes = {
	slug: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
}

export default PostItem
