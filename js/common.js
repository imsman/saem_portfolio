$('header').load('inc.html > .header',ques);


const mark = document.querySelector('.question > #question');
const copy = document.querySelector('.question > .pop');

function ques(){
    mark.addEventListener('click',function(){
        copy.classList.add('active');
    })
}