let button = document.querySelector('#background_btn');

const whiteItems = document.getElementsByClassName('white_background');
const violetItems = document.getElementsByClassName('violet_background');
const violet = '#dcb4d5';
const white = '#fff';

function changeBackground(){
    let currentClass = button.className;
    if (currentClass === 'violet_button') {
        for (item of whiteItems) {
            item.style.backgroundColor = violet;
            item.style.borderColor = violet;
        };
        for (item of violetItems) {
            item.style.backgroundColor = white
        };
        button.classList.remove('violet_button');
        button.classList.add('white_button')
    } else if (currentClass === 'white_button') {
        for (item of whiteItems) {
            item.style.backgroundColor = white;
            item.style.borderColor = white;
        }
        for (item of violetItems) {
            item.style.backgroundColor = violet;
        }
        button.classList.remove('white_button');
        button.classList.add('violet_button')
    }
}

button.addEventListener('click', changeBackground)