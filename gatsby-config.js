/**
 * @type {import('gatsby').GatsbyConfig}
 */

const { createHttpLink, from } = require(`@apollo/client`)
const { RetryLink } = require(`@apollo/client/link/retry`)

const retryLink = new RetryLink({
  delay: {
    initial: 100,
    max: 2000,
    jitter: true,
  },
  attempts: {
    max: 5,
    retryIf: (error, operation) =>
      Boolean(error) && ![500, 400].includes(error.statusCode),
  },
})

module.exports = {
  siteMetadata: {
    title: `Lucas Bevins's Weird Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
	"gatsby-plugin-mdx",
	
	{
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "DrupalGraphQL",
        fieldName: "Drupal",
        url: "https://csc496f24demo.tldr.dev/graphql",
      },
    },
  ],
}
