const txt = document.querySelectorAll('.greet > span');
let text = '';


txt.forEach(function(v,k){
    let each = v.textContent;

    text += each;
})

let greet = Array.from(text);

// console.log(greet);

const open = document.querySelector('.hello');
let n = 0;
let stop = Array.from(open.textContent);

// console.log(stop);

function typing(){
    open.innerHTML += greet[n++];
    // blank();
    if(n >= greet.length){
        text.innerHTML += '_';
        clearInterval(init);
    }
}

let init = setInterval(function(){
    typing();
},150);

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


