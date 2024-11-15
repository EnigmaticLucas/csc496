const path = require("path")

exports.createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions
  const result = await graphql(`
  	query MyQuery {
  Drupal {
    nodeRecipes(first: 10) {
      nodes {
        created
        id
        title
      }
    }
  }
}
`)

  if (result.errors) {
    reporter.panicOnBuild(`gatsby-node.js error!`)
    return
  }

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  result.data.Drupal.nodeRecipes.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.id}`,
      component: blogPostTemplate,
      context: {
        recipe: node,
      },
    })
  })
}