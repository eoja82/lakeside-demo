import React from "react"
import Layout from "../components/layout"
import styles from "./contacts.module.css"

export default () => {
  return (
    <Layout>
      <h1>Contact Lakeside Lumber & Hardware</h1>
      <p className={styles.about}>No project is too big or to small.  <a href="tel:1-218-832-3300">Call</a>, email, or contact us on <a href="https://www.facebook.com/pg/LakesideMarcell/photos/?ref=page_internal" target="_blank" rel="noopener noreferrer">Facebook <i className="fa fa-facebook-square"></i></a>.  
      </p>
      <p className={styles.about}>We are here to help you with all your building and project needs!</p>
      <div id={styles.employees}>
        <div className={styles.employee}>
          <a href="mailto:eric@lakesidemarcell.com">
            <img src="/img/employees/eric.jpg" alt="employee" />
          </a>
          <a href="mailto:eric@lakesidemarcell.com">
            Email Eric Elhardt
          </a>
        </div>
        <div className={styles.employee}>
          <a href="mailto:kim@lakesidemarcell.com">
            <img src="/img/employees/kim.jpg" alt="employee" /></a>
          <a href="mailto:kim@lakesidemarcell.com">
            Email Kim Elhardt
          </a>
        </div>
        <div className={styles.employee}>
          <a href="mailto:matt@lakesidemarcell.com">
            <img src="/img/employees/matt.jpg" alt="employee" />
          </a>
          <a href="mailto:matt@lakesidemarcell.com">
            Email Matt Elhardt
          </a>
        </div>
      </div>
    </Layout>
  )
}