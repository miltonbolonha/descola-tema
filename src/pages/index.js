import React from 'react'
import { graphql, Link } from 'gatsby'
// import { graphql } from 'gatsby'
// import PoupaLuz from '../modules/PoupaLuz'
// import GatsbyLoginForm from '../modules/gatsby-login-form'

// import { Layout } from 'gatsby-layout-builder'

import DescolaLogo from '../../static/images/descola-logo.svg'

import Layout from '../modules/layout'
import MainWrapper from '../modules/block-builder/MainWrapper'
import HeaderBlock from '../modules/block-builder/HeaderBlock'

import { FiShoppingBag } from 'react-icons/fi'

const IndexPage = ({ data }) => {
	return (
		<Layout
			type="BODY"
			opt={{
				titleSeo: `Descola`,
			}}
		>
			<Layout type="ROW" opt={{ bgColor: '#e9e9ed', isBoxed: false }}>
				{/* <h3>ola</h3> */}
				<Layout
					type="ROW"
					opt={{ isBoxed: true, classes: 'top-hibbon', alignTo: 'right' }}
				>
					<p>Login / Registre-se</p>
				</Layout>
				{/* <HeaderBlock logotipoImg={} /> */}
			</Layout>
			<Layout
				type="ROW"
				opt={{
					bgColor: '#f6f7fa',
					isBoxed: false,
					classes: 'header-logo-wrapper',
				}}
			>
				<Layout type="ROW" opt={{ isBoxed: true, classes: 'header-logo' }}>
					<Link to="/">
						<DescolaLogo />
					</Link>
					<nav className="main-nav">
						<ul className="main-ul">
							<li>
								<Link to="/cursos">Cursos</Link>
							</li>
							<li>
								<Link to="/sobre">O Que é a Descola?</Link>
							</li>
							<li>
								<Link to="/empresas">Para empresas</Link>
							</li>
							<li>
								<FiShoppingBag />
							</li>
							<li>
								<input type="text" placeholder="Procure um curso" class="" />
							</li>
						</ul>
					</nav>
				</Layout>
			</Layout>
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
