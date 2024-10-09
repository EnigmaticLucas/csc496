import * as React from 'react'
import Layout from '../components/layout'
import StaticImage from 'gatsby-plugin-image'
import Seo from '../components/seo'

const {IndexPage} = () => {
  return (
    <main>
      <h1>Lucas Bevins's Weird Site</h1>
      <Layout pageTitle="Home Page">
	<p>This is my weird website.</p>
      	<StaticImage src="../images/pfp.png" alt="A fractal of arrows"/>
	</Layout>
    </main>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
