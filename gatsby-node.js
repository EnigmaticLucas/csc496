const path = require("path")

exports.createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions

  const result = await graphql(
    	`
  	query MyQuery {
  		Drupal {
    			nodeArticles (first: 10) {
      				nodes {
        				title
					created
        				author {
          					id
        				}
        				body {
          					value
        				}
     		 		}
    			}
  		}
	}
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  result.data.Drupal.nodeArticles.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.title}`,
      component: blogPostTemplate,
      context: {
        recipe: node,
      },
    })
  })
}