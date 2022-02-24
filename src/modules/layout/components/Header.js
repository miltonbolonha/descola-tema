import React from 'react'
import { Link } from 'gatsby'
// import MenuHamburgerIcon from '../../../../static/images/menu-hamburger.svg'
import MenuContainer from '../containers/MenuContainer'
import Layout from '..'
import { RiShoppingBag3Line } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
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
			<Layout
				type="ROW"
				opt={{
					isBoxed: false,
					bgColor: '#e9e9ed',
					classes: 'mobile-header mobile-only',
				}}
			>
				<Link to="/" className="logo-link">
					{logoSvg}
				</Link>
				<div className={'main-header main-header-' + menuActive}>
					{/* {mainMenu ? ( */}
					<MenuContainer refState={refState} handleRefState={handleRefState} />
					{/* ) : null} */}

					{/* {mainMenu ? ( */}
					<div className="header-columns toggle-menu">
						<input
							type="checkbox"
							id="check-toggle-icon"
							onChange={handleRefState}
						/>
						<label
							htmlFor="check-toggle-icon"
							className={`menu-wrapper ${refState ? 'active' : 'not-active'}`}
						>
							<div className="menu-bar-icon mobile-only">
								{/* className="hamburger-icon " */}
								<GiHamburgerMenu />
							</div>
						</label>
					</div>
					{/* ) : null} */}
				</div>
			</Layout>
			<Layout type="ROW" opt={{ bgColor: '#e9e9ed', isBoxed: false }}>
				<Layout
					type="ROW"
					opt={{
						isBoxed: true,
						classes: 'top-hibbon desktop-only',
						alignTo: 'right',
					}}
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
					classes: 'header-logo-wrapper desktop-only',
				}}
			>
				<Layout type="ROW" opt={{ isBoxed: true, classes: 'header-logo' }}>
					<Link to="/" className="logo-link">
						{logoSvg}
					</Link>
					<nav className="main-nav desktop-only">
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
								<Layout
									type="SUBSCRIBE"
									opt={{ placeholder: 'Procure um curso' }}
								/>
								{/* <input type="text" placeholder="Procure um curso" /> */}
								{/* <a href={'https://descola.org/cursos?search='}>
									<RiSearchLine />
								</a> */}
							</li>
						</ul>
					</nav>
				</Layout>
			</Layout>
		</header>
	)
}

export default Header
