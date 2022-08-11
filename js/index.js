var swiper = new Swiper('.window', {
    direction: 'vertical',
    mousewheelControl: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    resistance : false,
    // freeMode: true,
    // freeModeSticky: true
});