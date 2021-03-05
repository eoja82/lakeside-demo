import React from "react"
import Layout from "../components/layout"
import { withPrefix } from "gatsby"
import styles from "./styles/404.module.css"

export default () => {
  return (
    <Layout>
      <div className={styles.notFound} style={{backgroundImage: `url(${withPrefix("/img/graySiding.jpg")})`}}>
        <h1 className={styles.fourZeroFour}>404</h1>
        <h2>Sorry, the page you are looking for does not exist.</h2>
      </div>
    </Layout>
  )
}
