import React from "react";
import styles from "./styles/slideshow.module.css";
import { withPrefix } from "gatsby";


function Slideshow() {
  return (
    <div className="slideshow">
      <div id="carouselCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button data-bs-target="#carouselCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button data-bs-target="#carouselCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button data-bs-target="#carouselCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner" id={styles.carousel}>
          <div className="carousel-item active" data-bs-interval="4000">
            <div style={{backgroundImage: `url(${withPrefix("/img/slideShow/storeFront.jpeg")})`}} className={"d-block w-100 " + styles.bgimg}></div>
            <div className={styles.caption1}>
              <h1 className={styles.captionh1}>FAMILY OWNED AND OPERATED</h1>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <div style={{backgroundImage: `url(${withPrefix("/img/slideShow/boomTruck1.jpg")})`}} className={"d-block w-100 " + styles.bgimg}></div>
            <div className={styles.caption2}>
              <div>
                <h1 className={styles.captionh1}>WE DELIVER</h1>
                <p className={styles.captionp}>BOOM TRUCK AVAILABLE</p>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="4000" >
            <div style={{backgroundImage: `url(${withPrefix("/img/slideShow/house.jpeg")})`}} className={"d-block w-100 " + styles.bgimg}></div>
            <div className={styles.caption3}>
              <h1 className={styles.captionh1}>NO JOB TOO BIG OR TOO SMALL</h1>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" data-bs-target="#carouselCaptions" type="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" data-bs-target="#carouselCaptions" type="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Slideshow;