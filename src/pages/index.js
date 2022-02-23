import React from 'react'
import { graphql, Link } from 'gatsby'
// import { graphql } from 'gatsby'
// import PoupaLuz from '../modules/PoupaLuz'
// import GatsbyLoginForm from '../modules/gatsby-login-form'

// import { Layout } from 'gatsby-layout-builder'
// import PoupaLuz from '../modules/PoupaLuz'
import DescolaLogo from '../../static/images/descola-logo.svg'
import DescolaLogoDark from '../../static/images/descola-logo-dark.svg'

import Layout from '../modules/layout'
// import MainWrapper from '../modules/block-builder/MainWrapper'
// import HeaderBlock from '../modules/block-builder/HeaderBlock'
// import { FiSearch } from 'react-icons/fi'
// import { RiShoppingBag3Line, RiSearchLine } from 'react-icons/ri'
import { BsHeadset, BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'

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
				<Layout
					type="ROW"
					opt={{ isBoxed: true, numColumns: 4, classes: 'footer-columns' }}
				>
					<div>
						<h3>Sobre a escola</h3>
						<p>
							A Descola é uma escola de cursos online que cria grandes
							experiências de aprendizagem para transformar as pessoas ao longo
							de suas vidas. Selecionamos temas e professores e construímos
							conteúdos para que você desenvolva Power Skills.
						</p>
						<p>Descola Cursos Inovadores LTDA EPP 17.996.625/0001-58</p>

						<p>
							<BsHeadset />
							<a href="tel:+551130420043">+55 (11) 3042-0043</a>
						</p>

						<DescolaLogoDark />
					</div>
					<div className="tag-list-wrapper">
						<h3>Habilidades em destaque</h3>
						{/* <div> */}
						<a href="https://descola.org/cursos" className="tag">
							Gestão
						</a>
						<a href="https://descola.org/cursos" className="tag">
							Empregabilidade
						</a>
						<a href="https://descola.org/cursos" className="tag">
							Colaboração
						</a>
						<a href="https://descola.org/cursos" className="tag">
							Inovação
						</a>
						<a href="https://descola.org/cursos" className="tag">
							Design Thinking
						</a>
						<a href="https://descola.org/cursos" className="tag">
							Relacionamentos
						</a>
						<a href="https://descola.org/cursos" className="tag">
							Comunicação Interpessoal
						</a>
						<a href="https://descola.org/cursos" className="tag">
							Engajamento
						</a>
						<a href="https://descola.org/cursos" className="tag">
							Produtividade
						</a>
						<a href="https://descola.org/cursos" className="tag">
							RH
						</a>
						<a href="https://descola.org/cursos" className="tag">
							Liderança
						</a>
						<a href="https://descola.org/cursos" className="tag">
							Trabalho
						</a>
						{/* </div> */}
						<div className="footer-social-icons">
							<h3>Redes sociais</h3>
							<a
								href="https://br.linkedin.com/school/descola"
								rel="noopener noreferrer"
								target="_blank"
								className="btn btn-primary btn-icon"
							>
								<FaLinkedinIn />
							</a>
							<a
								href="https://www.instagram.com/descolagram"
								rel="noopener noreferrer"
								target="_blank"
								className="btn btn-primary btn-icon"
							>
								<BsInstagram />
							</a>
							<a
								href="https://www.facebook.com/descolasp"
								rel="noopener noreferrer"
								target="_blank"
								className="btn btn-primary btn-icon"
							>
								<FaFacebookF />
							</a>
						</div>
					</div>
					<div>
						<h3>Blog da escola</h3>
						<a
							href="https://blog.descola.org/10-habitos-de-gestao-emocional-para-aplicar-no-seu-dia-a-dia/"
							rel="noopener noreferrer"
							target="_blank"
							className="footer__card"
						>
							<div></div>
							<div>
								<h4>
									10 hábitos de Gestão Emocional para aplicar no seu dia a dia
								</h4>{' '}
								<p>
									É POSSÍVEL ENSINAR E APRENDER A TER INTELIGÊNCIA EMOCIONAL? A
									Inteligência Emocional pode sim ser ensinada e aprendida por
									qualquer pessoa. É como se ela fosse um músculo que pode
									&amp;#8230;&lt;/p&gt;
								</p>
							</div>
						</a>
						<a
							href="https://blog.descola.org/power-skills-as-habilidades-que-vao-te-fazer-chegar-mais-longe/"
							rel="noopener noreferrer"
							target="_blank"
							className="footer__card"
						>
							<div></div>
							<div>
								<h4>
									POWER SKILLS &amp;#8211; As habilidades que vão te fazer
									chegar mais longe
								</h4>{' '}
								<p>
									Como Power Skills devem ser levadas em conta no mundo de
									hoje.&lt;/p&gt;
								</p>
							</div>
						</a>
						<a
							href="https://blog.descola.org/mentalidade-agil-um-novo-jeito-de-enxergar-oportunidades-de-crescimento/"
							rel="noopener noreferrer"
							target="_blank"
							className="footer__card"
						>
							<div className="footer__card__img"></div>
							<div className="footer__card__content">
								<h4>
									Mentalidade Ágil: Um novo jeito de enxergar oportunidades de
									crescimento
								</h4>{' '}
								<p>
									Lembra quando você estava aprendendo a ler e ficava lendo
									todas as placas que via pela rua? Ou quando você descobriu a
									química e olhou para a água fervendo na &amp;#8230;&lt;/p&gt;
								</p>
							</div>
						</a>
					</div>
					<div>
						<h3>Navegue</h3>
						<nav>
							<ul>
								<li>
									<a href="https://descola.org/cursos">Cursos</a>
								</li>
								<li>
									<a
										href="https://blog.descola.org/"
										rel="noopener noreferrer"
										target="_blank"
									>
										Blog
									</a>
								</li>
								<li>
									<a href="https://descola.org/empresas">Para empresas</a>
								</li>
								<li>
									<a href="https://descola.org/contato">Contato</a>
								</li>
								<li>
									<a href="https://descola.org/faq">FAQ</a>
								</li>
								<li>
									<a href="https://descola.org/imprensa">Imprensa</a>
								</li>
								<li>
									<a href="https://descola.org/termos-de-uso">Termos de Uso</a>
								</li>
							</ul>
						</nav>
					</div>
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
