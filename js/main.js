document.addEventListener("DOMContentLoaded", function () {

    const swiper1 = new Swiper('.swiper1', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 2,
        allowTouchMove: false,
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const swiper2 = new Swiper('.swiper2', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 1,
        effect: "fade",
        fadeEffect: { crossFade: true },
        allowTouchMove: false,
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const swiper3 = new Swiper('.swiper3', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 1,
        allowTouchMove: false,
        effect: "fade",
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

});