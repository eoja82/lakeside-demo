import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/slideshow.module.css";
import { withPrefix } from "gatsby";

let slideData = [
  {src: "img/slideShow/twoTrucks.jpg", alt: "two delivery trucks"},
  {src: "img/slideShow/truckTRT.jpg", alt: "truck with treated lumber"},
  {src: "img/slideShow/catUnloading.jpg", alt: "bobcat unloading lumber"}
];

function Slideshow() {
  const [slides] = useState(slideData);
  const [slideIndex, setSlideIndex] = useState(0);
  const playPauseRef = useRef(null);
  const playRef = useRef(null);
  const pauseRef = useRef(null);
  let autoSlide = useRef();
  let paused = useRef(false);
  let playDelay = useRef();

  const play = () => {
    paused.current = false;
    playDelay.current = setTimeout(nextSlide, 2000);
    pauseRef.current.style.display = "block";
    playRef.current.style.display = "none";
  };
  const pause = () => {
    clearInterval(autoSlide.current);
    paused.current = true;
    pauseRef.current.style.display = "none";
    playRef.current.style.display = "block";
  };
  const displayButton = () => {
    playPauseRef.current.style.display = "block";
  };
  const hideButton = () => {
    playPauseRef.current.style.display = "none";
  };
  const prevSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(slides.length - 1);
    } else {
      setSlideIndex(prevSlideIndex => prevSlideIndex - 1);
    }
  };
  const nextSlide = () => {
    if (playDelay.current) clearTimeout(playDelay);
    if (slideIndex === slides.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(prevSlideIndex => prevSlideIndex + 1);
    }
  };
  
  useEffect(() => {
    if (!paused.current) {
      autoSlide.current = setInterval(nextSlide, 4000);
      return () => {
        clearInterval(autoSlide.current)
      }
    }
  });

  return (
      <div id={styles.slideshow} onMouseEnter={displayButton} onMouseLeave={hideButton} role="presentation">
      <div id={styles.introSlides}>
        {slides.map( (slide, index) => {
          let position = styles.nextSlide;
          if (slideIndex === index) position = styles.activeSlide;
          if (index === slideIndex - 1 || 
            (slideIndex === 0 && index === slides.length - 1)) position = styles.prevSlide
          return (
            <div className={styles.imgWrapper + " " + position} key={index}>
              <img src={withPrefix(slide.src)} alt={slide.alt} className={styles.slide} />
            </div>
          )
        })}
      </div>
      {/* mouse enter/leave, hide play/pause when hover over arrows */} 
      <button id={styles.prev} onClick={prevSlide} onMouseEnter={hideButton} onMouseLeave={displayButton} aria-label="previous slide"><i className="fa fa-angle-left"></i></button>
      <button id={styles.next} onClick={nextSlide} onMouseEnter={hideButton} onMouseLeave={displayButton} aria-label="next slide"><i className="fa fa-angle-right"></i></button>
      <div id={styles.playPause} ref={playPauseRef} style={{display: "none"}} role="presentation">
        <button onClick={play} style={{display: "none"}} id={styles.play} ref={playRef}>
          <i className="fa fa-play"></i>
        </button>
        <button onClick={pause} style={{display: "block"}} id={styles.pause} ref={pauseRef}>
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

export default Slideshow;