let button = document.querySelector('#background_btn');

const whiteItems = Array.from(document.getElementsByClassName('white_background'));
const violetItems = Array.from(document.getElementsByClassName('violet_background'));
const violet = '#dcb4d5';
const white = '#fff';

function changeBackground(){
    let currentClass = button.className;
    if (currentClass === 'violet_button') {
        whiteItems.forEach(item => {
            item.style.backgroundColor = violet;
            item.style.borderColor = violet;
        });
        violetItems.forEach(item => {
            item.style.backgroundColor = white
        });
        button.classList.remove('violet_button');
        button.classList.add('white_button')
    } else if (currentClass === 'white_button') {
        for (let i = 0; i<whiteItems.length; i++) {
            whiteItems[i].style.backgroundColor = white;
            whiteItems[i].style.borderColor = white;
        }
        for (let i = 0; i<violetItems.length; i++) {
            violetItems[i].style.backgroundColor = violet;
        }
        button.classList.remove('white_button');
        button.classList.add('violet_button')
    }
}

button.addEventListener('click', changeBackground)