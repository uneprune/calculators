function capacityCalc(){
    let inputValue = parseFloat(document.querySelector('#capacity_value').value);
    let selectBox = document.querySelector('#capacity_select_box');
    let selectedOption = selectBox.options[selectBox.selectedIndex].text;
    let literValue = document.querySelector('#liter_result');
    let meterValue = document.querySelector('#cubic_meter_result');
    let footValue = document.querySelector('#cubic_foot_result');
    let table = document.querySelector('#capacity_table');
    let capacityNan = document.querySelector('#capacity_nan');

    if ((!isNaN(inputValue)) && inputValue>=0){
        table.style.display = 'table';
        capacityNan.style.display = 'none';
        switch (selectedOption) {
            case 'liter':
                literValue.innerHTML = `${(inputValue).toFixed(2)} l`;
                meterValue.innerHTML = `${(inputValue*0.0010).toFixed(2)} m3`;
                footValue.innerHTML = `${(inputValue*0.0353).toFixed(2)} ft3;`;
                break;
            case 'cubic meter':
                literValue.innerHTML = `${(inputValue*1000).toFixed(2)} l`;
                meterValue.innerHTML = `${(inputValue).toFixed(2)} m3`;
                footValue.innerHTML = `${(inputValue*35.3147).toFixed(2)} ft3;`;
                break;
            case 'cubic foot' :
                literValue.innerHTML = `${(inputValue*28.3168).toFixed(2)} l`;
                meterValue.innerHTML = `${(inputValue*0.0283).toFixed(2)} m3`;
                footValue.innerHTML = `${(inputValue).toFixed(2)} ft3`;
                break;
        }
    } else {
        table.style.display = 'none';
        capacityNan.style.display = 'inline-block';
        capacityNan.style.color = 'red';
    }
}