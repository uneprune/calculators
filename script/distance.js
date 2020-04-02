let yard = document.querySelector('#yard')
let foot = document.querySelector('#foot')
let inch = document.querySelector('#inch')
let meter = document.querySelector('#meter')
let centimeter = document.querySelector('#centimeter')

yard.addEventListener('keyup', (e) => {
    let yardValue = yard.value;
    foot.value = (yardValue * 3).toFixed(2);
    inch.value = (yardValue * 36).toFixed(2);
    meter.value = (yardValue * 0.9144).toFixed(2);
    centimeter.value = (yardValue * 91.44).toFixed(2);
})

foot.addEventListener('keyup', (e) => {
    let footValue = foot.value;
    yard.value = (footValue * 0.33).toFixed(2);
    inch.value = (footValue * 12).toFixed(2);
    meter.value = (footValue * 0.3048).toFixed(2);
    centimeter.value = (footValue * 30.48).toFixed(2);
})

inch.addEventListener('keyup', (e) => {
    let inchValue = inch.value;
    yard.value = (inchValue * 0.0278).toFixed(2);
    foot.value = (inchValue * 0.0833).toFixed(2);
    meter.value = (inchValue * 0.0254).toFixed(2);
    centimeter.value = (inchValue * 2.54).toFixed(2);
})

meter.addEventListener('keyup', (e) => {
    let meterValue = meter.value;
    yard.value = (meterValue * 1.0936).toFixed(2);
    foot.value = (meterValue * 3.2808).toFixed(2);
    inch.value = (meterValue * 39.3701).toFixed(2);
    centimeter.value = (meterValue * 100).toFixed(2);
})

centimeter.addEventListener('keyup', (e) => {
    let centimeterValue = centimeter.value;
    yard.value = (centimeterValue * 0.0109).toFixed(2);
    foot.value = (centimeterValue * 0.0328).toFixed(2);
    inch.value = (centimeterValue * 0.3937).toFixed(2);
    meter.value = (centimeterValue * 0.01).toFixed(2);
})