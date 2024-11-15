import * as React from 'react'
import Layout from '../../components/layout'
import Link from 'gatsby'
import graphql from 'gatsby'
import StaticImage from 'gatsby-plugin-image'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
                        <h2>
              <Link to={`/blog/${node.id}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
	  </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
  allMdx {
    nodes {
      frontmatter {
        date
        slug
        title
      }
    }
  }
}`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage