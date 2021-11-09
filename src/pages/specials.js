import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import styles from "./styles/specials.module.css"
import { withPrefix } from "gatsby"


export default function Specials() {
  return (
    <Layout>
      <Helmet>
        <title>Lakeside Lumber - current specials</title>
        <meta name="description" content="Current specials at Lakeside Lumber" />
      </Helmet>
      <div id={styles.container} style={{backgroundImage: `url(${withPrefix("/img/graySiding.jpg")})`}}>
        <h4 className={styles.h4}>Scroll through the Facebook feed to see our specials.</h4>
        <p id={styles.p}>
          If you don't see the specials click <a id={styles.link} href="https://www.facebook.com/pg/LakesideMarcell/posts/?ref=page_internal" target="_blank" rel="noopener noreferrer">here</a> to view the specials on Facebook.
        </p>
        <iframe title="facebook" id={styles.facebook} src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLakesideMarcell%2F&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" style={{border: "none", overflow: "scroll", width: "500", height: "500"}} scrolling="yes" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    </Layout>
  )
}