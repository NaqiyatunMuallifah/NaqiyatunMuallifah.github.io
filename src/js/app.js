const textArea = document.querySelector('.text-area');
const bannerArea = document.querySelector('.banner-area');

window.addEventListener('scroll', function () {
    const value = window.scrollY;

    textArea.classList.toggle("hide", value > 0);
    bannerArea.style.clipPath = "circle(" + value + "px at center)";
})