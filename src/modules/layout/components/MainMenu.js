import React from 'react'
import { Link } from 'gatsby'
const MainMenu = ({ wrapperRef, isVisibleClass }) => (
	<nav ref={wrapperRef} className={' main-nav menu-state-' + isVisibleClass}>
		<ul className="">
			<li>
				<p>Login / Registre-se</p>
			</li>
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
		</ul>
	</nav>
)

export default MainMenu
