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
                    <b>${v.name}</b> <p class="per">[기여도:${v.percentage}]</p>
                    <p class="sub">${v.sub}</p>
                    <p class="ex">
                    ${v.bad}
                    <br>
                    ${v.dif}
                    </p>
                    <div class="more">    
                        <a href="${v.link}" target="_blank">바로가기</a>
                        <a href="${v.ppt}" target="_blank">기획안보기</a>
                    </div>
                </div>
                <div class="preview">
                    <a href="${v.link}" target="_blank">
                        <img src="${v.img}" alt="preview">
                        <div class="bg"></div>
                    </a>
                    
                </div>
            </li>`;

        });

        // console.log($('.more a').val());

        $('.content > ul').html(site);

        // console.log($('.more > a:nth-of-type(1)'));

        $('.more > a:nth-of-type(1)').on('click',function(){
            event.preventDefault();
            console.log($(this).attr('href'));

            let ind = $(this).parent().index();
            console.log(ind);

            window.open(`${$(this).attr('href')}`,"_blank","width=680px,height=900px");
            if($(this).eq(1)){
                window.open(`${$(this).attr('href')}`,"_blank","width=380px,height=700px");
            }
        })
        //바로빌과 생활쏙법은 크기 달라야함


        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            direction: "vertical",
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            loop: true,
            draggable: true,
            mousewheel: true,
            autoplay: {
                delay: 4000,
                pauseOnMouseEnter: true,
            },
            // effect: 'fade',
            // fadeEffect: {
            //     crossFade: true
            // },
        });
    }
})