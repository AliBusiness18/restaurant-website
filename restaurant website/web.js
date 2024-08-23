const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");
const menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
  
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });
navbar.addEventListener("click", (e) => {
    navbar.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrolRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal("header", {
    ...scrolRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".image", {
    ...scrolRevealOption,
    origin: "right",
    delay: 500,
});
ScrollReveal().reveal(".active", {
    ...scrolRevealOption,
    origin: "top",
    delay: 500,
});ScrollReveal().reveal(".active1", {
    ...scrolRevealOption,
    origin: "bottom",
    delay: 700,
});
ScrollReveal().reveal(".active2", {
    ...scrolRevealOption,
    origin: "top",
    delay: 900,
});
ScrollReveal().reveal(".active3", {
    ...scrolRevealOption,
    origin: "bottom",
    delay: 1100,
});
ScrollReveal().reveal(".active4", {
    ...scrolRevealOption,
    origin: "top",
    delay: 1300,
});
ScrollReveal().reveal(".content h1", {
    ...scrolRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".content p", {
    ...scrolRevealOption,
    delay: 1500,
});
ScrollReveal().reveal("#btn", {
    ...scrolRevealOption,
    delay: 2000,
});
ScrollReveal().reveal(".card", {
    ...scrollRevealOption,
    interval: 1000,
  });
  ScrollReveal().reveal(".event__image", {
    duration: 1000,
  });