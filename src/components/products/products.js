import React from "react"
import { Helmet } from "react-helmet"
import styles from "./styles/products.module.css"
import Header from "../header"
import Subheader from "../subheader"
import Quote from "../getQuote"
import { withPrefix } from "gatsby"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"


export default function Product(props) {
  let split = props.product.slug.split("/")
  let titleInfo = split[2].replace(/-/g, " ")
  let linkRegex = /^http/i
  console.log(props.product.subheader)
  return (
    <div>
      <Helmet>
          <title>{`Lakeside Lumber is your source for ${titleInfo}`}</title>
          <meta name="description" content={props.product.description + props.product.descriptionLogos} />
          <meta name="keywords" content={`marcell, bigfok, effie, deer river, talmoon, grand rapids, ${titleInfo}`} />
        </Helmet>
      <Header text={titleInfo.toUpperCase()} />
      <Subheader text={props.product.subheader} />
      <p id={styles.description}>{props.product.description}</p>
      <Container>
        <Row xs={1} sm={1} md={2} style={{marginBottom: "2rem"}}>
          {props.product.products.map( (x, i) => (
            <Col style={{padding: "12px"}} key={i}>
              <Card>
                <Card.Img src={withPrefix(x.image.src)} alt={x.image.alt} />
                <Card.ImgOverlay style={{padding: "0"}}>
                  <Card.Title className={"bg-dark " + styles.cardTitle}>{x.header}</Card.Title>
                  <Card.Body classname={styles.cardBody} style={{padding: "1rem 2rem"}}>
                    <Row xs={1} sm={1} md={1} lg={2} className={"bg-dark " + styles.cardRow} style={{"--bs-bg-opacity": ".5"}}>
                      {x.suppliers.map( (x, i) => (
                        <Col key={i}>
                          <Card.Link href={linkRegex.test(x.href) ? x.href : withPrefix(x.href)} className={styles.cardLink} target="_blank" rel="noopener noreferrer">{x.supplier} <i className={"fa fa-angle-right " + styles.rightArrow} style={{fontWeight: "bold"}}></i></Card.Link>
                        </Col>
                      ))}
                    </Row>
                  </Card.Body>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
        <Container className={styles.getQuote}>
          <Quote />
        </Container>
      </Container>
    </div>
  )
}