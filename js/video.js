const hamburger_menu = document.querySelector('.hamburger-menu');
const container = document.querySelector('.container');
const main = document.querySelector('.main');
const nav = document.querySelector('.navbar');
const shadow = document.querySelector('.shadow');
const height = shadow.clientHeight;

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

var gallery = document.querySelector('#gallery');
var getVal = function (elem, style) {
    return parseInt(window.getComputedStyle(elem).getPropertyValue(style));
};
var getHeight = function (item) {
    return item.querySelector('.content').clientHeight;
};
var resizeAll = function () {
    gallery.querySelectorAll('iframe').forEach(function (item) {
        var altura = getVal(gallery, 'grid-auto-rows');
        var gap = getVal(gallery, 'grid-row-gap');
        var gitem = item.parentElement.parentElement;
        gitem.style.gridRowEnd = 'span ' + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
    });
};

gallery.querySelectorAll('iframe').forEach(function (item) {
    item.addEventListener('canplay', function () {
        var altura = getVal(gallery, 'grid-auto-rows');
        var gap = getVal(gallery, 'grid-row-gap');
        var gitem = item.parentElement.parentElement;
        gitem.style.gridRowEnd = 'span ' + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
    });
});

window.addEventListener('resize', resizeAll);
window.addEventListener('DOMContentLoaded', resizeAll);
gallery.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {
        item.classList.toggle('full');
    });
});
