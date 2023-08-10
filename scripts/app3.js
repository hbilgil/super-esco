const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

/*
let startSliding = setInterval(getSlides, 10000);
let i=0;

function getSlides() {
  if(i < 2) {
    nextButton.click();
    console.log('at');
    i++;
  } else {
    if(i >= 2 && i < 4) {
      prevButton.click();
      console.log('atma');
      i++;
    } else if(i >= 4) {
      i = 0;
    }
  }
}
*/

    

