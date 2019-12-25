import React from "react"
import Layout from "../components/layout"
import styles from "./index.module.css"

let slides = [{src: "img/slideShow/kitchen.jpg", alt: "kitchen"},
              {src: "img/slideShow/houseWDeck.jpg", alt: "house with deck"},
              {src: "img/slideShow/deck.jpg", alt: "deck"},
              {src: "img/slideShow/delivery1.jpg", alt: "delivery truck"},
              {src: "img/slideShow/garageFrame.jpg", alt: "framed garage"},
              {src: "img/slideShow/lightLogo.jpg", alt: "Lakeside Lumber"},
              {src: "img/slideShow/garageFinished.jpg", alt: "finished garage"},
              {src: "img/slideShow/house1.jpg", alt: "house"},
              {src: "img/slideShow/metalGarage.jpg", alt: "metalGarage"}
            ];
let slideIndex = 1;

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {src: slides[0].src, alt: slides[0].alt};
    this.newSlide = this.newSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }
  newSlide() {
    this.setState({src: slides[slideIndex].src, alt: slides[slideIndex].alt});
    slideIndex++;
    if (slideIndex === slides.length) {
      slideIndex = 0;
    } 
  }
  nextSlide() {
    this.next = setInterval(this.newSlide, 2000);
  }
  componentDidMount() {
    this.nextSlide();
  }
  componentWillUnmount() {
    clearInterval(this.next);
  }
  render() {
    return (
      <Layout>
      <div id={styles.intro}> 
        <div id={styles.about}>
        <h3 id={styles.h3}>Lakeside Lumber is your source for:</h3>
        <div id={styles.list}>
          <a href="/products/lumber/"><p className={styles.p}>Lumber</p></a>
          <a href="/products/hardware/"><p className={styles.p}>Hardware</p></a>
          <a href="/products/paints-and-stains/"><p className={styles.p}>Paint & Stain</p></a>
          <a href="/products/roofing/"><p className={styles.p}>Roofing</p></a>
          <a href="/products/doors/"><p className={styles.p}>Doors</p></a>
          <a href="/products/windows/"><p className={styles.p}>Windows</p></a>
          <a href="/products/docks/"><p className={styles.p}>Docks</p></a>
          <p className={styles.p}>And More!</p>
        </div>
        </div>
        <div id={styles.slideshow}>
          <img src={this.state.src} alt={this.state.alt} className={styles.introSlides} />
        </div>
        <div id={styles.arrowDown}>
        <a href="#moreInfo" id={styles.arrow}><i class="fa fa-angle-down"></i></a>
        </div>
      </div>
      <div id={styles.moreInfo}>
        <div className={styles.flex + " " + styles.reverse}>
          <div>
            <img className={styles.moreInfoImg} src="/img/storeFront.jpg" alt="store front" />
          </div>
          <div>
            <p>Our retail store in Marcell, MN offers everything a builder or homeowner will need.</p>
            <p>​With a knowledgeable and courteous staff, we are always happy to help you with your projects.</p>
          </div>
        </div>
        <div className={styles.flex + " " + styles.wrap}>
          <div>
            <p>We have a wide variety of treated, SPF, and cedar lumber.</p>
          </div>
          <div>
            <img className={styles.moreInfoImg} src="/img/wharehouseInside.jpg" alt="inside wharehouse" />
          </div>
        </div>  
        <div className={styles.flex + " " + styles.reverse}>
          <div>
            <img className={styles.moreInfoImg} src="/img/truckShingles.jpg" alt="delivery truck" />
          </div>
          <div>
            <p>We have supplies for a new roof or to repair an existing one - from steel to tar-paper.</p>
          </div>
        </div>
        <div className={styles.flex + " " + styles.wrap}>
          <div>
            <p>WE DELIVER!</p>
            <p>Proudly serving the Edge of the Wilderness area - Marcell, Bigfork, Effie, as well as Deer River, Balsom, Talmoon, and Grand Rapids areas.</p>
          </div>
          <div>
            <img className={styles.moreInfoImg} src="/img/loadedTruck.jpg" alt="delivery truck" />
          </div>
        </div>
      </div>
    </Layout>
    )
  }
}

export default Index