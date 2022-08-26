$.ajax({
    url: './json/projects.json',
    success: function (data) {
        console.log('fin');

        let artwork = '';
        $.each(data.photoshop, function (k, v) {
            artwork += `
            <li>
                <div class="slide">
                    <figure>
                        <img src="${v.img}" alt="">
                        <figcaption class="title">${v.name}</figcaption>
                    </figure>
                    <p class="ex">${v.sub}</p>
                </div>
            </li>`;
        })
        $('.artwork > ul').html(artwork);

        let illust = '';
        $.each(data.illust, function (k, v) {
            illust += `
            <li>
                <div class="slide">
                    <figure>
                        <img src="${v.img}" alt="">
                        <figcaption class="title">${v.name}</figcaption>
                    </figure>
                    <p class="ex">${v.sub}</p>
                </div>
            </li>`;
        })
        $('.illust > ul').html(illust);

        let video = '';
        $.each(data.aftereffect, function (k, v) {
            video += `
            <li>
                <div class="slide">
                    <div class="div">
                        <iframe src="${v.link}"></iframe>
                        <p class="${v.name}"></p>
                    </div>
                    <p class="ex">${v.sub}</p>
                </div>
            </li>`;
        })
        $('.video > ul').html(video);
    }
});
