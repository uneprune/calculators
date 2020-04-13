function bmi() {
    let height = (parseInt(document.querySelector('#bmi_height').value))*0.01;
    let weight = parseInt(document.querySelector('#bmi_weight').value);
    let bmiResult = document.querySelector('#bmi_result')
    let bmiInfo = document.querySelector('#bmi_info')
    let weightInfo = document.querySelector('#weight_info')

    if (height>0 && weight>0) {
        let result = (weight / (height * height)).toFixed(1)
        bmiResult.innerHTML = `Your result is ${result}`;
        bmiResult.classList.remove('error');
        bmiInfo.style.display = 'inline-block';
        if (result < 18.5) {
            weightInfo.innerHTML = `You are underweight`;
            bmiInfo.style.backgroundColor = '#ffeea8';
        } else if (18.5 <= result && result < 25) {
            weightInfo.innerHTML = `Your weight is normal`;
            bmiInfo.style.backgroundColor = '#b1d7b6';
        } else if (25 <= result && result < 30) {
            weightInfo.innerHTML = `You are overweight`;
            bmiInfo.style.backgroundColor = '#ffeea8';
        } else if (result >= 30) {
            weightInfo.innerHTML = `You are obese`;
            bmiInfo.style.backgroundColor = '#f6b7b8';
        }
    } else {
        bmiResult.innerHTML = `Please, fill all fields<br>with numbers greater than 0 `;
        bmiResult.classList.add('error');
        bmiInfo.style.display = 'none';
    }
}