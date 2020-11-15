const gallery = document.querySelector('#gallery');
const hamburger_menu = document.querySelector('.hamburger-menu');
const container = document.querySelector('.container');
const main = document.querySelector('.main');
const nav = document.querySelector('.navbar');
const shadow = document.querySelector('.shadow');

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

main.addEventListener('click', () => {
    if (container.classList.toString() === 'container active') {
        main.classList.remove('hide');
        container.classList.toggle('active');
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
var getVal = function (elem, style) {
    return parseInt(window.getComputedStyle(elem).getPropertyValue(style));
};
var getHeight = function (item) {
    return item.height;
};

var resizeAll = function () {
    if (container.classList.toString() === 'container active') {
        main.style.height = `${100}vh`;
    }
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('img').forEach(function (item) {
        var gitem = item.parentElement.parentElement;
        const rez = Math.ceil((item.height + gap) / (altura + gap));
        gitem.style.gridRowEnd = 'span ' + rez;
    });
};
gallery.querySelectorAll('img').forEach(function (item) {
    item.addEventListener('load', function () {
        var altura = getVal(gallery, 'grid-auto-rows');
        var gap = getVal(gallery, 'grid-row-gap');
        var gitem = item.parentElement.parentElement;
        const rez = Math.ceil((item.height + gap) / (altura + gap));
        gitem.style.gridRowEnd = 'span ' + rez;
    });
});
window.addEventListener('resize', resizeAll);
window.addEventListener('DOMContentLoaded', resizeAll);
gallery.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {
        item.classList.toggle('full');
        nav.classList.remove('scrolled');
        if (item.classList.toString() === 'gallery-item full') {
            document.body.classList.add('noscroll');
            document.querySelector('.inner').classList.add('noscroll');
        } else {
            document.querySelector('.inner').classList.remove('noscroll');
            document.body.classList.remove('noscroll');
        }
    });
});
