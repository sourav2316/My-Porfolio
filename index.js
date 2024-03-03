const menuIcon = document.querySelector("#menuIcon");
const navbar = document.querySelector(".navBar");

document.getElementById("menuIcon").addEventListener("click", function () {
  let navbar = document.querySelector(".navbar");
  navbar.style.display =
    navbar.style.display === "none" || navbar.style.display === ""
      ? "flex"
      : "none";
});

//Readmore Button
const parentContainer = document.querySelector(".aboutContent");

parentContainer.addEventListener("click", (event) => {
  const current = event.target;

  const isReadMoreBtn = current.className.includes("readmoreBtn");

  if (!isReadMoreBtn) return;

  const currentText = event.target.parentNode.querySelector(".readmore");

  currentText.classList.toggle("readmore--show");

  current.textContent = current.textContent.includes("Read More")
    ? "Read Less"
    : "Read More";
});

// Scroll and Typed Bar //

ScrollReveal({
  distance: "80px",
  duration: "1000",
  delay: 100,
});

ScrollReveal().reveal(".homeContent, heading", { origin: "top" });
ScrollReveal().reveal(".homeImg, .servicesCont, .projectBox, .contact form", {
  origin: "bottom",
});
ScrollReveal().reveal(".homeContent h1, .aboutImg, .name, .posi", {
  origin: "left",
});
ScrollReveal().reveal(".homeContent p, .aboutContent", { origin: "right" });

//Typed Js
var typed = new Typed(".multipleText", {
  strings: ["Frontend Developer", "Youtuber"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});
