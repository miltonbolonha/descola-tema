import React from 'react'
import Layout from '../layout'

import excerpt from '../../tools/excerpt'

import { BsHeadset, BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'

const FooterBlock = ({ footerLogo, placeholderImg }) => {
	const stringOne =
		'É POSSÍVEL ENSINAR E APRENDER A TER INTELIGÊNCIA EMOCIONAL? A	Inteligência Emocional pode sim ser ensinada e aprendida por	qualquer pessoa. É como se ela fosse um músculo que pode'
	return (
		<Layout type="ROW" opt={{ bgColor: '#222', classes: 'footer' }}>
			<Layout
				type="ROW"
				opt={{ isBoxed: true, numColumns: 4, classes: 'footer-columns' }}
			>
				<div className="footer-infos">
					<h3>Sobre a escola</h3>
					<p>
						A Descola é uma escola de cursos online que cria grandes
						experiências de aprendizagem para transformar as pessoas ao longo de
						suas vidas. Selecionamos temas e professores e construímos conteúdos
						para que você desenvolva Power Skills.
					</p>
					<p>Descola Cursos Inovadores LTDA EPP 17.996.625/0001-58</p>

					<p>
						<BsHeadset />
						<a href="tel:+551130420043">+55 (11) 3042-0043</a>
					</p>
					<p className="footer-logo">{footerLogo}</p>
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
				<div className="footer-column-blog">
					<h3>Blog da escola</h3>
					<a
						href="https://blog.descola.org/10-habitos-de-gestao-emocional-para-aplicar-no-seu-dia-a-dia/"
						rel="noopener noreferrer"
						target="_blank"
						className="footer__card"
					>
						<Layout type="BLOCK_IMAGE" opt={{ queryCard: placeholderImg }} />
						<div>
							<h4>
								10 hábitos de Gestão Emocional para aplicar no seu dia a dia
							</h4>
							<p>{excerpt(stringOne, 50, '...')}</p>
						</div>
					</a>
					<a
						href="https://blog.descola.org/10-habitos-de-gestao-emocional-para-aplicar-no-seu-dia-a-dia/"
						rel="noopener noreferrer"
						target="_blank"
						className="footer__card"
					>
						<Layout type="BLOCK_IMAGE" opt={{ queryCard: placeholderImg }} />
						<div>
							<h4>
								10 hábitos de Gestão Emocional para aplicar no seu dia a dia
							</h4>
							<p>{excerpt(stringOne, 50, '...')}</p>
						</div>
					</a>
					<a
						href="https://blog.descola.org/10-habitos-de-gestao-emocional-para-aplicar-no-seu-dia-a-dia/"
						rel="noopener noreferrer"
						target="_blank"
						className="footer__card"
					>
						<Layout type="BLOCK_IMAGE" opt={{ queryCard: placeholderImg }} />
						<div>
							<h4>
								10 hábitos de Gestão Emocional para aplicar no seu dia a dia
							</h4>
							<p>{excerpt(stringOne, 50, '...')}</p>
						</div>
					</a>
				</div>
				<div className="footer-column-nav">
					<h3>Navegue</h3>
					<nav>
						<ul className="footer-menu">
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
	)
}

export default FooterBlock
