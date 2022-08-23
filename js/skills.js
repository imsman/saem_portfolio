$.ajax({
    url: './json/skill.json',
    success: function (data) {
        console.log('fin');

        let dd = data.skill;

        let basic = `<div class="circle">
                    <canvas width="200" height="200"></canvas>
                </div>`;
        let basic2 = `<p>${dd[0].name}</p>
                        <ul>
                            <li>${dd[0].do_1}</li>
                            <li>${dd[0].do_2}</li>
                            <li>${dd[0].do_3}</li>
                            <li>${dd[0].do_4}</li>
                            <li>${dd[0].do_5}</li>
                        </ul>
                        `;

        $('.percentage').html(basic);
        $('.info').html(basic2);


        let per = '';
        let name = '';
        var num = '';

        //함수분리?????
        $('.tool > button').on('click', function () {
            per = '';
            name = '';
            num = '';

            let txt = $(this).text();
            console.log(txt);
            console.log($(this).index());

            num = $(this).index();


            per += `<div class="circle">
                        <canvas width="200" height="200"></canvas>
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


            $('.tool > button').each(function (k, v) {
                $('.tool > button').removeClass('active');
                $('.tool > button').eq(num).addClass('active');


                $('.wrap .div').removeClass('go');
                $('.wrap .span-1').eq(num).addClass('go');
                $('.wrap .span-2').eq(num).addClass('go');
                $('.wrap .span-3').eq(num).addClass('go');
                $('.wrap .span-4').eq(num).addClass('go');
                $('.wrap .symbol').eq(num).addClass('go-heart');
                
            })
            //버튼활성화

            //캔버스가문제임
        })
    }
})


// $('.wrap').on('click', function () {

// })

$('.certi').on('click',function(){
    $('.certi_sub').toggleClass('open');
    $('.btn').toggleClass('open');
})

