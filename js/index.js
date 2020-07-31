const menuBtn = document.querySelector(".menu-btn");
const navBar = document.getElementById("nav-bar");
const isBody = document.querySelector("body");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  /* nav animation */
  navBar.classList.toggle("nav-active");
  navBar.classList.toggle("fade-in");

  /* hamburger button animation */
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    isBody.classList.toggle("stop-scroll");
  } else {
    /* close hamburger menu */
    menuBtn.classList.remove("open");
    menuOpen = false;
    isBody.classList.toggle("stop-scroll");
  }
});

function cardActive() {
  alert("hi");
}

// Work cards selection function

const radios = document.querySelectorAll(".card__selector");

for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener("change", () => {
    for (let j = 0; j < radios.length; j++) {
      radios[j].parentElement.querySelector(".card__active").style.display =
        "none";
      radios[j].parentElement.querySelector(".card__img").style.width = "100%";
      radios[j].parentElement.querySelector(".card__img").style.filter =
        "blur(0px)";
    }
    radios[i].parentElement.querySelector(".card__active").style.display =
      "block";
    radios[i].parentElement.querySelector(".card__img").style.width = "140%";
    radios[i].parentElement.querySelector(".card__img").style.filter =
      "blur(5px)";
  });
}
