const hamburger_menu = document.querySelector('.hamburger-menu');
const container = document.querySelector('.container');
const main = document.querySelector('.main');
const nav = document.querySelector('.navbar');
const shadow = document.querySelector('.shadow');
const height = shadow.clientHeight;
const inputs = document.querySelectorAll('.input');
const containerContact = document.querySelector('.container-contact');

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add('focus');
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == '') {
        parent.classList.remove('focus');
    }
}

inputs.forEach((input) => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});

hamburger_menu.addEventListener('click', () => {
    container.classList.toggle('active');

    if (container.classList.toString() === 'container active') {
        main.classList.add('hide');
        main.style.height = `${100}vh`;
    } else {
        main.classList.remove('hide');
        setTimeout(() => {
            main.style.height = null;
        }, 500);
    }
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 10) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
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




