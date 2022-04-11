const navToggler = document.querySelector(".navbar-toggler");

navToggler.addEventListener("click", () => {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    nav.style.height = nav.scrollHeight + "px";
  } else {
    nav.style.height = "";
  }
});

let links = document.getElementById("links");
let linksItems = links.querySelectorAll("li a");
for (let i = 0; i < linksItems.length; i++) {
  linksItems[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}

// const pics = document.querySelectorAll("img");
// pics.forEach((pic) => {
//   pic.addEventListener("click", () => {
//     pic.classList.toggle("big-doggo");
//   });
// });

const switchBtn = document.querySelector("#flexSwitchCheckDefault");
const darkModeIcon = document.querySelector("#dark-mode-icon");
switchBtn.addEventListener("change", () => {
  darkModeIcon.classList.toggle("fa-sun");
  document.body.classList.toggle("dark-mode");
  document.querySelector("header").classList.toggle("dark-mode-nav");
  document.body.classList.toggle("text-white");
});

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const update = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    if (c < target) {
      counter.innerText++;
      setTimeout(update, 1);
    } else {
      counter.innerText = target;
    }
  };
  update();
});




