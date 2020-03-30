let button = document.querySelector('#background_btn');

const whiteItems = document.getElementsByClassName('white_background')
const violetItems = document.getElementsByClassName('violet_background')

function changeBackground(){
    let currentClass = button.className;
    if (currentClass === 'violet_button') {
        for (let i = 0; i<whiteItems.length; i++) {
            whiteItems[i].style.backgroundColor = '#dcb4d5';
            whiteItems[i].style.borderColor = '#dcb4d5';
        }
        for (let i = 0; i<violetItems.length; i++) {
            violetItems[i].style.backgroundColor = '#fff';
        }
        button.classList.remove('violet_button');
        button.classList.add('white_button')
    } else if (currentClass === 'white_button') {
        for (let i = 0; i<whiteItems.length; i++) {
            whiteItems[i].style.backgroundColor = '#fff';
            whiteItems[i].style.borderColor = '#fff';
        }
        for (let i = 0; i<violetItems.length; i++) {
            violetItems[i].style.backgroundColor = '#dcb4d5';
        }
        button.classList.remove('white_button');
        button.classList.add('violet_button')
    }
}

button.addEventListener('click', changeBackground)