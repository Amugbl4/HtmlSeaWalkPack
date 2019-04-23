var menuBtn = document.querySelector('.header__nav-toggle');
var body = document.querySelector('body');
var menu = document.querySelector('.main-nav__list');

document.addEventListener('click', function () {
    body.classList.remove('menu-opened')
});

document.addEventListener('keydown', function (event) {
    let key = event.keyCode;
    if (key === 27) {
        body.classList.remove('menu-opened');
    }
})

menuBtn.addEventListener('click', function (event) {
    body.classList.toggle('menu-opened');
    event.stopPropagation();
});

menu.addEventListener('click', function (event) {
    event.stopPropagation();
});
