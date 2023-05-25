const pageUp = document.querySelector(".page-up");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 450) {
    pageUp.style.display = "flex";
    pageUp.style.visibility =  "visible";
  } else {
    pageUp.style.display = 'none';
  }
});