import React from "react";
import styles from "../pages/styles/index.module.css"

let slides = [{src: "img/slideShow/ccHome.jpg", alt: "finished home"},
              {src: "img/slideShow/ccHome2.jpg", alt: "house with housewrap"},
              {src: "img/slideShow/delivery1.jpg", alt: "delivery truck"},
              {src: "img/slideShow/deck.jpg", alt: "deck"},
              {src: "img/slideShow/garageFrame.jpg", alt: "framed garage"},
              {src: "img/slideShow/kitchen.jpg", alt: "kitchen"},
              {src: "img/slideShow/house1.jpg", alt: "house"},
              {src: "img/slideShow/ccFireplace.jpg", alt: "fireplace"},
              {src: "img/slideShow/metalGarage.jpg", alt: "metalGarage"}
            ];
let slideIndex = 0;

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {src: slides[slideIndex].src, alt: slides[slideIndex].alt, isActive: slides[slideIndex].isActive, index: slides[slideIndex].index};
    this.playPauseRef = React.createRef();
    this.playRef = React.createRef();
    this.pauseRef = React.createRef();
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.hideButton = this.hideButton.bind(this);
    this.displayButton = this.displayButton.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.autoSlide = this.autoSlide.bind(this);
  }
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
  }
  render() {
    return (
       <div id={styles.slideshow} onMouseEnter={this.displayButton} onMouseLeave={this.hideButton} role="presentation">
        <img src={this.state.src} alt={this.state.alt} id={styles.introSlides} />
        {/* mouse enter/leave, hide play/pause when hover over arrows */} 
        <button id={styles.prev} onClick={this.prevSlide} onMouseEnter={this.hideButton} onMouseLeave={this.displayButton}><i className="fa fa-angle-left"></i></button>
        <button id={styles.next} onClick={this.nextSlide} onMouseEnter={this.hideButton} onMouseLeave={this.displayButton}><i className="fa fa-angle-right"></i></button>
        <div id={styles.playPause} ref={this.playPauseRef} style={{display: "none"}} role="presentation">
          <button onClick={this.play} style={{display: "none"}} id={styles.play} ref={this.playRef}>
            <i className="fa fa-play"></i>
          </button>
          <button onClick={this.pause} style={{display: "block"}} id={styles.pause} ref={this.pauseRef}>
            <i className="fa fa-pause"></i>
          </button>
        </div>
        <div id={styles.slideDots}>
          {slides.map( (x, i) => {
            let isActive = i === slideIndex ? true : false;
            return (
              <div className={styles.slideDot + " " + (isActive ? styles.activeDot : "")} key={`${x.alt}${i}`}></div>
            )
          })}
        </div>
      </div>
    )
  }
}
export default Slideshow;