let slider = document.querySelector('.home-slider .home-list');
let items = document.querySelectorAll('.home-slider .home-list .home-item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.home-slider .home-dots li');

let lengthItems = items.length - 1;
let active = 0;

next.onclick = function() {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
};

prev.onclick = function() {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
};

function autoSlide() {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}

let refreshInterval = setInterval(autoSlide, 3000);

function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';

    let last_active_dot = document.querySelector('.home-slider .home-dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');
}

dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    });
});

window.onresize = function(event) {
    reloadSlider();
};