const hamburger_menu = document.querySelector('.hamburger-menu');
const container = document.querySelector('.container');
const removeBtn = document.querySelector('.play-btn');
const main = document.querySelector('.main');
const nav = document.querySelector('.navbar');
const shadow = document.querySelector('.shadow');
const overlay = document.querySelector('.overlay');

hamburger_menu.addEventListener('click', () => {
    container.classList.toggle('active');
});

main.addEventListener('click', () => {
    if (container.classList.toString() === 'container active') {
        main.classList.remove('hide');
        container.classList.toggle('active');
        setTimeout(() => {
            main.style.height = null;
        }, 500);
    }
});

// Quote

const ul = document.querySelector('#slides');
const slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 6000);

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    slides.forEach((slide) => {
        slide.style.minWidth = `${ul.clientWidth}px !important`;
        console.log('nextSlide -> slide.style.width', slide.style.width);
        if (currentSlide === 0) {
            slide.style.transition = 'none';
        } else {
            slide.style.transition = 'transform 0.3s ease-in';
        }
        slide.style.transform = `translate(-${currentSlide * ul.clientWidth}px, 0)`;
    });
}

const fn = () => {
    slides.forEach((li) => {
        li.style.minWidth = `${ul.clientWidth}px`;
        console.log("fn ->  li.style.widt",  li.style.width)
    });
};

window.onload = fn;

window.onresize = fn;
