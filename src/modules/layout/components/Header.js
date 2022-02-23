import React from 'react'
import { Link } from 'gatsby'
// import MenuHamburgerIcon from '../../../../static/images/menu-hamburger.svg'
import MenuContainer from '../containers/MenuContainer'
import Layout from '..'
import { RiShoppingBag3Line, RiSearchLine } from 'react-icons/ri'
const Header = ({
	refState,
	handleRefState,
	mainMenu,
	logoComponent,
	logoSvg,
}) => {
	const menuActive = refState ? 'visible' : 'not-visible'
	// console.log(mainMenu)
	return (
		<header>
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
					<Link to="/" className="logo-link">
						{logoSvg}
					</Link>
					<nav className="main-nav">
						<ul className="main-ul">
							<li>
								<a href="https://descola.org/cursos">Cursos</a>
							</li>
							<li>
								<a href="https://descola.org/sobre">O Que é a Descola?</a>
							</li>
							<li>
								<a href="https://descola.org/empresas">Para empresas</a>
							</li>
							<li>
								<Link to="/">Blog</Link>
							</li>
							<li className="menu-shop-bag">
								<RiShoppingBag3Line />
							</li>
							<li className="main-menu-search">
								<input type="text" placeholder="Procure um curso" />
								<a href={'https://descola.org/cursos?search='}>
									<RiSearchLine />
								</a>
							</li>
						</ul>
					</nav>
				</Layout>
			</Layout>
		</header>
	)
}

export default Header
