function capacityCalc(){
    let inputValue = parseFloat(document.querySelector('#capacity_value').value);
    let selectBox = document.querySelector('#capacity_select_box');
    let selectedOption = selectBox.options[selectBox.selectedIndex].text;
    let literValue = document.querySelector('#liter_result')
    let meterValue = document.querySelector('#cubic_meter_result')
    let footValue = document.querySelector('#cubic_foot_result')

    if (!(isNaN(inputValue))){
        document.querySelector('#capacity_table').style.display = 'table';
        document.querySelector('#capacity_nan').style.display = 'none';
        if (selectedOption === 'liter') {
            literValue.innerHTML = `${(inputValue).toFixed(2)} l`;
            meterValue.innerHTML = `${(inputValue*0.0010).toFixed(2)} m3`;
            footValue.innerHTML = `${(inputValue*0.0353).toFixed(2)} ft3;`;
        } else if (selectedOption === 'cubic meter') {
            literValue.innerHTML = `${(inputValue*1000).toFixed(2)} l`;
            meterValue.innerHTML = `${(inputValue).toFixed(2)} m3`;
            footValue.innerHTML = `${(inputValue*35.3147).toFixed(2)} ft3;`
        } else if (selectedOption === 'cubic foot') {
            literValue.innerHTML = `${(inputValue*28.3168).toFixed(2)} l`;
            meterValue.innerHTML = `${(inputValue*0.0283).toFixed(2)} m3`;
            footValue.innerHTML = `${(inputValue).toFixed(2)} ft3;`
        }
    } else {
        document.querySelector('#capacity_table').style.display = 'none';
        document.querySelector('#capacity_nan').style.display = 'inline-block';
        document.querySelector('#capacity_nan').style.color = 'red';
    }
}