import React from "react"
import * as styles from "./styles/slideshow.module.css"
import { withPrefix } from "gatsby"
import Carousel from "react-bootstrap/Carousel"


function Slideshow() {
  return (
    <Carousel fade pause="false">
      <Carousel.Item>
        <img src={withPrefix("/img/slideShow/storeEnterance.jpeg")} className={"d-block w-100 " + styles.img} alt="Front of Store" />
        <Carousel.Caption bsPrefix={styles.caption1}>
          <h3 className={styles.h3}>FAMILY OWNED AND OPERATED</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={withPrefix("/img/slideShow/boomTruck1.jpg")} className={"d-block w-100 " + styles.img} alt="Delivery Truck" />
        <Carousel.Caption bsPrefix={styles.caption2}>
          <h3 className={styles.h3}>WE DELIVER</h3>
          <p className={styles.p}>BOOM TRUCK AVAILABLE</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={withPrefix("/img/slideShow/house.jpeg")} className={"d-block w-100 " + styles.img} alt="House Under Construction" />
        <Carousel.Caption bsPrefix={styles.caption3}>
          <h3 className={styles.h3}>NO JOB TOO BIG OR TOO SMALL</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slideshow