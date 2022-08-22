$('header').load('inc.html > header > .load');

$(document).on('ready',function(){
    $('#question').on('click', function () {
        $('.pop').addClass('active');
    })
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
