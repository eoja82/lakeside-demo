import React from "react"
import Layout from "../components/layout"
import indexStyles from "./index.module.css"

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
  //nextSlide = setInterval(this.newSlide, 2000);
  componentDidMount() {
    this.nextSlide();
  }
  componentWillUnmount() {
    clearInterval(this.nextSlide);
  }

  render() {

    return (
      <Layout>
      <div id={indexStyles.intro}>
        <div id={indexStyles.about}>
          <h3>Lakeside Lumber is your source for:</h3>
          <div id={indexStyles.aboutList}>
            <ul>
              <li>Lumber</li>
              <li>Hardware</li>
              <li>Paints & Stain</li>
              <li>Roofing</li>
            </ul>
            <ul>
              <li>Doors</li>
              <li>Windows</li>
              <li>Docks</li>
              <li>And More!</li>
            </ul>
          </div>
        </div>
        <div id={indexStyles.slideshow}>
          <img src={this.state.src} alt={this.state.alt} className={indexStyles.introSlides} onClick={this.newSlide} />
          {/* <img src="img/slideShow/houseWDeck.jpg" alt="house with deck" className={indexStyles.introSlides} />
          <img src="img/slideShow/deck.jpg" alt="deck" className={indexStyles.introSlides} />
          <img src="img/slideShow/delivery1.jpg" alt="delivery truck" className={indexStyles.introSlides} />
          <img src="img/slideShow/garageFrame.jpg" alt="framed garage" className={indexStyles.introSlides} />
          <img src="img/slideShow/lightLogo.jpg" alt="Lakeside Lumber" className={indexStyles.introSlides} />
          <img src="img/slideShow/garageFinished.jpg" alt="finished garage" className={indexStyles.introSlides} />
          <img src="img/slideShow/house1.jpg" alt="house" className={indexStyles.introSlides} />
          <img src="img/slideShow/metalGarage.jpg" alt="metalGarage" className={indexStyles.introSlides} /> */}
        </div>
      </div>
    </Layout>
    )
  }
}

export default Index

/* export default () => {
  return (
    <Layout>
      <div id={indexStyles.intro}>
        <div id={indexStyles.about}>
          <h3>Lakeside Lumber is your source for:</h3>
          <div id={indexStyles.aboutList}>
            <ul>
              <li>Lumber</li>
              <li>Hardware</li>
              <li>Paints & Stain</li>
              <li>Roofing</li>
            </ul>
            <ul>
              <li>Doors</li>
              <li>Windows</li>
              <li>Docks</li>
              <li>And More!</li>
            </ul>
          </div>
        </div>
        <div id={indexStyles.slideshow}>
          <img src="img/slideShow/kitchen.jpg" alt="kitchen" className={indexStyles.introSlides} />
          <img src="img/slideShow/houseWDeck.jpg" alt="house with deck" className={indexStyles.introSlides} />
          <img src="img/slideShow/deck.jpg" alt="deck" className={indexStyles.introSlides} />
          <img src="img/slideShow/delivery1.jpg" alt="delivery truck" className={indexStyles.introSlides} />
          <img src="img/slideShow/garageFrame.jpg" alt="framed garage" className={indexStyles.introSlides} />
          <img src="img/slideShow/lightLogo.jpg" alt="Lakeside Lumber" className={indexStyles.introSlides} />
          <img src="img/slideShow/garageFinished.jpg" alt="finished garage" className={indexStyles.introSlides} />
          <img src="img/slideShow/house1.jpg" alt="house" className={indexStyles.introSlides} />
          <img src="img/slideShow/metalGarage.jpg" alt="metalGarage" className={indexStyles.introSlides} />
        </div>
      </div>
    </Layout>
  )
} */