<canvas width="200" height="200"></canvas>


drawFn(dd[0].percentage);
drawFn(dd[num].percentage);


var canvas = document.getElementById("canvas");
            var ctx = canvas.getContext("2d");
            let size = { w: canvas.width, h: canvas.height };

            let p = { per: dd[num].percentage, ang: Math.PI * 2 };
            let one = 0;
            
            function drawFn(n) {
                p.per = one;
                p.ang = (Math.PI * 2) * (one-25)/100;
            
                ctx.beginPath();
                ctx.lineWidth = 20;
                ctx.StrokeStyle = `#8563E7`;
                ctx.arc(100,100,100,0,p.ang);
                ctx.stroke();
                ctx.restore();
            
                ctx.font = `60px serif`;
                ctx.textAlign= 'center';
                ctx.textBaseline='middle';
                ctx.fillText(`${p.per}%`, 200,200 )

                if(one < n){
                    one++;
                    requestAnimationFrame(()=> drawFn(n));
                }
            }