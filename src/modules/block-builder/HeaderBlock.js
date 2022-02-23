import React from 'react'
import slugify from '@tools/slugify'
import MainWrapper from './MainWrapper'
import Layout from '../layout'

const HeaderBlock = ({ title, debug = false, logotipoImg, logotipoSvg }) => {
	if (!title) {
		return null
	}
	const titleSlug = slugify(title)

	return (
		<Layout
			type="HEADER"
			opt={{
				mainMenu: true,
				logoSvg: logotipoSvg,
			}}
		/>
	)
}

export default HeaderBlock
