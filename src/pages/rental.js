import React from "react"
import Layout from "../components/layout"
import styles from "./rental.module.css"

export default () => {
  return (
    <Layout>
      <div id={styles.container}>
        <h4>
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
              <img className={styles.productImg} src="/img/rental/skidsteer.jpg" alt="skid steer" />
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
            <img className={styles.productImg} src="/img/rental/scaffolding.jpg" alt="scaffolding" />
          </div>
          <div className={styles.flex}>
            <div className={styles.listDiv}>
              <p className={styles.equipHeader}>Insulation Blower:</p>
              <ul>
                <li>Free With Purchase of $250 Insulation</li>
                <li>100' Hose</li>
              </ul>
            </div>
            <img className={styles.productImg} src="/img/rental/insulationBlower.jpg" alt="insulation blower" />
          </div>
          <div className={styles.flex}>
            <div className={styles.listDiv}>
              <p className={styles.equipHeader}>Other Tools:</p>
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