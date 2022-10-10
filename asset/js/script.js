
window.addEventListener("scroll", () => {
    // fonction menu sticky
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Afficher les liens du menu
function toggleMobilMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("MobilMenu");
}


let typed = new Typed(".auto-type", {
    strings: [
        "Développeur Angular - Vue.js",
        "Webmaster",
        "Intégrateur Web"
    ],
    typeSpeed: 80,
    backSpeed: 70,
    loop: true,
})