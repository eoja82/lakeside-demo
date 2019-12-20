import React from "react"
import Layout from "../components/layout"
import styles from "./rental.module.css"

export default () => {
  return (
    <Layout>
      <h4>
        We have a selection of rental equipment availble that will enable you to complete your projects efficiently.
      </h4>
      <div id={styles.allEquipment}>
        <div className={styles.equipment}>
          <ul>
            <li className={styles.equipHeader}>Skid Steer Attachments:</li>
            <li>Forks</li>
            <li>Auger - 6", 9", and 15"</li>
            <li>Brusher</li>
            <li>Bucket</li>
            <li>Grabber</li>
          </ul>
        </div>
        <div className={styles.equipment}>
          <ul>
            <li className={styles.equipHeader}>Nailers:</li>
            <li>Flooring Nailer</li>
            <li>Coil Roofing Nailer</li>
            <li>Finish Nailer</li>
            <li>Framing Nailer</li>
            <li>Brad Nailer</li>
          </ul>
        </div>
        <div className={styles.equipment}>
          <ul>
            <li className={styles.equipHeader}>Scaffolding:</li>
            <li>Scaffold</li>
            <li>Planks</li>
            <li>Wheels</li>
            <li>Levelers</li>
          </ul>
        </div>
        <div className={styles.equipment}>
          <ul>
            <li className={styles.equipHeader}>Insulation Blower:</li>
            <li>Free With Purchase of $250 Insulation</li>
            <li>100' Hose</li>
          </ul>
        </div>
        <div className={styles.equipment}>
          <ul>
            <li className={styles.equipHeader}>Other Tools:</li>
            <li>Pex Tool</li>
            <li>Hammer Drill</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}