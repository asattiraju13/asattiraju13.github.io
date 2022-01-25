
// Navbar positioning based on scroll
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

// Dropdown and button mechanics
var dropdown = document.querySelector('.dropdown');
var button = document.querySelector('.menubutton');
var menu_icon = document.querySelector('.menuicon');
var x_icon = document.querySelector('.xicon');

window.addEventListener('load', function() {
    dropdown.classList.add('load_animation');
    if (this.window.innerWidth > 949) {
        setTimeout(() => {
            document.querySelector('.profile-pic').classList.add('load_profile');
        },250)
        setTimeout(() => {
            document.querySelector('.main-desc').classList.add('load_profile');
            document.querySelector('.sub-desc').classList.add('load_subdesc');
        }, 750)
    } else {
        setTimeout(() => {
            document.querySelector('.main-desc').classList.add('load_profile');
            document.querySelector('.sub-desc').classList.add('load_subdesc');
        }, 100)
        setTimeout(() => {
            document.querySelector('.profile-pic').classList.add('load_profile');
        },0)
    }
    
})

var navbarScroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 1000
});

// document.querySelector('.arrow-button').addEventListener('mouseout', function() {
//     document.querySelector('.arrow-button').classList.add('hovered')
// })

// document.querySelector('.menubutton').addEventListener('mouseout', function() {
//     document.querySelector('.menubutton').classList.add('hovered')
// })

window.addEventListener('resize', function() {
    console.log(button.classList)
    if (this.window.innerWidth > 949) {
        button.classList.remove('fadein');
        button.classList.remove('fadeout');
        dropdown.classList.remove('on');
        dropdown.classList.add('off');

        profile = document.querySelector('.profile-pic');
        profile.classList.remove('load_profile');
        profile.classList.remove('opacity-0');
        profile.classList.add('opacity-1');
    }
})

button.addEventListener('click', function (event) {
    dropdown.classList.toggle('off');
    dropdown.classList.toggle('on');
    if (dropdown.classList.contains('on')) {
        button.classList.add('fadein');
        button.classList.remove('fadeout');
    } else {
        button.classList.remove('fadein');
        button.classList.add('fadeout');
    }

    var links = document.getElementsByClassName('link')
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {
            dropdown.classList.remove('on');
            dropdown.classList.add('off');
            button.classList.remove('fadein');
            button.classList.add('fadeout');
        })
    }

    if (dropdown.classList.contains('on')) {
        document.addEventListener('click', function(event) {
            var isClickInsideDropdown = dropdown.contains(event.target);
            var isClickInsideButton = button.contains(event.target);
    
            if (!isClickInsideDropdown && !isClickInsideButton ) {
                dropdown.classList.remove('on');
                dropdown.classList.add('off');
                button.classList.remove('fadein');
                button.classList.add('fadeout');
            }
        });
    }
});

document.addEventListener('scroll', function() {
    dropdown.classList.remove('on');
    dropdown.classList.add('off');
    if (button.classList.contains('fadein')) {
        button.classList.remove('fadein');
        button.classList.add('fadeout');
    }
});

//Actual Sections
// var spacerDiv = document.querySelector('.spacer');
// spacerDiv.style.height = navbar.offsetHeight + 'px';
document.querySelector('.top-section').style.paddingTop = navbar.offsetHeight + 10 + 'px';


//Sliding, Fading down-up
const horizontalSliders = document.querySelectorAll('.slide-right');
const verticalSliders = document.querySelectorAll('.slide-up');

const options = {
    threshold: 0,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            console.log(entry.target.classList);
            entry.target.classList.add('slide-in');
            observer.unobserve(entry.target);
        }
    })
}, options);

horizontalSliders.forEach(slider => {
    observer.observe(slider);
});

verticalSliders.forEach(slider => {
    observer.observe(slider);
})


