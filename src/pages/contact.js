import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Header from "../components/header"
import Subheader from "../components/subheader"
import * as styles from "./styles/contact.module.css"
import { withPrefix } from "gatsby"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"

const employees = [
  {name: "John Doe", position: "Owner", src: "/img/employees/johnDoe.jpg", email: "john@fakeemail.com", phone: "1-555-555-5555", key: 1},
  {name: "Jane Doe", position: "Owner", src: "/img/employees/janeDoe.jpg", email: "jane@fakeemail.com", phone: "1-555-555-5555", key: 2},
  {name: "Jake Doe", position: "Sales Associate", src: "/img/employees/jakeDoe.jpg", email: "jake@fakeemail.com", phone: "1-555-555-5555", key: 3}
]

class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Contact Lakeside Lumber - call, email or on Facebook</title>
        </Helmet>
        <Header text="CONTACT US" />
        <Subheader text="OUR TEAM" />
        <p className={styles.about}>No project is too big or to small.<br />We are here to help you with all your building and project needs!</p>
        <Container style={{ marginBottom: "2rem" }}>
          <Row xs={1} sm={1} md={2} lg={3}>
            {employees.map(x => (
              <Col key={x.key} style={{ padding: "12px" }}>
                <Card className="text-center" style={{ border: "none" }}>
                  <Image src={withPrefix(x.src)} alt={x.name} roundedCircle fluid />
                  <Card.Body>
                    <Card.Title as="h5" className={styles.cardTitle}>{x.name}</Card.Title>
                    <Card.Subtitle className={styles.cardSubtitle}>{x.position}</Card.Subtitle>
                    <div className={styles.links}>
                      <Button variant="outline-dark" className={styles.cardButton}>
                        <Card.Link href={`tel:${x.phone}`} aria-label="phone number" className={styles.cardLink}>Call</Card.Link>
                      </Button>
                      <Button variant="outline-dark" className={styles.cardButton}>
                        <Card.Link href={`mailto:${x.email}`} aria-label="email" className={styles.cardLink}>Email</Card.Link>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default Contact