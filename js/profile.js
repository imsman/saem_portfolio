const mark = document.querySelector('.question');
const copy = document.querySelector('.pop');


mark.addEventListener('click', function () {
    copy.classList.toggle('active');
})