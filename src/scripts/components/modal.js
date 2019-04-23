var cards = document.querySelectorAll('.card');
var overlay = document.querySelector('.modal-overlay');
var modal = document.querySelector('.modal-card');
var closeBtn = document.querySelector('.modal-card__close');

overlay.addEventListener('click', function () {
    modal.classList.remove('modal-card--open');
    overlay.classList.remove('modal-overlay--show');
});

closeBtn.addEventListener('click', function () {
    modal.classList.remove('modal-card--open');
    overlay.classList.remove('modal-overlay--show');
});

document.addEventListener('keydown', function (event) {
    let key = event.keyCode;
    if (key === 27) {
        modal.classList.remove('modal-card--open');
        overlay.classList.remove('modal-overlay--show');
    }
});

for (let i = 0; i < cards.length; i++) {
    console.log('cards', i);
    cards[i].addEventListener('click', function () {
        console.log('let i', i);
        console.log(cards[i]);
        modal.classList.add('modal-card--open');
        overlay.classList.add('modal-overlay--show');
    });
}

// $('.card').click(function () {
//     modal.classList.add('modal-card--open');
//     overlay.classList.add('modal-overlay--show');
// });
