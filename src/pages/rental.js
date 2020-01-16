import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import styles from "./styles/rental.module.css"

const equipment = [
  {type: "Skid Steer Attachments", list: ['Forks', 'Auger - 6", 9", and 15"', 'Brusher', 'Bucket', 'Root Grapple Bucket'], src: "/img/rental/skidSteerBucket.jpg", alt: "skid steer", key: 1},
  {type: "Nailers", list: ["Flooring Nailer", "Coil Roofing Nailer", "Finish Nailer", "Framing Nailer", "Brad Nailer"], src: "/img/rental/nailer.jpg", alt: "nailer", key: 2},
  {type: "Scaffolding", list: ["Scaffold", "Planks", "Wheels", "Levelers"], src: "/img/rental/scaffold.jpeg", alt: "scaffolding", key: 3},
  {type: " Insulation Blower", list: ["Free Rental With Insulation Purchase of $250 or More", "100' Hose"], src: "/img/rental/insulationBlower.jpg", alt: "insulation blower", key: 4},
  {type: "Other Equipment", list: ["Drywall Lift", "Pex Tool", "Hammer Drill"], src: "/img/rental/hammerDrill.jpg", alt: "hammer drill", key: 5}
];

export default () => {
  return (
    <Layout>
      <Helmet>
        <title>Lakeside Lumber - rental equipment</title>
        <meta name="description" content="Our selection of rental equipment will provide you with the right tool for the job." />
        <meta name="keywords" content="rent, rental, tools, drywall, lift, skidsteer, nailer, scaffold, insulation, blower" />
      </Helmet>
      <div id={styles.container}>
        <h4 id={styles.h4}>
          Our selection of rental equipment will provide you with the right tool for the job.
        </h4>
        <div id={styles.allEquipment}>
          {equipment.map( x => 
            <div className={styles.equipment} key={x.key}>
              <img className={styles.productImg} src={x.src} alt={x.alt} />
              <p className={styles.p}>{x.type}</p>
              <ul className={styles.ul}>
                {x.list.map( (y, i) => <li className={styles.li} key={i}>{y}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}