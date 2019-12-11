import React from "react"
import Layout from "../components/layout"
import Display from "../components/products/products.js"
import { windows } from "../components/products/prodData";

export default () => {
  return (
    <Layout>
      <Display product={windows} />
    </Layout>
  )
}