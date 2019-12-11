import React from "react"
import Layout from "../components/layout"
import Display from "../components/products/products.js"
import { graphql } from "gatsby";

export default ({ data }) => {
  return (
    <Layout>
      <Display product={data.dataJson} />
    </Layout>
  )
}
export const query = graphql`
  query ($slug: String!) {
    dataJson(slug: {eq: $slug}) {
      description
      images {
        image
        type
      }
      product {
        link
        manufacturer
        logo
        type
      }
      slug
    }
  }
`