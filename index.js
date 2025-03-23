// script para header sticky y para agregar clase al header al hacer scroll
/*document.addEventListener("scroll", function () {
    let header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.remove("sm:px-16", "px-8", "pt-8", "sm:pt-12", "lg:pt-16");
        header.classList.add("px-0", "pt-4");
        header.classList.remove("absolute");
        header.classList.add("sticky");
       
    } else {
        header.classList.remove("px-0", "pt-4");
        header.classList.add("sm:px-16", "px-8", "pt-8", "sm:pt-12", "lg:pt-16");
        header.classList.remove("sticky");
        header.classList.add("absolute");
    }
});
document.addEventListener("scroll", function () {
    let header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.remove("sm:px-16", "px-8", "pt-8", "sm:pt-12", "lg:pt-16");
        header.classList.add("px-0", "pt-4", "top-0", "sticky");
        header.classList.remove("absolute");
    } else {
        header.classList.remove("px-0", "pt-4", "sticky");
        header.classList.add("sm:px-16", "px-8", "pt-8", "sm:pt-12", "lg:pt-16", "absolute");
    }
});
*/
document.addEventListener("scroll", function () {
    let header = document.querySelector("header");

    if (window.scrollY > 50) {
        // Sticky: padding reducido
        header.classList.add("pt-4", "px-4", "sm:px-6", "lg:px-10");
        header.classList.remove("pt-8", "px-8", "sm:pt-12", "sm:px-12", "lg:pt-16", "lg:px-16");
    } else {
        // Arriba: padding normal
        header.classList.add("pt-8", "px-8", "sm:pt-12", "sm:px-12", "lg:pt-16", "lg:px-16");
        header.classList.remove("pt-4", "px-4", "sm:px-6", "lg:px-10");
    }
});







//script para pausar carrusel
const carousel = document.getElementById("carousel");
const groups = carousel.querySelectorAll(".group");

carousel.addEventListener("mouseenter", () => {
    groups.forEach(group => group.style.animationPlayState = "paused");
});

carousel.addEventListener("mouseleave", () => {
    groups.forEach(group => group.style.animationPlayState = "running");
});

//Script para abrir menú toggle tablet y móvil
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.remove("translate-x-full");
});

document.getElementById("close-menu").addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.add("translate-x-full");
});
  


