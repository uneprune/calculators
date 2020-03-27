let button = document.querySelector('#background_btn');

const white_items = document.getElementsByClassName('white_background')
const violet_items = document.getElementsByClassName('violet_background')

function changeBackground(){
    let currentClass = button.className;
    if (currentClass === 'violet_background') {
        for (let i = 0; i<white_items.length; i++) {
            white_items[i].style.backgroundColor = '#dcb4d5';
            white_items[i].style.borderColor = '#dcb4d5';
        }
        for (let i = 0; i<violet_items.length; i++) {
            violet_items[i].style.backgroundColor = '#fff';
        }
        button.classList.remove('violet_background');
        button.classList.add('white_background')
    } else if (currentClass === 'white_background') {
        for (let i = 0; i<white_items.length; i++) {
            white_items[i].style.backgroundColor = '#fff';
            white_items[i].style.borderColor = '#fff';
        }
        for (let i = 0; i<violet_items.length; i++) {
            violet_items[i].style.backgroundColor = '#dcb4d5';
        }
        button.classList.remove('white_background');
        button.classList.add('violet_background')
    }
}

button.addEventListener('click', changeBackground)