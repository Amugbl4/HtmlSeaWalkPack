var menu = document.querySelector('.header__nav-toggle');
var body = document.querySelector('body');
menu.addEventListener('click', function () {
    body.classList.toggle('menu-opened');
}) 