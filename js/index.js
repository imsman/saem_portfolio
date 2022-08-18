
var swiper = new Swiper('.window', {
    direction: 'vertical',
    mousewheelControl: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
    //autoplay안에 속성을 또 넣어야함
    loop: true,
    resistance: false,
    // freeMode: true,
    // freeModeSticky: true
});
//index swiper vertical



//scroll event 발생 -> 페이지 이동
const link = document.querySelector('.web_footer');


window.addEventListener('scroll', function(){
    // window.location.href = './profile.html';
    console.log(window.scrollY);
});


link.addEventListener('click',function(){
    window.location.href = './profile.html';
});