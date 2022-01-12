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

document.querySelector('.arrow-button').addEventListener('mouseout', function() {
    document.querySelector('.arrow-button').classList.add('hovered')
})

function toggleDropdown(event) {
    var dropdown = document.querySelector('.dropdown');
    
    dropdown.classList.toggle('off');
    //animations
    dropdown.classList.toggle('on');
    
    if (event.relatedTarget) {
        if (event.relatedTarget.classList.contains('link')) {
            location = event.relatedTarget.getAttribute('href');
            if (event.relatedTarget.classList.contains('resume')) {

            } else {
                window.open(location,"_blank");
            }
            console.log(event.relatedTarget)
        }
    }
}

var button = document.querySelector('.menubutton')

button.addEventListener('click',toggleDropdown);
button.addEventListener('blur', toggleDropdown);

document.addEventListener('scroll', function() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.classList.remove('on');
    dropdown.classList.add('off');
});


