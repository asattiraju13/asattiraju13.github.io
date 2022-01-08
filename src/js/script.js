var prev;
var navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    var scroll = window.pageYOffset || this.document.documentElement.scrollTop;
    if (scroll > prev) {
        navbar.style.top = '-100px'
    } else {
        navbar.style.top = '0px'
    }

    prev = scroll;
});

var button = document.querySelector('.menubutton')

button.addEventListener('click', function() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('off');
    dropdown.classList.toggle('on');
});

