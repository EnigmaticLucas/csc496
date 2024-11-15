import * as React from 'react'
import Layout from '../../components/layout'
import StaticImage from 'gatsby-plugin-image'
import graphql from 'gatsby'
import Seo from '../../components/seo'

const {BlogPost} = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export const query = graphql `
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
	slug
	title
      }
    }
  }
`


export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost