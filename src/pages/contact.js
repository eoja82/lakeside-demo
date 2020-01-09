import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import styles from "./styles/contacts.module.css"

let employees = [
  {name: "Eric Elhardt", position: "Owner", src: "/img/employees/eric.jpg", email: "mailto:eric@lakesidemarcell.com", phone: "1-218-832-3300", key: 1},
  {name: "Kim Elhardt", position: "Owner", src: "/img/employees/kim.jpg", email: "mailto:kim@lakesidemarcell.com", phone: "1-218-832-3300", key: 2},
  {name: "Matt Elhardt", position: "Sales Associate", src: "/img/employees/matt.jpg", email: "mailto:matt@lakesidemarcell.com", phone: "1-218-832-3300", key: 3}
];

export default () => {
  return (
    <Layout>
      <Helmet>
          <title>Contact Lakeside Lumber - call, email or on Facebook</title>
        </Helmet>
      <div id={styles.container}>
        <p className={styles.about}>No project is too big or to small.  <a className={styles.textLink} href="tel:1-218-832-3300">Call</a>, <a className={styles.textLink}href="mailto:eric@lakesidemarcell.com"> email</a>, or contact us on <a className={styles.textLink} href="https://www.facebook.com/pg/LakesideMarcell/photos/?ref=page_internal" target="_blank" rel="noopener noreferrer"> Facebook</a>.  
        </p>
        <p className={styles.about}>We are here to help you with all your building and project needs!</p>
        <div id={styles.employees}>
          {employees.map( x => 
            <div className={styles.employee} k={x.key}>
              <img className={styles.employeeImg} src={x.src} alt={x.name} />
              <p className={styles.p}>{x.name}</p>
              <p4 className={styles.p}>{x.position}</p4>
              <div className={styles.contactIcons}>
                <a className={`${styles.link} ${styles.icon}`} href="tel:1-218-832-3300"><i className="fa fa-phone"></i></a>
                <a className={`${styles.link} ${styles.icon}`} href={x.email}><i className="fa fa-envelope-square"></i></a>
              </div>
            </div>)}
        </div>
      </div>
    </Layout>
  )
}