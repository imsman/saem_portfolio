$.ajax({
    url: './json/skill.json',
    success: function (data) {
        console.log('fin');

        let dd = data.skill;


        //함수분리?????
        $('.tool > button').on('click', function () {
            let per = '';
            let name = '';
            var num = '';

            let txt = $(this).text();
            console.log(txt);
            console.log($(this).index());

            num = $(this).index();

            per += `<div class="circle">
                        <canvas id="canvas"></canvas>
                        <p>${dd[num].percentage}</p>
                    </div>`;
            name += `<p>${dd[num].name}</p>
                    <ul>
                        <li>${dd[num].do_1}</li>
                        <li>${dd[num].do_2}</li>
                        <li>${dd[num].do_3}</li>
                        <li>${dd[num].do_4}</li>
                        <li>${dd[num].do_5}</li>
                    </ul>
                        `;
            $('.percentage').html(per);
            $('.info').html(name);
            //내용바꾸기

            $('.tool > button').each(function(k,v){
                $('.tool > button').removeClass('active');
                $('.tool > button').eq(num).addClass('active');
            })
            //버튼활성화

            // var canvas = document.getElementById("canvas");
            // var ctx = canvas.getContext("2d");

            //캔버스가문제임
        })
    }
})