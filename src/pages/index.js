import React from "react"
import Layout from "../components/layout"
import styles from "./index.module.css"

let slides = [{src: "img/slideShow/kitchen.jpg", alt: "kitchen", isActive: true, index: 0},
              {src: "img/slideShow/houseWDeck.jpg", alt: "house with deck", isAvtive: false, index: 1},
              {src: "img/slideShow/deck.jpg", alt: "deck", isAvtive: false, index: 2},
              {src: "img/slideShow/delivery1.jpg", alt: "delivery truck", isAvtive: false, index: 3},
              {src: "img/slideShow/garageFrame.jpg", alt: "framed garage", isAvtive: false, index: 4},
              {src: "img/slideShow/lightLogo.jpg", alt: "Lakeside Lumber", isAvtive: false, index: 5},
              {src: "img/slideShow/garageFinished.jpg", alt: "finished garage", isAvtive: false, index: 6},
              {src: "img/slideShow/house1.jpg", alt: "house", isAvtive: false, index: 7},
              {src: "img/slideShow/metalGarage.jpg", alt: "metalGarage", isAvtive: false, index: 8}
            ];
let slideIndex = 0;

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {src: slides[slideIndex].src, alt: slides[slideIndex].alt, isActive: slides[slideIndex].isActive, index: slides[slideIndex].index};
    this.playPauseRef = React.createRef();
    this.playRef = React.createRef();
    this.pauseRef = React.createRef();
    //this.setSlide = this.setSlide.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.hideButton = this.hideButton.bind(this);
    this.displayButton = this.displayButton.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.autoSlide = this.autoSlide.bind(this);
  }
  //user clicks slide dots future project
  /* setSlide(e) {
    let index = e.target.getAttribute("data-index");
    slides[slideIndex].isActive = false;
    slideIndex = index;
    slides[slideIndex].isActive = true;
    e.target.className = (styles.slideDot) + " " + (styles.activeDot);
    this.setState({src: slides[index].src, alt: slides[index].alt});
    console.log(e.target.getAttribute("class"))
    e.target.className = (styles.slideDot) + " " + (styles.activeDot);
    let index = e.target.getAttribute("data-index");
    slideIndex = index;
    this.setState({src: slides[index].src, alt: slides[index].alt})
    clearInterval(this.next);
  } */
  play() {
    this.autoSlide();
    this.pauseRef.current.style.display = "block";
    this.playRef.current.style.display = "none";
  }
  pause() {
    clearInterval(this.next);
    this.pauseRef.current.style.display = "none";
    this.playRef.current.style.display = "block";
  }
  displayButton() {
    this.playPauseRef.current.style.display = "block";
  }
  hideButton() {
    this.playPauseRef.current.style.display = "none";
  }
  prevSlide() {
    if (slideIndex === 0) {
      slideIndex = slides.length - 1;
      this.setState({src: slides[slideIndex].src, alt: slides[slideIndex].alt});
    } else {
      slideIndex--;
      this.setState({src: slides[slideIndex].src, alt: slides[slideIndex].alt});
    }
  }
  nextSlide() {
    if (slideIndex === slides.length - 1) {
      slideIndex = 0;
      this.setState({src: slides[slideIndex].src, alt: slides[slideIndex].alt});
    } else {
      slideIndex++;
      this.setState({src: slides[slideIndex].src, alt: slides[slideIndex].alt});
    }
  }
  autoSlide() {
    this.next = setInterval(this.nextSlide, 2500);
  }
  componentDidMount() {
    this.autoSlide();
  }
  componentWillUnmount() {
    clearInterval(this.next);
    // keep slideshow at same slide when user navigates to another page on site
    slideIndex = slideIndex;
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
          <a href="/products/paint-and-stain/"><p className={styles.p}>Paint & Stain</p></a>
          <a href="/products/siding/"><p className={styles.p}>Siding</p></a>
          <a href="/products/roofing/"><p className={styles.p}>Roofing</p></a>
          <a href="/products/doors/"><p className={styles.p}>Doors</p></a>
          <a href="/products/windows/"><p className={styles.p}>Windows</p></a>
          <a href="/products/docks/"><p className={styles.p}>Docks</p></a>
          <p className={styles.p}>And More!</p>
        </div>
        </div>
        <div id={styles.slideshow} onMouseEnter={this.displayButton} onMouseLeave={this.hideButton}>
          <img src={this.state.src} alt={this.state.alt} className={styles.introSlides} />
          {/* mouse enter/leave, hide play/pause when hover over arrows */}
          <a id={styles.prev} onClick={this.prevSlide} onMouseEnter={this.hideButton} onMouseLeave={this.displayButton}><i class="fa fa-angle-left"></i></a>
          <a id={styles.next} onClick={this.nextSlide} onMouseEnter={this.hideButton} onMouseLeave={this.displayButton}><i class="fa fa-angle-right"></i></a>
          <div id={styles.playPause} ref={this.playPauseRef} style={{display: "none"}}>
            <i className="fa fa-play" ref={this.playRef} style={{display: "none"}} onClick={this.play} id={styles.play}></i>
            <i className="fa fa-pause" ref={this.pauseRef} style={{display: "block"}} onClick={this.pause} id={styles.pause}></i>
          </div>
          <div id={styles.slideDots}>
            {slides.map( (x, i) => {
              let isActive = i === slideIndex ? true : false;
              return (
                <div className={styles.slideDot + " " + (isActive ? styles.activeDot : "")} key={`${x.alt}${i}`} data-index={i} onClick={this.setSlide}></div>
              )
            })}
          </div>
        </div> 
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