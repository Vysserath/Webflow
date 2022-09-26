new Swiper('.swiper', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        426: {
            slidesPerView: 2
        },
        769: {
            slidesPerView: 3
        }
    }
});

const burgerButton = document.querySelector('.burger');

if(burgerButton) {
    const burgerMenu = document.querySelector('.burger-body');
    burgerButton.addEventListener("click", function (e) {
        burgerButton.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    })
}