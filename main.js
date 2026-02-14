const loader = document.getElementById("preloader");

window.addEventListener("load", () => {
  if (loader) {
    loader.style.display = "none";
  }

  const heyBanner = document.querySelector(".hey");
  if (heyBanner) {
    heyBanner.classList.add("popup");
  }
});

const mobileToggleMenu = document.getElementById("mobiletogglemenu");
const burgerBar1 = document.getElementById("burger-bar1");
const burgerBar2 = document.getElementById("burger-bar2");
const burgerBar3 = document.getElementById("burger-bar3");

function toggleBurgerAnimations(action) {
  const method = action === "remove" ? "remove" : "toggle";

  if (burgerBar1) {
    burgerBar1.classList[method]("hamburger-animation1");
  }
  if (burgerBar2) {
    burgerBar2.classList[method]("hamburger-animation2");
  }
  if (burgerBar3) {
    burgerBar3.classList[method]("hamburger-animation3");
  }
}

function hamburgerMenu() {
  document.body.classList.toggle("stopscrolling");

  if (mobileToggleMenu) {
    mobileToggleMenu.classList.toggle("show-toggle-menu");
  }

  toggleBurgerAnimations("toggle");
}

function hidemenubyli() {
  document.body.classList.toggle("stopscrolling");

  if (mobileToggleMenu) {
    mobileToggleMenu.classList.remove("show-toggle-menu");
  }

  toggleBurgerAnimations("remove");
}

const sections = document.querySelectorAll("section");
const desktopNavItems = document.querySelectorAll(
  ".navbar .navbar-tabs .navbar-tabs-ul li"
);
const mobileNavItems = document.querySelectorAll(
  ".mobiletogglemenu .mobile-navbar-tabs-ul li"
);

window.addEventListener("scroll", () => {
  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 200) {
      currentSectionId = section.getAttribute("id") || "";
    }
  });

  mobileNavItems.forEach((item) => {
    item.classList.remove("activeThismobiletab");
    if (currentSectionId && item.classList.contains(currentSectionId)) {
      item.classList.add("activeThismobiletab");
    }
  });

  desktopNavItems.forEach((item) => {
    item.classList.remove("activeThistab");
    if (currentSectionId && item.classList.contains(currentSectionId)) {
      item.classList.add("activeThistab");
    }
  });
});

console.log(
  "%c Designed and Developed by Vinod Jangid ",
  "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;"
);

const backToTopButton = document.getElementById("backtotopbutton");
const scrollThreshold = 400;

function scrollFunction() {
  if (!backToTopButton) {
    return;
  }

  const shouldShow =
    document.body.scrollTop > scrollThreshold ||
    document.documentElement.scrollTop > scrollThreshold;
  backToTopButton.style.display = shouldShow ? "block" : "none";
}

function scrolltoTopfunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener("scroll", scrollFunction);

document.addEventListener(
  "contextmenu",
  (event) => {
    if (event.target && event.target.nodeName === "IMG") {
      event.preventDefault();
    }
  },
  false
);

const pupils = Array.from(document.getElementsByClassName("footer-pupil"));
const pupilStartPoint = -10;
const pupilRangeX = 20;
const pupilRangeY = 15;
const mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let mouseYEndPoint = window.innerHeight;
let mouseXRange = mouseXEndPoint - mouseXStartPoint;
let currentXPosition = 0;
let currentYPosition = 0;

const handleMouseMove = (event) => {
  if (!pupils.length || mouseXRange === 0 || mouseYEndPoint === 0) {
    return;
  }

  currentXPosition = event.clientX - mouseXStartPoint;
  currentYPosition = event.clientY;

  const fracXValue = currentXPosition / mouseXRange;
  const fracYValue = currentYPosition / mouseYEndPoint;

  const translateX = pupilStartPoint + fracXValue * pupilRangeX;
  const translateY = pupilStartPoint + fracYValue * pupilRangeY;

  pupils.forEach((pupil) => {
    pupil.style.transform = `translate(${translateX}px, ${translateY}px)`;
  });
};

const handleResize = () => {
  mouseXEndPoint = window.innerWidth;
  mouseYEndPoint = window.innerHeight;
  mouseXRange = mouseXEndPoint - mouseXStartPoint;
};

window.addEventListener("mousemove", handleMouseMove);
window.addEventListener("resize", handleResize);
