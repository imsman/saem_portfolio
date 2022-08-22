const mark = document.querySelector('.question');
const copy = document.querySelector('.pop');

mark.addEventListener('click', function () {
    copy.classList.toggle('active');
})

// const indi = document.querySelectorAll('.indi>ul>li');

// const svg = document.getElementsByTagName('.indi > ul >li svg');

// let idx = '';

// indi.forEach(function(v,i){
//     v.addEventListener('click',function(){
//         localStorage.setItem('page',i);

//         idx = localStorage.getItem('page');
//         console.log(idx);

//         indi.removeClass('here');
//         indi[idx].addClass('here'); 
//     })
// })
