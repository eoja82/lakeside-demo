let slides = document.querySelectorAll(".introSlides");

let slideIndex = 0;
function newSlide() {
  slides.forEach( x => x.style.display = "none");
  slideIndex++;
  if (slides.length < slideIndex) {
    slideIndex = 1;
  } 
  slides[slideIndex - 1].style.display = "block";
  
  setTimeout(newSlide, 2000);
}
newSlide();