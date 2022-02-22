import React from 'react'
import slugify from '@tools/slugify'
import MainWrapper from './MainWrapper'

import Layout from '../layout'

const HeaderBlock = ({ title, debug = false, logotipoImg }) => {
	if (!title) {
		return null
	}
	const titleSlug = slugify(title)

	return (
		<MainWrapper title={titleSlug}>
			<Layout
				type="HEADER"
				opt={{
					logoHeader: logotipoImg ? (
						<Layout type="BLOCK_IMAGE" opt={{ queryCard: logotipoImg }} />
					) : null,
					mainMenu: false,
				}}
			/>
		</MainWrapper>
	)
}

export default HeaderBlock
