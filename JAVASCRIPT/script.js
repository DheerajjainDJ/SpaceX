const hamburgerBtn = document.getElementById("menu-button");
const overlay = document.getElementById("overlay");
const mobileMenu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll(".counter");
let scrollStatus = false;

document.addEventListener("scroll", scrollPage);

function scrollPage() {
  const scrollValue = window.scrollY;

  if (scrollValue > 100 && !scrollStatus) {
    counterUp();
    scrollStatus = true;
  } else if (scrollValue < 100 && scrollStatus) {
    reset();
    scrollStatus = false;
  }
}

hamburgerBtn.addEventListener("click", buttonToggle);

function buttonToggle() {
  hamburgerBtn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  mobileMenu.classList.toggle("show-mobile-menu");
}

const counterUp = () => {
  counters.forEach((counter) => {
    counter.innerText = 0;

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const c = +counter.innerText;

      const increment = target / 100;

      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 35);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
};

const reset = () => {
  counters.forEach((counter) => (counter.innerHTML = "0"));
};
