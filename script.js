const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");
const backToTop = document.getElementById("backToTop");
const year = document.getElementById("year");


// --------------------------------
// CURRENT YEAR
// --------------------------------

year.textContent = new Date().getFullYear();


// --------------------------------
// MOBILE MENU
// --------------------------------

menuButton.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("active");

    menuButton.setAttribute(
        "aria-expanded",
        isOpen
    );

    menuButton.textContent =
        isOpen ? "Close" : "Menu";

});


// Close menu after clicking a link

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuButton.textContent = "Menu";

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


// --------------------------------
// BACK TO TOP
// --------------------------------

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// --------------------------------
// SIMPLE PROJECT HOVER
// --------------------------------

document.querySelectorAll(".project").forEach(project => {

    project.addEventListener("mouseenter", () => {

        const arrow =
            project.querySelector(".project-arrow");

        if (arrow) {
            arrow.textContent = "→";
        }

    });


    project.addEventListener("mouseleave", () => {

        const arrow =
            project.querySelector(".project-arrow");

        if (arrow) {
            arrow.textContent = "↗";
        }

    });

});