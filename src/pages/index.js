import React from "react"
import Layout from "../components/layout"
import Subheader from "../components/subheader"
import Slideshow from "../components/slideshow"
import Quote from "../components/getQuote"
import { Link, graphql, useStaticQuery, withPrefix } from "gatsby"
import * as styles from "./styles/index.module.css"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"



const List = () => {
  const data = useStaticQuery(graphql`
    query SlugToQuery {
      allDataJson {
        nodes {
          slug
          products {
            image {
              alt
              src
            }
          }
        }
      }
    }
  `)
  let list = []
  data.allDataJson.nodes.forEach(({ slug, products }, i) => {
    let split = slug.split("/")
    let listItem = split[2].replace(/-/g, " ")
    list.push({ path: slug, key: i, name: listItem, src: products[0].image.src, alt: products[0].image.alt })
  })
  return (
    <Container id={styles.listContainer}>
      <Row xs={1} sm={1} md={2} lg={3}>
        {list.map(x => (
          <Col style={{ padding: "12px" }} key={x.key}>
            <Card className="text-center" style={{ border: "none" }}>
              <Link to={x.path}>
                <Card.Img varient="top" src={withPrefix(x.src)} style={{ borderBottomLeftRadius: "0", borderBottomRightRadius: "0" }} alt={x.alt} />
              </Link>
              <Link to={x.path} className={styles.listP}>
                <Card.Body className="bg-dark" style={{ borderBottomLeftRadius: "calc(.25rem - 1px)", borderBottomRightRadius: "calc(.25rem - 1px)" }}>
                  {x.name} <i className={`fa fa-angle-right ${styles.rightArrow}`}></i>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.disclaimer = React.createRef()
    this.closeDisclaimer = this.closeDisclaimer.bind(this)
  }
  closeDisclaimer() {
    this.disclaimer.current.style.display = "none"
    clearTimeout(this.timer)
  }
  componentDidMount() {
    this.timer = setTimeout(this.closeDisclaimer, 15000)
  }
  componentWillUnmount() {
    clearTimeout(this.timer)
  }
  render() {
    return (
      <Layout>
        <div id={styles.intro}>
          <Slideshow />
        </div>
        <Container fluid>
          <Row className="bg-dark">
            <Col md={12} lg={6} className={styles.col}>
              <div>
                <Subheader text="QUALITY MATERIALS" lightText style={{ marginTop: 0 }} />
                <p className={styles.moreInfoP}>
                  We are proud to serve contractors and homeowners as your local source for quality building materials.
                </p>
              </div>
            </Col>
            <Col md={12} lg={6} style={{ padding: "0" }}>
              <Image src={withPrefix("/img/deck.jpg")} alt="Deck" fluid />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className="bg-dark">
            <Col md={12} lg={6} style={{ padding: "0" }}>
              <Image src={withPrefix("/img/boomTruck2.jpg")} alt="Delivery truck" fluid />
            </Col>
            <Col md={12} lg={6} className={styles.col}>
              <div>
                <Subheader text="WE DELIVER" lightText style={{ marginTop: 0 }} />
                <p className={styles.moreInfoP}>
                  Serving the Edge of the Wilderness area - Marcell, Bigfork, Effie, as well as Deer River, Balsom, Talmoon, and Grand Rapids areas.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Subheader text="PRODUCTS" />
          <Quote />
          <List />
        </Container>
        <div id={styles.disclaimerContainer} ref={this.disclaimer} style={{ display: "flex" }}>
          <div id={styles.disclaimer}>
            <button id={styles.closeDisclaimer} onClick={this.closeDisclaimer}>&times;</button>
            <p>Disclaimer: This website is NOT the business website for the company pictured herein.  The images and logos are used with permission for demonstration and educational purposes only.</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Index