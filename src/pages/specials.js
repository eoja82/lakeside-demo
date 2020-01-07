import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import styles from "./styles/specials.module.css"

class Specials extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Lakeside Lumber - current specials</title>
          <meta name="description" content="Current specials at Lakeside Lumber" />
        </Helmet>
        <div id={styles.container}>
          <p>Scroll through the Facebook feed to see our specials.</p>
          <p id={styles.p6}>
            If you don't see the specials click <a id={styles.link} href="https://www.facebook.com/pg/LakesideMarcell/posts/?ref=page_internal" target="_blank" rel="noopener noreferrer">here</a> to view the specials on Facebook.
          </p>
          <iframe title="facebook" id={styles.facebook} src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLakesideMarcell%2F&tabs=timeline&small_header=true&width=500&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" style={{border: "none", overflow: "hidden"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </div>
      </Layout>
    )
  }
}
export default Specials