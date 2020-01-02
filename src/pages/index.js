import React from "react"
import Layout from "../components/layout"
import styles from "./index.module.css"
//import { Helmet } from "react-helmet"
//import { Link } from "gatsby"

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
let slideIndex = 0;
let activeDot = 0;

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {src: slides[0].src, alt: slides[0].alt};
    this.setSlide = this.setSlide.bind(this);
    this.newSlide = this.newSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }
  setSlide(e) {
    //console.log(e.target.getAttribute("class"))
    e.target.className = (styles.slideDot) + " " + (styles.activeDot);
    let index = e.target.getAttribute("data-index");
    slideIndex = index;
    activeDot = index;
    this.setState({src: slides[index].src, alt: slides[index].alt})
    clearInterval(this.next);
  }
  newSlide() {
    this.setState({src: slides[slideIndex].src, alt: slides[slideIndex].alt});
    slideIndex++;
    activeDot++;
    if (slideIndex === slides.length) {
      slideIndex = 0;
      activeDot = 0;
    } 
  }
  nextSlide() {
    this.next = setInterval(this.newSlide, 2500);
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
      {/* <Helmet>
        <script src="util.js"></script>
      </Helmet>   */}
      <div id={styles.intro}> 
        <div id={styles.about}>
        <h3 id={styles.h3}>Lakeside Lumber is your source for:</h3>
        <div id={styles.list}>
          <a href="/products/lumber/"><p className={styles.p}>Lumber</p></a>
          <a href="/products/hardware/"><p className={styles.p}>Hardware</p></a>
          <a href="/products/paint-and-stain/"><p className={styles.p}>Paint & Stain</p></a>
          <a href="/products/siding/"><p className={styles.p}>Siding</p></a>
          <a href="/products/roofing/"><p className={styles.p}>Roofing</p></a>
          <a href="/products/doors/"><p className={styles.p}>Doors</p></a>
          <a href="/products/windows/"><p className={styles.p}>Windows</p></a>
          <a href="/products/docks/"><p className={styles.p}>Docks</p></a>
          <p className={styles.p}>And More!</p>
        </div>
        </div>
        <div id={styles.slideshow}>
          <img src={this.state.src} alt={this.state.alt} className={styles.introSlides} />
          <div id={styles.slideDots}>
            {slides.map( (x, i) => {
              let isActive = i === activeDot ? true : false;
              return (
                <div className={styles.slideDot + " " + (isActive ? styles.activeDot : "")} key={`${x.alt}${i}`} data-index={i} onClick={this.setSlide}></div>
              )
            })}
          </div>
        </div> 
        {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="img/slideShow/kitchen.jpg" className="d-block w-100" alt="kitchen" />
            </div>
            <div className="carousel-item">
              <img src="img/slideShow/houseWDeck.jpg" className="d-block w-100" alt="house with deck" />
            </div>
            <div className="carousel-item">
              <img src="img/slideShow/deck.jpg" className="d-block w-100" alt="deck" />
            </div>
            <div className="carousel-item">
              <img src="img/slideShow/delivery1.jpg" className="d-block w-100" alt="delivery truck" />
            </div>
            <div className="carousel-item">
              <img src="img/slideShow/garageFrame.jpg" className="d-block w-100" alt="framed garage" />
            </div>
            <div className="carousel-item">
              <img src="img/slideShow/lightLogo.jpg" className="d-block w-100" alt="Lakeside Lumber logo" />
            </div>
            <div className="carousel-item">
              <img src="img/slideShow/garageFinished.jpg" className="d-block w-100" alt="finished garage" />
            </div>
            <div className="carousel-item">
              <img src="img/slideShow/house1.jpg" className="d-block w-100" alt="house" />
            </div>
            <div className="carousel-item">
              <img src="img/slideShow/metalGarage.jpg" className="d-block w-100" alt="metal garage" />
            </div>
          </div>
        </div> */}
        <div id={styles.arrowDown}>
        <a href="#index-module--arrowDown--1Y143" id={styles.arrow}><i className="fa fa-angle-down"></i></a>
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