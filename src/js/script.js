var prev;
var navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    var scroll = window.pageYOffset || this.document.documentElement.scrollTop;
    if (scroll > prev && window.pageYOffset > 0) {
        navbar.style.top = '-100px'
    } else {
        navbar.style.top = '0px'
    }
    prev = scroll;
});

document.querySelector('.arrow-button').addEventListener('mouseout', function() {
    document.querySelector('.arrow-button').classList.add('hovered')
})

function toggleDropdown(event) {
    var dropdown = document.querySelector('.dropdown');
    
    dropdown.classList.toggle('off');
    dropdown.classList.toggle('on');

    var links = document.getElementsByClassName('link')
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {
            dropdown.classList.remove('on');
            dropdown.classList.add('off');
        })
    }
}

var button = document.querySelector('.menubutton');
button.addEventListener('click',toggleDropdown);

function hideDropdown() {
    var dropdown = document.querySelector('.dropdown');
    console.log(dropdown.classList);
    dropdown.classList.remove('on');
    dropdown.classList.add('off');
}

//button.addEventListener('blur', hideDropdown);
document.addEventListener('scroll', hideDropdown);


