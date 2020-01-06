import React from "react";
import styles from "../pages/styles/index.module.css"

let slides = [{src: "img/slideShow/ccHome.jpg", alt: "finished home", isActive: true, index: 0},
              {src: "img/slideShow/ccHome2.jpg", alt: "house with housewrap", isAvtive: false, index: 1},
              {src: "img/slideShow/delivery1.jpg", alt: "delivery truck", isAvtive: false, index: 2},
              {src: "img/slideShow/deck.jpg", alt: "deck", isAvtive: false, index: 3},
              {src: "img/slideShow/garageFrame.jpg", alt: "framed garage", isAvtive: false, index: 4},
              {src: "img/slideShow/kitchen.jpg", alt: "kitchen", isAvtive: false, index: 5},
              {src: "img/slideShow/house1.jpg", alt: "house", isAvtive: false, index: 6},
              {src: "img/slideShow/ccFireplace.jpg", alt: "fireplace", isActive: false, index: 7},
              {src: "img/slideShow/metalGarage.jpg", alt: "metalGarage", isAvtive: false, index: 8}
            ];
let slideIndex = 0;

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {src: slides[slideIndex].src, alt: slides[slideIndex].alt, isActive: slides[slideIndex].isActive, index: slides[slideIndex].index};
    this.playPauseRef = React.createRef();
    this.playRef = React.createRef();
    this.pauseRef = React.createRef();
    this.carouselRef = React.createRef();
    //this.setSlide = this.setSlide.bind(this);
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
  nextSlide() {
    if (slideIndex === slides.length - 1) {
      slides[slideIndex].isActive = false;
      this.setState({src: slides[slideIndex].src, alt: slides[slideIndex].alt, isActive: slides[slideIndex].isActive});
      slideIndex = 0;
      slides[slideIndex].isActive = true;
      this.setState({src: slides[slideIndex].src, alt: slides[slideIndex].alt, isAvtive: slides[slideIndex].isActive});
    } else {
      slides[slideIndex].isActive = false;
      this.setState({src: slides[slideIndex].src, alt: slides[slideIndex].alt, isActive: slides[slideIndex].isActive});
      slideIndex++;
      slides[slideIndex].isActive = true;
      this.setState({src: slides[slideIndex].src, alt: slides[slideIndex].alt, isAvtive: slides[slideIndex].isActive});
    }
  }
  autoSlide() {
    this.next = setInterval(this.nextSlide, 3000);
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
    )
  }
}
export default Slideshow;

{/* <div id={styles.slideshow}>
  <Carousel fade={true} interval={2500} pauseOnHover={false}>
    <Carousel.Item>
      <img src="img/slideShow/ccHome.jpg" className={styles.introSlides} alt="finished house" onMouseEnter={this.displayButton} onMouseLeave={this.hideButton} />
    </Carousel.Item>
    <Carousel.Item>
      <img src="img/slideShow/ccHome2.jpg" className={styles.introSlides} alt="house with housewrap" onMouseEnter={this.displayButton} onMouseLeave={this.hideButton} />
    </Carousel.Item>
    <Carousel.Item>
      <img src="img/slideShow/delivery1.jpg" className={styles.introSlides} alt="delivery truck" onMouseEnter={this.displayButton} onMouseLeave={this.hideButton} />
    </Carousel.Item>
  </Carousel>
</div> */}