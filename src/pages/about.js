import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>Come back here to learn more about me later...</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
