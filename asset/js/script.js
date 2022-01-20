// Declaration des variables
const getOverlay = document.querySelector(".overlay");
const closeDesktop = document.querySelector(".closeBtnDesktop");


// fonction pour definir le delais de overlay
window.addEventListener("load", () => { setTimeout(() => { getOverlay.classList.add("show"); }, 1000) });
closeDesktop.addEventListener("click", () => { getOverlay.classList.remove("show"); });