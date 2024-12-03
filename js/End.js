const endNav = document.querySelector('.endNav');
const neesha = document.querySelector('.neesha');
const presen = document.querySelector(".presentation")
const head = document.querySelector(".image-container")
const logo = document.getElementById("logo")
const BtnX = document.querySelector(".bouton-dark")
const darky = document.getElementById("close-btn")

endNav.addEventListener('animationend', function() {
  presen.style.display = "none";
  endNav.style.display = 'none';
  neesha.style.display = 'grid';
  head.style.display =""
  head.style.backgroundColor = "#000"
  logo.style.backgroundColor = "#000"
  BtnX.style.display = "none"
  darky.style.display = "none"
});