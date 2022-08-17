
const ex = document.querySelectorAll('.right > .ex > div');
const exBox = document.querySelectorAll('.right > .ex > div > .hover');

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');

const active = document.getElementsByClassName('active');

if (active) {
    one.style.marginTop = '0px';
    two.style.marginTop = '300px';
    three.style.marginTop = '0px';
    four.style.marginTop = '0px';
} //active 되어있는 div 위치 알아내고 그 명령가있기

ex.forEach(function (v, i) {

    v.addEventListener('click', function () {

        exBox.forEach(function (v, k) {
            v.classList.remove('active');
        })
        // console.log(this.children[3]);
        this.children[3].classList.add('active');

        console.log(i);

        if (i == 0) {
            one.style.marginTop = '0px';
            two.style.marginTop = '300px';
            three.style.marginTop = '0px';
            four.style.marginTop = '0px';
        } else if (i == 1) {
            one.style.marginTop = '0px';
            two.style.marginTop = '0px';
            three.style.marginTop = '300px';
            four.style.marginTop = '0px';
        } else if (i == 2) {
            one.style.marginTop = '0px';
            two.style.marginTop = '0px';
            three.style.marginTop = '0px';
            four.style.marginTop = '300px';
        } else if (i == 3) {
            one.style.marginTop = '0px';
            two.style.marginTop = '0px';
            three.style.marginTop = '0px';
            four.style.marginTop = '0px';
        }
    })
})

// ex.forEach(function (v, i) {
//     v.addEventListener('click', function () {
//         console.log(i);
//         if (i == 0) {
//             two.style.transform = 'translateY(300px)';
//             three.style.transform = 'translateY(300px)';
//             four.style.transform = 'translateY(300px)';
//         } else if (i == 1) {
//             three.style.transform = 'translateY(300px)';
//             four.style.transform = 'translateY(300px)';
//         } else if (i == 2) {
//             four.style.transform = 'translateY(300px)';
//         }
//     })
// })

