const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton) {
    menuButton.addEventListener("click", function () {

        mobileMenu.classList.toggle("active");

    });
}


const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("active");

    });

});


const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(8, 8, 8, 0.95)";

    } else {

        navbar.style.background = "rgba(8, 8, 8, 0.75)";

    }

});


console.log("Fit Master Gym website loaded.");