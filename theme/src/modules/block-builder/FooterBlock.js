import React from 'react'
import Layout from '../layout'
import { graphql, Link } from 'gatsby'
import Player from './AudioPlayer'
import { BiShoppingBag } from 'react-icons/bi'
import { CgReadme } from 'react-icons/cg'
import { GiBurningBook, GiPunchBlast, GiGamepadCross } from 'react-icons/gi'
import { RiContactsBookFill } from 'react-icons/ri'
import { BsBookmarkCheck } from 'react-icons/bs'
import { GoBook } from 'react-icons/go'
import { RiWhatsappFill, RiEyeFill } from 'react-icons/ri'
const FooterBlock = ({ social }) => {
	return (
		<>
			<Layout
				type="ROW"
				opt={{
					isBoxed: true,
					classes: 'footer-gray',
					alignTo: 'center',
					bgColor: '#121212',
				}}
			>
				<Layout type="FOOTER" opt={{ social: social }}>
					<p>Copyright 2022, todos os direitos reservados.</p>
					<p>Milton Bolonha - O autor</p>
					<p>
						É vedada a publicação do conteúdo deste site, no todo ou em parte,
						sem prévia autorização por escrito do autor.
					</p>
					<p>Solicite autorização pelo e-mail: </p>
					<p>
						<span>
							<a href="mailto:miltonbolonha@gmail.com" className="footer-link">
								miltonbolonha@gmail.com
							</a>
						</span>
					</p>
				</Layout>
			</Layout>
			<Layout
				type="ROW"
				opt={{
					isBoxed: true,
					bgColor: '#03a9f4',
					classes: 'post-footer-btns',
				}}
			>
				<ul>
					<li>
						<Link to="/livro-eugenia-3-0">
							<GoBook />
							Livro
						</Link>
					</li>
					{/* <li><Link to='/'>Personagens</li</Link>> */}
					{/* <li><Link to='/'>Glossário</li</Link>> */}
					{/* <li><Link to='/'>Armas e Golpes</li</Link>> */}
					<li>
						<Link to="/autor-milton-bolonha">
							<RiContactsBookFill />
							Autor
						</Link>
					</li>
					<li>
						<Link to="/jogos">
							<GiGamepadCross />
							Jogos
						</Link>
					</li>
					<li>
						<Link to="/">
							<BiShoppingBag />
							Comprar
						</Link>
					</li>
					<li>
						<Link to="/">
							<CgReadme />
							Leia
						</Link>
					</li>
				</ul>
			</Layout>
			<Layout type="ROW" opt={{ isBoxed: true, classes: 'audioplayer' }}>
				<Player />
			</Layout>
		</>
	)
}

export default FooterBlock
