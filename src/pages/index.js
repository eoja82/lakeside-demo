import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "./styles/index.module.css"
import Slideshow from "../components/slideshow"
import Quote from "../components/getQuote"
import { withPrefix } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

let List = () => {
  const data = useStaticQuery(graphql`
  query SlugToQuery {
    allDataJson {
      nodes {
        slug
        images {
          image
          type
        }
      }
    }
  }
  `)
  let list = [];
  data.allDataJson.nodes.forEach( ({slug, images}, i) => {
    let split = slug.split("/")
    let listItem = split[2].replace(/-/g, " ");
    list.push({path: slug, key: i, name: listItem, src: images[0].image, alt: images[0].type})
  });
  return (
    <div id={styles.list}>
      {list.map( x => (
        <Link to={x.path} key={x.key} className={styles.listItem}>
          <div>
            <img className={styles.listImg} src={withPrefix(x.src)} alt={x.alt} />
            <p className={styles.listP}>{x.name} <i className={`fa fa-angle-right ${styles.rightArrow}`}></i></p>
          </div>
        </Link>
      ))}
    </div>
  )
}

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.disclaimer = React.createRef();
    this.closeDisclaimer = this.closeDisclaimer.bind(this);
  }
  closeDisclaimer() {
    this.disclaimer.current.style.display = "none";
    clearTimeout(this.timer);
  } 
  componentDidMount() {
    this.timer = setTimeout(this.closeDisclaimer, 15000);
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
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
              <h3 className={styles.moreInfoHeader}>QUALITY MATERIALS</h3>
              <div className={styles.headerUnderline}></div>
              <p className={styles.moreInfoP}>
                We are proud to serve contractors and homeowners as your local source for quality building materials.
              </p>
            </div>
          </Col>
          <Col md={12} lg={6} as="img" src={withPrefix("/img/wharehouseFront.jpeg")} alt="store front" style={{padding: "0"}}>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="bg-dark">
        <Col md={12} lg={6} as="img" src={withPrefix("/img/loadedTruck.jpg")} alt="Delivery truck" style={{padding: "0"}}>
          </Col>
          <Col md={12} lg={6} className={styles.col}>
            <div>
              <h3 className={styles.moreInfoHeader}>WE DELIVER</h3>
              <div className={styles.headerUnderline}></div>
              <p className={styles.moreInfoP}>
                Serving the Edge of the Wilderness area - Marcell, Bigfork, Effie, as well as Deer River, Balsom, Talmoon, and Grand Rapids areas.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={styles.containerProd} style={{backgroundImage: `url(${withPrefix("/img/graySiding.jpg")})`}}>
        <div className={styles.productDiv}>
          <h3 className={styles.h3}>
            PRODUCTS
          </h3>
          <div className={styles.products}>
            <List />
          </div>
          <div className={styles.quote}>
            <Quote />
          </div>
        </div>
      </div>
      <div id={styles.disclaimerContainer} ref={this.disclaimer} style={{display: "flex"}}>
        <div id={styles.disclaimer}>
          <button id={styles.closeDisclaimer} onClick={this.closeDisclaimer}>&times;</button>
          <p>Disclaimer: This website is NOT the business website for the company pictured herein.  The images and logos are used with permission for demonstration and educational purposes only.</p>
        </div>
      </div>
      {/* <Disclaimer /> */}
    </Layout>
    )
  }
}

export default Index;