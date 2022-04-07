import React from "react"
import Layout from "../components/layout"
import Product from "../components/products/products.js"
import { graphql } from "gatsby"


const ProductTemplate = ({ data }) => {
  return (
    <Layout>
      <Product product={data.dataJson} />
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    dataJson(slug: {eq: $slug}) {
      products {
        header
        image {
          src
          alt
        }
        suppliers {
          href
          supplier
        }
      }
      description
      subheader
      slug
    }
  }
`

export default ProductTemplate