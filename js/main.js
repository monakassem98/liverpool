// changing logo in header on scrolling
let header = document.querySelector(".head-cont");
window.addEventListener("scroll", function () {
  if (window.scrollY > 70) {
    header.classList.add("fixed");
    document.querySelector(".logo-img").style.display = "none";
    document.querySelector(".lfc").style.display = "block";
  } else {
    header.classList.remove("fixed");
    document.querySelector(".logo-img").style.display = "block";
    document.querySelector(".lfc").style.display = "none";
  }
});

// slider in pre-season section
let rightAngle = document.querySelector(".right-angle");
let leftAngle = document.querySelector(".left-angle");
let cardsCont = document.getElementById("cards-cont");

rightAngle.addEventListener("click", function () {
  cardsCont.style.transform = "translate(-30%, 0%)";
  cardsCont.style.transition = "0.3s";
  cardsCont.style.overflow = "visible";
  rightAngle.style.display = "none";
  leftAngle.style.display = "flex";
});

leftAngle.addEventListener("click", function () {
  cardsCont.style.transform = "translate(0%, 0%)";
  cardsCont.style.transition = "0.3s";
  cardsCont.style.overflow = "hidden";
  rightAngle.style.display = "flex";
  leftAngle.style.display = "none";
});
