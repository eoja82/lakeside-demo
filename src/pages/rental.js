import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Subheader from "../components/subheader"
import Quote from "../components/getQuote"
import { Helmet } from "react-helmet"
import styles from "./styles/rental.module.css"
import { withPrefix } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Card } from "react-bootstrap"

const equipment = [
  {type: "Skid Steer Attachments", list: ['Forks', 'Auger - 6", 9", and 15"', 'Brusher', 'Bucket', 'Root Grapple Bucket'], src: "/img/rental/skidSteerBucket.jpg", alt: "skid steer", key: 1},
  {type: "Nailers", list: ["Flooring Nailer", "Coil Roofing Nailer", "Finish Nailer", "Framing Nailer", "Brad Nailer"], src: "/img/rental/nailer.jpg", alt: "nailer", key: 2},
  {type: "Scaffolding", list: ["Scaffold", "Planks", "Wheels", "Levelers"], src: "/img/rental/scaffold.jpeg", alt: "scaffolding", key: 3},
  {type: " Insulation Blower", list: ["Rental For Free With Qualifying Insulation Purchase", "100' Hose"], src: "/img/rental/insulationBlower.jpg", alt: "insulation blower", key: 4},
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
      <Header text="RENTAL EQUIPMENT" />
      <Subheader text="THE RIGHT TOOLS FOR THE JOB" />
      <Container>
        <Row xs={1} sm={1} md={2} lg={3}>
          {equipment.map( x => (
            <Col className="d-flex" style={{padding: "12px"}}>
              <Card>
                <Card.Img varient="top" src={withPrefix(x.src)} style={{borderBottomLeftRadius: "0", borderBottomRightRadius: "0"}} alt={x.alt} />
                <Card.Body className="bg-dark" style={{borderBottomLeftRadius: "calc(.25rem - 1px)", borderBottomRightRadius: "calc(.25rem - 1px)"}}>
                  <Card.Title as="h4" className={styles.cardTitle}>{x.type}</Card.Title>
                  <Card.Text as="ul">
                    {x.list.map( (y, i) => (
                      <Card.Text as="li" className={styles.cardText} key={i}>{y}</Card.Text>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div className={styles.quoteDiv}>
        <Quote />
      </div>   
    </Layout>
  )
}