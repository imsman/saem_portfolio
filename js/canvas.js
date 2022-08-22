//<canvas width="200" height="200"></canvas>
$.ajax({
    url: './json/skill.json',
    success: function (data) {
        console.log('fin');

        let dd = data.skill;

        let basic = `<div class="circle">
                    <canvas width="300" height="300"></canvas>
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

        function basicFn(num) {
            var canvas = document.getElementsByTagName("canvas")[0];
            var ctx = canvas.getContext("2d");
            let size = { w: canvas.width, h: canvas.height };

            let p = { per: dd[num].percentage, ang: Math.PI * 2 };
            let one = 0;

            // drawFn(dd[0].percentage);
            drawFn(dd[num].percentage); 

            function drawFn(n) {
                p.per = one;
                p.ang = (Math.PI * 2) * (one - 25) / 100;

                ctx.clearRect(0,0,size.w,size.h);
                ctx.beginPath();
                ctx.lineCap = 'round';
                ctx.lineWidth = 20;
                ctx.strokeStyle = `#8563E7`;
                ctx.arc(150, 150, 100, Math.PI/ -2, p.ang);
                ctx.stroke();
                ctx.restore();

                ctx.font = `40px GangwonEdu_OTFBoldA`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(`${p.per}%`, 150, 150)

                if (one < n) {
                    one++;
                    requestAnimationFrame(() => drawFn(n));
                }
            }
        }
        basicFn(0);


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
                        <canvas width="300" height="300"></canvas>
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

            basicFn(num);

            


        })
    }
})








