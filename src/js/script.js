var prev;
var navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    var scroll = window.pageYOffset || this.document.documentElement.scrollTop;
    if (scroll > prev && window.pageYOffset > 0) {
        navbar.style.top = '-100px'
    } else if (scroll <= prev) {
        navbar.style.top = '0px'
    }
    prev = scroll;
});

var dropdown = document.querySelector('.dropdown');
var button = document.querySelector('.menubutton');

window.addEventListener('load', function() {
    dropdown.classList.add('load_animation');
})

var navbarScroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 400
});

// document.querySelector('.arrow-button').addEventListener('mouseout', function() {
//     document.querySelector('.arrow-button').classList.add('hovered')
// })

// document.querySelector('.menubutton').addEventListener('mouseout', function() {
//     document.querySelector('.menubutton').classList.add('hovered')
// })

function toggleDropdown(event) {
    dropdown.classList.toggle('off');
    dropdown.classList.toggle('on');

    var links = document.getElementsByClassName('link')
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {
            dropdown.classList.remove('on');
            dropdown.classList.add('off');
        })
    }

    if (dropdown.classList.contains('on')) {
        document.addEventListener('click', function(event) {
            console.log('event');
            var isClickInsideDropdown = dropdown.contains(event.target);
            var isClickInsideButton = button.contains(event.target);
    
            if (!isClickInsideDropdown && !isClickInsideButton ) {
                dropdown.classList.remove('on');
                dropdown.classList.add('off');
            }
        });
    }
}

button.addEventListener('click',toggleDropdown);

function hideDropdown() {
    dropdown.classList.remove('on');
    dropdown.classList.add('off');
}

document.addEventListener('scroll', hideDropdown);


