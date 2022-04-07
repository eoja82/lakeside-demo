import React from "react"
import * as styles from "./styles/footer.module.css"
import { withPrefix } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Footer = () => {
  return (
    <Container fluid as="footer" id={styles.footer} style={{backgroundImage: `url(${withPrefix("/img/lake.jpg")})`}}>
      <Row xs={1} sm={1} md={1} lg={3} xl={4} className={"bg-dark " + styles.row} style={{"--bs-bg-opacity": ".85"}}>
        <Col> 
          <img src={withPrefix("/img/logo.png")} id={styles.logo} alt="logo" width="190px" height="109px" />
          <p className={styles.p}>Lakeside Lumber is your family owned local source for quality hardware, lumber, and building materials.</p>
        </Col>
        <Col>
          <h5 className={styles.h5}><strong>Store Hours<br /><div className={styles.underline}></div></strong></h5>
          <p className={styles.p}>Mon-Fri 7:30 am - 5:00 pm</p>
          <p className={styles.p}>Sat 8:00 am - Noon</p>
          <h5 className={styles.h5}><strong>Social<br /><div className={styles.underline}></div></strong></h5>
          <a id={styles.facebook} href="https://www.facebook.com/LakesideMarcell/" target="_blank" aria-label="Facebook" rel="noopener noreferrer"><i className="fa fa-facebook-square"></i></a>
        </Col>
        <Col>
          <h5 className={styles.h5}><strong>Contact Us<br /><div className={styles.underline}></div></strong></h5>
          <p className={styles.p}>XXXXX State Highway XX</p>
          <p className={styles.p}>PO Box XXX</p>
          <p className={styles.p}>Marcell, MN 56657</p>
          <p className={styles.p}><i className="fa fa-phone"></i> Phone: <br /><a id={styles.phone} href="tel:1-555-555-5555">555-555-5555</a></p>
          <p className={styles.p}><i className="fa fa-fax"></i> Fax: <br />444-444-4444</p>
        </Col>
        <Col>
          <div id={styles.map}><iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21526.37271773723!2d-93.7065875618642!3d47.591198397035534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ba6c4ac74ae3ab%3A0x3c5a3e65b53e6902!2sLakeside%20Lumber%20%26%20Hardware%20LLC!5e0!3m2!1sen!2sus!4v1574892894472!5m2!1sen!2su" style={{ border: "0px", width: "300px", height: "200px", frameborder: "0px" }} allowFullScreen=""></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer