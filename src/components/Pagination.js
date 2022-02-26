import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'gatsby'

const Pagination = ({
	isFirst,
	isLast,
	currentPage,
	numPages,
	prevPage,
	nextPage,
}) => (
	<>
		<p>
			{currentPage} de {numPages}
		</p>
		{!isFirst && <Link to={prevPage}>← página anterior</Link>}
		{!isLast && <Link to={nextPage}>próxima página →</Link>}
	</>
)

Pagination.propTypes = {
	isFirst: propTypes.bool.isRequired,
	isLast: propTypes.bool.isRequired,
	currentPage: propTypes.number.isRequired,
	numPages: propTypes.number.isRequired,
	prevPage: propTypes.string,
	nextPage: propTypes.string,
}

export default Pagination
