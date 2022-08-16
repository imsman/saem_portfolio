
var swiper = new Swiper('.window', {
    direction: 'vertical',
    mousewheelControl: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
    loop: true,
    resistance: false,
    // freeMode: true,
    // freeModeSticky: true
});

const text = document.querySelector('.window');
text.addEventListener('mouseover', function () {
})

document.addEventListener('scroll', function () {

})