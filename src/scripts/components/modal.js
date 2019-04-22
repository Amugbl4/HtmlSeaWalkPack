var card = document.querySelector('.card');
var overlay = document.querySelector('.modal-overlay');
var modal = document.querySelector('.modal-card');
var closebtn = document.querySelector('.modal-card__close');
card.addEventListener('click', function(){
    modal.classList.add('modal-card--open');
    overlay.classList.add('modal-overlay--show');
});
closebtn.addEventListener('click', function(){
    modal.classList.remove('modal-card--open');
    overlay.classList.remove('modal-overlay--show');
});