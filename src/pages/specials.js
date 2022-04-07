import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Subheader from "../components/subheader"
import { Helmet } from "react-helmet"
import * as styles from "./styles/specials.module.css"


export default function Specials() {
  return (
    <Layout>
      <Helmet>
        <title>Lakeside Lumber - current specials</title>
        <meta name="description" content="Current specials at Lakeside Lumber" />
      </Helmet>
      <Header text="SPECIALS" />
      <Subheader text="FACEBOOK SPECIALS" />
      <p id={styles.p}>
        If you don't see the Facebook specials:<br /><a id={styles.link} href="https://www.facebook.com/pg/LakesideMarcell/posts/?ref=page_internal" target="_blank" rel="noopener noreferrer">Click here to view the specials on Facebook</a>.
      </p>
      <iframe title="facebook" id={styles.facebook} src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLakesideMarcell%2F&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" style={{border: "none", overflow: "scroll", width: "500", height: "500"}} scrolling="yes" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </Layout>
  )
}