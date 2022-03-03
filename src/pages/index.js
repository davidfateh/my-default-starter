import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const { allContentfulPost } = useStaticQuery(
    graphql`
      query {
        allContentfulPost {
          nodes {
            date
            slug
            title
          }
        }
      }
    `
  );
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        {allContentfulPost.nodes.map(node => (
          <>
            <Link to={`/${node.slug}`} key={node.slug}>{node.title}</Link><br />
          </>
        ))}
      </p>
    </Layout>
  );
}

export default IndexPage
