const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
const swiper2 = new Swiper('.swiper-container2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3.5, // Показывать 2.5 слайда одновременно
    centeredSlides: true, // Центрировать активный слайд
    spaceBetween: 30, // Отступ между слайдами


});
