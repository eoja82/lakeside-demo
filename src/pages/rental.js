import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import styles from "./styles/rental.module.css"

export default () => {
  return (
    <Layout>
      <Helmet>
        <title>Lakeside Lumber - rental equipment</title>
        <meta name="description" content="We have a selection of rental equipment availble that will enable you to complete your projects efficiently." />
        <meta name="keywords" content="rent, rental, tools, drywall, lift, skidsteer, nailer, scaffold, insulation, blower" />
      </Helmet>
      <div id={styles.container}>
        <h4 id={styles.h4}>
          We have a selection of rental equipment availble that will enable you to complete your projects efficiently.
        </h4>
        <div id={styles.allEquipment}>
          <div className={styles.flex}>
            <div className={styles.listDiv}>
              <p className={styles.equipHeader}>Skid Steer Attachments:</p>
                <ul>
                  <li>Forks</li>
                  <li>Auger - 6", 9", and 15"</li>
                  <li>Brusher</li>
                  <li>Bucket</li>
                  <li>Root Grapple Bucket</li>
                </ul>
              </div>
              <img className={styles.productImg} src="/img/rental/skidSteerBucket.jpg" alt="skid steer" />
          </div>
          <div className={styles.flex}>
            <div className={styles.listDiv}>
              <p className={styles.equipHeader}>Nailers:</p>
              <ul>
                <li>Flooring Nailer</li>
                <li>Coil Roofing Nailer</li>
                <li>Finish Nailer</li>
                <li>Framing Nailer</li>
                <li>Brad Nailer</li>
              </ul>
            </div>
            <img className={styles.productImg} src="/img/rental/nailer.jpg" alt="nailer" />
          </div>
          <div className={styles.flex}>
            <div className={styles.listDiv}>
              <p className={styles.equipHeader}>Scaffolding:</p>
              <ul>
                <li>Scaffold</li>
                <li>Planks</li>
                <li>Wheels</li>
                <li>Levelers</li>
              </ul>
            </div>
            <img className={styles.productImg} src="/img/rental/scaffold.jpeg" alt="scaffolding" />
          </div>
          <div className={styles.flex}>
            <div className={styles.listDiv}>
              <p className={styles.equipHeader}>Insulation Blower:</p>
              <ul>
                <li>Free Rental With Insulation Purchase of $250 or more</li>
                <li>100' Hose</li>
              </ul>
            </div>
            <img className={styles.productImg} src="/img/rental/insulationBlower.jpg" alt="insulation blower" />
          </div>
          <div className={styles.flex}>
            <div className={styles.listDiv}>
              <p className={styles.equipHeader}>Other Equipment:</p>
              <ul>
                <li>Drywall Lift</li>
                <li>Pex Tool</li>
                <li>Hammer Drill</li>
              </ul>
            </div>
            <img className={styles.productImg} src="/img/rental/hammerDrill.jpg" alt="hammer drill" />
          </div>
        </div>
      </div>
    </Layout>
  )
}