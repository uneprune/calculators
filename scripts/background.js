let button = document.querySelector('#background_btn');

const whiteItems = document.getElementsByClassName('white_background');
const violetItems = document.getElementsByClassName('violet_background');
const violet = '#dcb4d5';
const white = '#fff';

function changeBackground(){
    let currentClass = button.className;
    let addColor = white;
    let removeColor = violet;
    let addClassName = 'violet_button';
    if (currentClass === 'violet_button') {
        addColor = violet;
        removeColor = white;
        addClassName = 'white_button';
    };
    for (item of whiteItems) {
        item.style.backgroundColor = addColor;
        item.style.borderColor = addColor;
    };
    for (item of violetItems) {
        item.style.backgroundColor = removeColor;
    };
    button.classList.remove(currentClass);
    button.classList.add(addClassName);
    }

button.addEventListener('click', changeBackground)