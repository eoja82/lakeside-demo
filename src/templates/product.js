import React from "react"
import Layout from "../components/layout"
import Display from "../components/products/products.js"
import Sidebar from "../components/products/prodSidebar.js"
import { graphql } from "gatsby";
import styles from "./product.module.css"

export default ({ data }) => {
  return (
    <Layout>
      <div id={styles.layout}>
        <Sidebar id={styles.sideBar} />
        <Display id={styles.display} product={data.dataJson} />
      </div>   
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