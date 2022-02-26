const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

// Adding slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	// Ensures we are processing only markdown files
	if (node.internal.type === 'MarkdownRemark') {
		// Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
		const slug = createFilePath({
			node,
			getNode,
			basePath: 'pages',
		})

		// Creates new query'able field with name of 'slug'
		createNodeField({
			node,
			name: 'slug',
			value: `/${slug.slice(1)}`,
		})
	}
}

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	return graphql(`
		{
			allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
							title
							author
							featuredpost
							templatekey
							tags
							featuredimage
						}
					}
				}
			}
		}
	`).then((result) => {
		const posts = result.data.allMarkdownRemark.edges

		posts.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
				component: path.resolve('./src/templates/single-post.js'),
				context: {
					slug: node.fields.slug,
				},
			})
		})

		const postsPerPage = 5
		const numPages = Math.ceil(posts.length / postsPerPage)

		Array.from({ length: numPages }).forEach((_, index) => {
			createPage({
				path: index === 0 ? `/blog` : `/page/${index + 1}`,
				component: path.resolve(`./src/templates/blog-list.js`),
				context: {
					limit: postsPerPage,
					skip: index * postsPerPage,
					numPages,
					currentPage: index + 1,
				},
			})
		})
	})
}
