import React from 'react'
import { graphql, Link } from 'gatsby'

import DescolaLogo from '../../static/images/descola-logo.svg'
import DescolaLogoDark from '../../static/images/descola-logo-dark.svg'

import Layout from '../modules/layout'

import FooterBlock from '../modules/block-builder/FooterBlock'

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
			<FooterBlock
				placeholderImg={data.imgHolder}
				footerLogo={DescolaLogoDark}
			/>
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
