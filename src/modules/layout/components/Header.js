import React from 'react'
import { Link } from 'gatsby'
// import MenuHamburgerIcon from '../../../../static/images/menu-hamburger.svg'
import MenuContainer from '../containers/MenuContainer'
const Header = ({ refState, handleRefState, mainMenu, logoComponent }) => {
	const menuActive = refState ? 'visible' : 'not-visible'
	console.log(mainMenu)
	return (
		<header>
			<div className={' main-header main-header-' + menuActive}>
				<div className="header-columns">
					<Link to="/" className={' logo-link logo-link-' + menuActive}>
						{logoComponent}
					</Link>
				</div>
				{mainMenu ? (
					<MenuContainer refState={refState} handleRefState={handleRefState} />
				) : null}
				{mainMenu ? (
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
								{/* <MenuHamburgerIcon className="hamburger-icon " /> */}
							</div>
						</label>
					</div>
				) : null}
			</div>
		</header>
	)
}

export default Header
