import React from 'react'
import { graphql, Link } from 'gatsby'
// import { graphql } from 'gatsby'
// import PoupaLuz from '../modules/PoupaLuz'
// import GatsbyLoginForm from '../modules/gatsby-login-form'

// import { Layout } from 'gatsby-layout-builder'
// import PoupaLuz from '../modules/PoupaLuz'
import DescolaLogo from '../../static/images/descola-logo.svg'

import Layout from '../modules/layout'
import MainWrapper from '../modules/block-builder/MainWrapper'
import HeaderBlock from '../modules/block-builder/HeaderBlock'
// import { FiSearch } from 'react-icons/fi'
import { RiShoppingBag3Line, RiSearchLine } from 'react-icons/ri'

const IndexPage = ({ data }) => {
	return (
		<Layout
			type="BODY"
			opt={{
				titleSeo: `Descola`,
			}}
		>
			<Layout
				type="HEADER"
				opt={{
					mainMenu: true,
					logoSvg: <DescolaLogo />,
				}}
			/>
			{/* <HeaderBlock title="Descola" logotipoSvg={<DescolaLogo />} /> */}
			<Layout type="ROW" opt={{ isBoxed: true }}>
				<h1>zin</h1>
			</Layout>
			<Layout type="ROW" opt={{ bgColor: '#222', classes: 'footer' }}>
				<Layout type="ROW" opt={{ isBoxed: true, numColumns: 4 }}>
					<div>zin</div>
					<div>zin</div>
					<div>zin</div>
					<div>zin</div>
				</Layout>
			</Layout>
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
	}
`
