$.ajax({
    url: './json/projects.json',
    success: function (data) {
        console.log('fin');

        let site = '';

        $.each(data.projects, function (k, v) {
            site += `
            <li class="swiper-slide">
                <div class="site">
                    <p class="num">${v.num}</p>
                    <b>${v.name}</b>
                    <p class="sub">${v.sub}</p>
                    <p class="ex">
                    ${v.bad}
                    <br>
                    ${v.dif}
                    </p>
                </div>
                <div class="more">    
                        <a href="${v.link}" target="_blank">바로가기</a>
                        <a href="${v.ppt}" target="_blank">기획안보기</a>
                </div>
            
                <div class="preview">
                    <a href="${v.link}" target="_blank">
                        <div class="bg">
                            <img src="${v.img}" alt="preview">
                        </div>
                        <div class="back"></div>
                    </a>
                    
                </div>
            </li>`;

        });

        // console.log($('.more a').val()); 비어있음 백그라운드 색회색으로 할까?+

        $('.content > ul').html(site);

        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            direction: "vertical",
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            loop:true,
            draggable:true,
            mousewheel: true,
            autoplay: {
                delay: 4000,
                pauseOnMouseEnter:true,
            },
            // effect: 'fade',
            // fadeEffect: {
            //     crossFade: true
            // },
        });
    }
})