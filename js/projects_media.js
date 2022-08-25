$.ajax({
    url: './json/media_projects.json',
    success: function (mm) {
        console.log('fin');

        let artwork ='';
        $.each(mm.photoshop,function(k,v){
            artwork += `
            <li>
                <div class="slide">
                    <figcaption>
                        <img src="${v.img}" alt="">
                        <figcaption class="title">${v.name}</figcaption>
                    </figcaption>
                    <p class="ex">${v.sub}</p>
                </div>
            </li>`;
        })
    }
});


//아직 화면에 뿌리진 못함