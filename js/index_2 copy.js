const txt = document.querySelectorAll('.greet > span');

let text = '';


txt.forEach(function (v, k) {
    let each = v.textContent;
    text += each;
})

let greet = Array.from(text);

console.log(greet);
const open = document.querySelector('.hello');
const open_1 = document.querySelector('.hello > span:nth-of-type(1)');
const open_2 = document.querySelector('.hello > span:nth-of-type(2)');
const open_3 = document.querySelector('.hello > span:nth-of-type(3)');
let n = 0;
// let stop = Array.from(open.textContent);

// console.log(stop);

function typing() {
    open.innerHTML += open_1;
    open.innerHTML += open_2;
    open.innerHTML += open_3;
    // blank();

    if (n < 6) {
        open_1.innerHTML += greet[n++];
    } else if (n >= 6 && n < 25) {
        open_2.innerHTML += greet[n++];
    } else if (n >= 25) {
        open_3.innerHTML += greet[n++];
    } else if (n >= greet.length) {
        open_3.innerHTML += '';
        clearInterval(init);
    }
}

let init = setInterval(typing(),150);



    // function blank(){
    //     var space = ' ';
    //     try{
    //         if(typeof(space) == 'string')
    //         throw('<br>');
    //     }
    //     catch(e){
    //         open.innerHTML += `<br>`;
    //     }

    // }
    //<br>태그를 넣고싶었다.


    // const insa = `안녕하세요. 웹_퍼블리셔, UI/UX 디자이너 안새미입니다.`
    // let array = Array.from(insa);

    // console.log(array);

    // let meant = '';
    // array.forEach(function (v, k) {
    //     meant += v;
    //     if (k == 6) {
    //         open.innerHTML = `<br>`;
    //     } else if (k == 25) {
    //         open.innerHTML = '<br>';
    //     }

    //     //<br>넣고싶다
    //