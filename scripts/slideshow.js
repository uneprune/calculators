let currentNumber = 1;

function selectDot(newNumber) {
    document.querySelector('.selected').classList.remove('selected');
    document.querySelector('#dot' + newNumber).classList.add('selected');
    currentNumber = newNumber;
}

function showSlide(newNumber) {
    document.querySelector('.show').classList.remove('show');
    document.querySelector('#slide' + newNumber).classList.add('show');
    currentNumber = newNumber;
    selectDot(newNumber)
}

for (let dotNumber = 1; dotNumber <= 4; dotNumber++){
    document
    .querySelector('#dot' + dotNumber)
    .addEventListener('click', showSlide.bind(this, dotNumber))
}

function showNextSlide() {
    let newNumber = currentNumber + 1;
    if (newNumber > 4) {
        newNumber = 1;
    }
    showSlide(newNumber);
}
document.querySelector('#next').addEventListener('click', showNextSlide);

function showPreviousSlide() {
    let newNumber = currentNumber - 1;
    if (newNumber < 1) {
        newNumber = 4;
    }
    showSlide(newNumber)
}
document.querySelector('#prev').addEventListener('click', showPreviousSlide);