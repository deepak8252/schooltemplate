const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 60) { // Use pageYOffset for vertical scroll position
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
