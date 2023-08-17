// EVENTS CAROUSEL
// const myCarousel = document.getElementById("carouselExampleSlidesOnly");

// myCarousel.addEventListener("slide.bs.carousel", (event) => {
//   // do something...
//   console.log("slide changed");
// });

///////////////////////////////////////
// Reveal Items Slide From Down
const allItemsSlideFromDown = document.querySelectorAll(
  ".item-slide-from-down"
);

const revealItemSlideFromDown = function (entries, observer) {
  //console.log(entries);
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("item-slide-from-down--hidden");
  // entry.target.classList.remove("section--hidden2");
  observer.unobserve(entry.target);
};

const itemSlideFromDownObserver = new IntersectionObserver(
  revealItemSlideFromDown,
  {
    root: null,
    threshold: 0.1,
  }
);

allItemsSlideFromDown.forEach(function (section) {
  itemSlideFromDownObserver.observe(section);
  section.classList.add("item-slide-from-down--hidden");
});

///////////////////////////////////////
// Reveal sections - FROM LEFT
const allItemsSlideFromLeft = document.querySelectorAll(
  ".item-slide-from-left"
);

const revealItemSlideFromLeft = function (entries, observer) {
  //console.log(entries);
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("item-slide-from-left--hidden");
  observer.unobserve(entry.target);
};

const itemSlideFromLeftObserver = new IntersectionObserver(
  revealItemSlideFromLeft,
  {
    root: null,
    threshold: 0.25,
  }
);

allItemsSlideFromLeft.forEach(function (section) {
  itemSlideFromLeftObserver.observe(section);
  section.classList.add("item-slide-from-left--hidden");
});

///////////////////////////////////////
// Reveal Items Slide From Right
const allItemsSlideFromRight = document.querySelectorAll(
  ".item-slide-from-right"
);

const revealItemSlideFromRight = function (entries, observer) {
  //console.log(entries);
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("item-slide-from-right--hidden");
  // entry.target.classList.remove("section--hidden2");
  observer.unobserve(entry.target);
};

const itemSlideFromRightObserver = new IntersectionObserver(
  revealItemSlideFromRight,
  {
    root: null,
    threshold: 0.25,
  }
);

allItemsSlideFromRight.forEach(function (section) {
  itemSlideFromRightObserver.observe(section);
  section.classList.add("item-slide-from-right--hidden");
});

///////////////////////////////////////
// Reveal Items Fade In Effect
const allItemsFadeIn = document.querySelectorAll(".item-fade-in");

const revealItemFadeIn = function (entries, observer) {
  //console.log(entries);
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("item-fade-in--hidden");
  // entry.target.classList.remove("section--hidden2");
  observer.unobserve(entry.target);
};

const itemFadeInObserver = new IntersectionObserver(revealItemFadeIn, {
  root: null,
  threshold: 0.25,
});

allItemsFadeIn.forEach(function (section) {
  itemFadeInObserver.observe(section);
  section.classList.add("item-fade-in--hidden");
});

///////////// DATA ///////////////////

// const menuIcon = document.querySelector(".menu-icon");
// const xBtn = document.querySelector(".x-btn");
// const navigation = document.querySelector(".navigation");
let start = false;

// menuIcon.addEventListener("click", () => {
//   navigation.classList.add("navigate");
// });

// xBtn.addEventListener("click", () => {
//   navigation.classList.remove("navigate");
// });

window.addEventListener("scroll", () => {
  // const about = document.querySelector(".about");
  // const services = document.querySelector(".services");
  // const portfolio = document.querySelector(".portfolio");
  const data = document.querySelector(".data");
  const nums = document.querySelectorAll(".num");

  // if (window.pageYOffset >= 200) {
  //   about.classList.add("change");
  // } else {
  //   about.classList.remove("change");
  // }

  // if (window.pageYOffset >= about.offsetTop + 200) {
  //   services.classList.add("change");
  // } else {
  //   services.classList.remove("change");
  // }

  // if (window.pageYOffset >= services.offsetTop) {
  //   portfolio.classList.add("change");
  // } else {
  //   portfolio.classList.remove("change");
  // }

  // elementOffset = $(".data").offset().top;
  // console.log(elementOffset);
  // console.log(data.offsetTop);
  if (window.scrollY >= data.offsetTop - 300) {
    if (!start) {
      nums.forEach((num) => {
        startCount(num);
      });
    }
    start = true;
  }
});

const startCount = (el) => {
  el.textContent = 0;
  let max = el.dataset.val;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent === max) {
      clearInterval(count);
    }
  }, 5);
};

// // SCROLL-UP FUNCTION
// const myButton = document.getElementById("myBtn");

// // when user scroll down 100 px from the top of the document, show the button

// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (
//     document.body.scrollTop > 100 ||
//     document.documentElement.scrollTop > 100
//   ) {
//     console.log("scrolled");
//     myButton.style.display = "block";
//   } else {
//     myButton.style.display = "none";
//   }
// }

// myButton.addEventListener("click", () => {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// });
