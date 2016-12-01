$(document).ready(function() {

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop: true,
        hashnav: true,
        slidesPerView: 3,
        centeredSlides: true,
        touchEventsTarget: 'swiper-slide',
        breakpoints: {
            480: {
              slidesPerView: 1,
              spaceBetweenSlides: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetweenSlides: 30
            }
        },
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true,
        autoplay: 2500
    });
});
