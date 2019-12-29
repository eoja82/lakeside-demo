import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import styles from "./contacts.module.css"

export default () => {
  return (
    <Layout>
      <Helmet>
          <title>Contact Lakeside Lumber - call, email or on Facebook</title>
        </Helmet>
      <div id={styles.container}>
        <h1 className={styles.about}>Contact Lakeside Lumber & Hardware</h1>
        <p className={styles.about}>No project is too big or to small.  <a className={styles.link} href="tel:1-218-832-3300"><i className="fa fa-phone"></i> Call</a>, <a className={styles.link}href="mailto:eric@lakesidemarcell.com"><i className="fa fa-envelope-square"></i> email</a>, or contact us on <a className={styles.link} href="https://www.facebook.com/pg/LakesideMarcell/photos/?ref=page_internal" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square"> Facebook</i></a>.  
        </p>
        <p className={styles.about}>We are here to help you with all your building and project needs!</p>
        <div id={styles.employees}>
          <div className={styles.employee}>
            <a className={styles.link} href="mailto:eric@lakesidemarcell.com">
              <img className={styles.employeeImg} src="/img/employees/eric.jpg" alt="employee" />
            </a>
            <a className={styles.link} href="mailto:eric@lakesidemarcell.com">
              Email Eric Elhardt
            </a>
          </div>
          <div className={styles.employee}>
            <a className={styles.link} href="mailto:kim@lakesidemarcell.com">
              <img className={styles.employeeImg} src="/img/employees/kim.jpg" alt="employee" /></a>
            <a className={styles.link} href="mailto:kim@lakesidemarcell.com">
              Email Kim Elhardt
            </a>
          </div>
          <div className={styles.employee}>
            <a className={styles.link} href="mailto:matt@lakesidemarcell.com">
              <img className={styles.employeeImg} src="/img/employees/matt.jpg" alt="employee" />
            </a>
            <a className={styles.link} href="mailto:matt@lakesidemarcell.com">
              Email Matt Elhardt
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}