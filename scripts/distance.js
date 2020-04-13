let yard = document.querySelector('#yard');
let foot = document.querySelector('#foot');
let inch = document.querySelector('#inch');
let meter = document.querySelector('#meter');
let centimeter = document.querySelector('#centimeter');

let error = document.createElement('div')
error.className = 'error dist_error';
let errorText = document.createTextNode('The number must be grater than 0')

function addError(field){
    let distanceError = document.querySelector('.dist_error');
    error.appendChild(errorText);
        field.parentElement.appendChild(error);
        if (distanceError) {
            distanceError.classList.remove('none_display');
        }
}

function removeError(){
    let distanceError = document.querySelector('.dist_error');
    if (distanceError){
        distanceError.classList.add('none_display');
    } 
}

yard.addEventListener('keyup', (e) => {
    console.log(yard.value);
    if (yard.value>=0){
        removeError();
        foot.value = (yard.value * 3).toFixed(2);
        inch.value = (yard.value * 36).toFixed(2);
        meter.value = (yard.value * 0.9144).toFixed(2);
        centimeter.value = (yard.value * 91.44).toFixed(2);
    } else {
        addError(yard);
    }
})

foot.addEventListener('keyup', (e) => {
    if (foot.value>=0){
        removeError();
        yard.value = (foot.value * 0.33).toFixed(2);
        inch.value = (foot.value * 12).toFixed(2);
        meter.value = (foot.value * 0.3048).toFixed(2);
        centimeter.value = (foot.value * 30.48).toFixed(2);
    } else {
        addError(foot);
    }
})

inch.addEventListener('keyup', (e) => {
    if (inch.value>=0){
        removeError();
        yard.value = (inch.value * 0.0278).toFixed(2);
        foot.value = (inch.value * 0.0833).toFixed(2);
        meter.value = (inch.value * 0.0254).toFixed(2);
        centimeter.value = (inch.value * 2.54).toFixed(2);
    } else {
        addError(inch);
    }
})

meter.addEventListener('keyup', (e) => {
    if (meter.value>=0){
        removeError();
        yard.value = (meter.value * 1.0936).toFixed(2);
        foot.value = (meter.value * 3.2808).toFixed(2);
        inch.value = (meter.value * 39.3701).toFixed(2);
        centimeter.value = (meter.value * 100).toFixed(2);
    } else {
        addError(meter);
    }
})

centimeter.addEventListener('keyup', (e) => {
    if (centimeter.value>=0){
        removeError();
        yard.value = (centimeter.value * 0.0109).toFixed(2);
        foot.value = (centimeter.value * 0.0328).toFixed(2);
        inch.value = (centimeter.value * 0.3937).toFixed(2);
        meter.value = (centimeter.value * 0.01).toFixed(2);
    } else {
        addError(centimeter)
    }
})