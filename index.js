let currentSlideIndex = 1;
const totalSlide = 3;
let timeout;
function slideShow() {
  clearInterval(timeout);
  timeout = setTimeout(next, 3000);
}
function next() {
  let nextSlideIndex = currentSlideIndex + 1;
  const currentSlide = document.getElementById(currentSlideIndex);
  if (currentSlideIndex === totalSlide) {
    nextSlideIndex = 1;
  }
  const nextSlide = document.getElementById(nextSlideIndex);
  currentSlide.classList.remove("active");
  nextSlide.classList.add("active");
  currentSlideIndex = nextSlideIndex;
  slideShow();
}
function prev() {
  let prevSlideIndex = currentSlideIndex - 1;
  const currentSlide = document.getElementById(currentSlideIndex);
  if (currentSlideIndex === 1) {
    prevSlideIndex = totalSlide;
  }
  const prevSlide = document.getElementById(prevSlideIndex);
  currentSlide.classList.remove("active");
  prevSlide.classList.add("active");
  currentSlideIndex = prevSlideIndex;
  slideShow();
}

const nextbtn = document.querySelector(".next");
nextbtn.addEventListener("click", () => next());
const prevbtn = document.querySelector(".prev");
prevbtn.addEventListener("click", () => prev());
slideShow();
