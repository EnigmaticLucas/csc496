import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <main>
	<Layout>
      		<h1>About Me</h1>
      		<p>I'm Lucas Bevins.</p>
	</Layout>
    </main>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage
