$.ajax({
    url: './json/projects.json',
    success: function (data) {
        console.log('fin');

        function listFn(type) {
            let listTag = '';
            switch (type) {
                case 'Artwork': artwork(); break;
                case 'Video': video(); break;
                case 'Character': illust(); break;
                default: website(); break;
            }
            function website() {
                $.each(data.projects, function (k, v) {
                    listTag += `
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
                                <a href="${v.link}" target="_blank" class="onClick">바로가기</a>
                                <a href="${v.ppt}" target="_blank">기획안보기</a>
                            </div>
                        </div>
                        <div class="preview">
                            <a href="${v.link}" target="_blank" class="onClick">
                                <img src="${v.img}" alt="preview">
                                <div class="bg"></div>
                            </a>
                            
                        </div>
                    </li>`;
                });
            }

            function artwork() {
                $.each(data.photoshop, function (k, v) {
                    listTag += `
                    <li id="art" class="swiper-slide"> 
                        <div class="slide">
                            <div class="intro">
                                <p class="num">${v.num}</p>
                                <p class="name">${v.name}</p>
                                <p class="tool">${v.sub}</p>
                                <p class="ex">${v.ex}</p>
                            </div>

                            <div class="pre">
                                <img src="${v.img}" alt="">
                            </div>
                        </div>
                    </li>`;
                })
            }

            function illust() {
                $.each(data.illust, function (k, v) {
                    listTag += `
                    <li id="ill" class="swiper-slide"> 
                        <div class="slide">
                            <div class="intro">
                                <p class="num">${v.num}</p>
                                <p class="name">${v.name}</p>
                                <p class="tool">${v.sub}</p>
                                <p class="ex">${v.ex}</p>
                            </div>

                            <div class="pre">
                                <img src="${v.img}" alt="">
                            </div>
                        </div>
                    </li>`;
                })
            }

            function video() {
                $.each(data.aftereffect, function (k, v) {
                    listTag += `
                        <li id="vid" class="swiper-slide">
                            <div class="slide">
                                <div class="intro">
                                    <p class="num">${v.num}</p>
                                    <p class="name">${v.name}</p>
                                    <p class="tool">${v.sub}</p>
                                    <p class="ex">${v.ex}</p>
                                </div>

                                <div class="pre">
                                    <div class="bg"></div>
                                    <a href="${v.url}">${v.url}</a>
                                </div>
                            </div>
                        </li>`;
                })
            }
            $('.content > ul').html('');
            $('.content > ul').html(listTag);

            // console.log(listTag)

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

        listFn();
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


        let field = '';
        // let load = $('#load');
        // // console.log(load);

        // $.each(load, function (i, v) {
        //     v.on('click',function(){
        //         field = $(this).children().text();
        //         console.log(field);
        //         listFn(field);
        //     })
        // })

        let btn = $('#load > button');

        btn.click(function(){
            field = $(this).text();
            console.log(field);
            listFn(field);
        })
    }
})