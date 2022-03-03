import * as React from "react"
import { Link } from "gatsby"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingDSG = ({ pageContext }) => {
  const { data: { node } } = pageContext;
  const body = JSON.parse(node.content.raw);
  return (
      <Layout>
        <Seo title={node.title}/>
        <h1>{node.title}</h1>
        <div dangerouslySetInnerHTML={{__html: documentToHtmlString(body)}} />
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    );
}

export default UsingDSG
