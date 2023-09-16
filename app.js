//Nav Scroll
let nav = document.querySelector(".navbar");
window.onscroll = () => {
    if (document.documentElement.scrollTop > 50)
        nav.classList.add("navbar-scrolled");
    else
        nav.classList.remove("navbar-scrolled");
}

    //nav hide
let navLinks = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navLinks.forEach(function (a) {
    a.addEventListener('click', () => {
        navCollapse.classList.remove("show");
    });
});


// Swiper Slider
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },  
    autoplay: {
        delay:3500,
    },
});

//Counter

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            inc = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += inc;
                obj.textContent = current;
                if (current === end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("customers", 500, 5137, 3000);
    counter("friends", 100, 4326, 2000);
    counter("rating", 1000, 3247, 2500);
    counter("order", 1000, 7289, 3000);
});

//Connections

var swiper = new Swiper(".our-connections", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        '991': {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        '767': {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        '320': {
            slidesPerView: 2,
             spaceBetween: 8,
        }
    }
});