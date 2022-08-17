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
            
                <div class="preview">
                    <div class="bg">
                        <img src="${v.img}" alt="preview">
                    </div>
                    <div class="back"></div>
                </div>
            </li>`;
        });


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