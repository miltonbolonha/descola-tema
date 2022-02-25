import React from 'react'
import { graphql, Link } from 'gatsby'

import DescolaLogo from '../../static/images/descola-logo.svg'
import DescolaLogoDark from '../../static/images/descola-logo-dark.svg'

import Layout from '../modules/layout'
import excerpt from '../tools/excerpt'

import { BsHeadset, BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'

const IndexPage = ({ data }) => {
	const stringOne =
		'É POSSÍVEL ENSINAR E APRENDER A TER INTELIGÊNCIA EMOCIONAL? A	Inteligência Emocional pode sim ser ensinada e aprendida por	qualquer pessoa. É como se ela fosse um músculo que pode'
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
			<Layout
				type="ROW"
				opt={{ isBoxed: true, classes: 'main-container-wrapper' }}
			>
				<main className="main-container">
					<h1>Posts</h1>
					<div className="post-cards-wrapper">
						<Layout
							type="ROW"
							opt={{
								numColumns: 'auto-fit',
								classes: 'post-cards-row',
								widthColumns: 'minmax(290px, 1fr)',
							}}
						>
							<div className="post-card">
								<Layout
									type="BLOCK_IMAGE"
									opt={{
										queryCard: data.blogImgHolder,
										hasLink: true,
										link: '/',
									}}
								/>
								<div className="post-card-content">
									<h2>
										<Link to="/">Lorem ipsum</Link>
									</h2>
									<p>
										<Link to="/">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Eos, tempora! Tenetro perferendis quod excepturi, suscipit
											adipisci!
										</Link>
									</p>
									<p>
										<Link to="/" className="card-posts-link">
											Leia Mais
										</Link>
									</p>
								</div>
							</div>
							<div className="post-card">
								<Layout
									type="BLOCK_IMAGE"
									opt={{
										queryCard: data.blogImgHolder,
										hasLink: true,
										link: '/',
									}}
								/>
								<div className="post-card-content">
									<h2>
										<Link to="/">Lorem ipsum</Link>
									</h2>
									<p>
										<Link to="/">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Eos, tempora! Tenetur in, ipsum, repudiandae aspernatur
											illo harum laudantium porro perferendis quod excepturi,
											suscipit adipisci!
										</Link>
									</p>
									<p>
										<Link to="/" className="card-posts-link">
											Leia Mais
										</Link>
									</p>
								</div>
							</div>{' '}
							<div className="post-card">
								<Layout
									type="BLOCK_IMAGE"
									opt={{
										queryCard: data.blogImgHolder,
										hasLink: true,
										link: '/',
									}}
								/>
								<div className="post-card-content">
									<h2>
										<Link to="/">Lorem ipsum</Link>
									</h2>
									<p>
										<Link to="/">
											Lorem ipsum dolor si porro perferendis quod excepturi,
											suscipit adipisci!
										</Link>
									</p>
									<p>
										<Link to="/" className="card-posts-link">
											Leia Mais
										</Link>
									</p>
								</div>
							</div>{' '}
							<div className="post-card">
								<Layout
									type="BLOCK_IMAGE"
									opt={{
										queryCard: data.blogImgHolder,
										hasLink: true,
										link: '/',
									}}
								/>
								<div className="post-card-content">
									<h2>
										<Link to="/">Lorem ipsum</Link>
									</h2>
									<p>
										<Link to="/">
											Lorem ipsum doium porro perferendis quod excepturi,
											suscipit adipisci!
										</Link>
									</p>
									<p>
										<Link to="/" className="card-posts-link">
											Leia Mais
										</Link>
									</p>
								</div>
							</div>{' '}
							<div className="post-card">
								<Layout
									type="BLOCK_IMAGE"
									opt={{
										queryCard: data.blogImgHolder,
										hasLink: true,
										link: '/',
									}}
								/>
								<div className="post-card-content">
									<h2>
										<Link to="/">Lorem ipsum</Link>
									</h2>
									<p>
										<Link to="/">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Eos, tempora! Tenetri, suscipit adipisci!
										</Link>
									</p>
									<p>
										<Link to="/" className="card-posts-link">
											Leia Mais
										</Link>
									</p>
								</div>
							</div>{' '}
							<div className="post-card">
								<Layout
									type="BLOCK_IMAGE"
									opt={{
										queryCard: data.blogImgHolder,
										hasLink: true,
										link: '/',
									}}
								/>
								<div className="post-card-content">
									<h2>
										<Link to="/">Lorem ipsum</Link>
									</h2>
									<p>
										<Link to="/">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Eos, tempora! Tenetur in, ipsus quod excepturi, suscipit
											adipisci!
										</Link>
									</p>
									<p>
										<Link to="/" className="card-posts-link">
											Leia Mais
										</Link>
									</p>
								</div>
							</div>
						</Layout>
					</div>
				</main>
			</Layout>
			<Layout type="ROW" opt={{ bgColor: '#222', classes: 'footer' }}>
				<Layout
					type="ROW"
					opt={{ isBoxed: true, numColumns: 4, classes: 'footer-columns' }}
				>
					<div className="footer-infos">
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
					<div className="footer-column-blog">
						<h3>Blog da escola</h3>
						<a
							href="https://blog.descola.org/10-habitos-de-gestao-emocional-para-aplicar-no-seu-dia-a-dia/"
							rel="noopener noreferrer"
							target="_blank"
							className="footer__card"
						>
							<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.imgHolder }} />
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
							<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.imgHolder }} />
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
							<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.imgHolder }} />
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

		bgroom: file(relativePath: { eq: "bg-app-room.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(width: 301, placeholder: DOMINANT_COLOR, quality: 100)
			}
		}

		imgHolder: file(relativePath: { eq: "placeholder700x300.png" }) {
			childrenImageSharp {
				gatsbyImageData(width: 76, height: 76, placeholder: NONE, quality: 100)
			}
		}

		blogImgHolder: file(relativePath: { eq: "placeholder700x300.png" }) {
			childrenImageSharp {
				gatsbyImageData(
					width: 350
					height: 224
					placeholder: NONE
					quality: 100
				)
			}
		}
	}
`
