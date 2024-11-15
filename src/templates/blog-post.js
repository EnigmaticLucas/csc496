import React from "react"
import Layout from "../components/layout"
import Link from 'gatsby'
import graphql from 'gatsby'
import StaticImage from 'gatsby-plugin-image'
export default React

function Recipe({pageContext}) {
  const {recipe} = pageContext
  return <>{recipe.id}</>
}