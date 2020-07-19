import React from "react";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";
import styles from "./styles/contacts.module.css";

let employees = [
  {name: "Eric Elhardt", position: "Owner", src: "/img/employees/eric.jpg", email: "eric@lakesidemarcell.com", phone: "1-218-832-3300", key: 1},
  {name: "Kim Elhardt", position: "Owner", src: "/img/employees/kim.jpg", email: "kim@lakesidemarcell.com", phone: "1-218-832-3300", key: 2},
  {name: "Matt Elhardt", position: "Sales Associate", src: "/img/employees/matt.jpg", email: "matt@lakesidemarcell.com", phone: "1-218-832-3300", key: 3}
];

class Contact extends React.Component {
  render() {
    return (
      <Layout>
      <Helmet>
          <title>Contact Lakeside Lumber - call, email or on Facebook</title>
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" /> 
        </Helmet>
      <div id={styles.container}>
        <p className={styles.about}>No project is too big or to small.  <a className={styles.textLink} href="tel:1-218-832-3300">  Call</a>, <a className={styles.textLink}href="mailto:eric@lakesidemarcell.com"> email</a>, or contact us on <a className={styles.textLink} href="https://www.facebook.com/pg/LakesideMarcell/photos/?ref=page_internal" target="_blank" rel="noopener noreferrer"> Facebook</a>.<br />  We are here to help you with all your building and project needs!</p>
        <div id={styles.employees}>
          {employees.map( x => 
            <div className={styles.employee} k={x.key}>
              <img className={styles.employeeImg} src={x.src} alt={x.name} />
              <div className={styles.aboutEmployee}>
                <p className={styles.name}>{x.name}</p>
                <p className={styles.position}>{x.position}</p>
                <div className={styles.contact}>
                  <a className={styles.contactButton} href={`tel:${x.phone}`} aria-label="phone number"><i className="fa fa-phone" /></a>
                  <a className={styles.contactButton} href={`mailto:${x.email}`} aria-label="email"><i className="fa fa-envelope-square" /></a>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </Layout>
    )
  }
}
export default Contact;