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
        $('.content > ul').html(site);


        $('.onClick').on('click', function () {
            event.preventDefault();
            console.log($(this).attr('href'));


            let ind = $('div.more').index($(this).parent());
            console.log(ind);

            if (ind == 2) {
                window.open(`${$(this).attr('href')}`, "_blank", "width=380px,height=700px");
            } else if (ind == 1) {
                window.open(`${$(this).attr('href')}`, "_blank", "width=680px,height=900px");
            } else (
                window.open(`${$(this).attr('href')}`, "_blank")
            )
        })
        //바로빌과 생활쏙법은 크기 달라야함


        let artwork = '';
        $.each(data.photoshop, function (k, v) {
            artwork += `
            <li class="swiper-slide"> 
            <div class="slide">
                <div class="intro">
                    <p class="num">${v.num}</p>
                    <p class="name">${v.name}</p>
                    <p class="tool">${v.sub}></p>
                    <p class="ex">${v.ex}</p>
                </div>

                <div class="pre">
                    <img src="${v.img}" alt="">
                </div>
            </div>
        </li>`;
        })


        let illust = '';
        $.each(data.illust, function (k, v) {
            illust += `
            <li class="swiper-slide"> 
            <div class="slide">
                <div class="intro">
                    <p class="num">${v.num}</p>
                    <p class="name">${v.name}</p>
                    <p class="tool">${v.sub}></p>
                    <p class="ex">${v.ex}</p>
                </div>

                <div class="pre">
                    <img src="${v.img}" alt="">
                </div>
            </div>
        </li>`;
        })


        let video = '';
        $.each(data.aftereffect, function (k, v) {
            video += `
            <li class="swiper-slide">
                    <div class="slide">
                        <p class="num">${v.num}</p>
                            <p class="name">${v.name}</p>
                            <p class="tool">${v.sub}></p>
                            <p class="ex">${v.ex}</p>
                        </div>

                        <div class="pre">
                            <iframe src="${v.url}">
                        </div>
                    </div>
                    </div>
                </li>`;
        })


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

        let field = '';
        $('.tab ul li').on('click', function () {
            field = $(this).text();
            console.log(field)

            if (field == 'Web_projects') {
                $('.content > ul').html(site);
            } else if (field == 'Artwork') {
                $('.content > ul').html(artwork);
            } else if (field == 'Character') {
                $('.content > ul').html(illust);
            } else if (field == 'Video') {
                $('.content > ul').html(video);
            }
        })
    }
})