function weightCalc(){
    let inputValue = parseFloat(document.querySelector('#weight_value').value)
    let selectBox = document.querySelector('#weight_select_box')
    let selectedOption = selectBox.options[selectBox.selectedIndex].text;
    let selectedValue = document.querySelector('#weight_selected_value')
    let poundResult = document.querySelector('#pound_result')
    let ounceResult = document.querySelector('#ounce_result')
    let gramResult = document.querySelector('#gram_result')
    let kilogramResult = document.querySelector('#kilogram_result')

    if ((!isNaN(inputValue)) && inputValue>=0) {
        poundResult.style.display = 'inline-block';
        ounceResult.style.display = 'inline-block';
        gramResult.style.display = 'inline-block';
        kilogramResult.style.display = 'inline-block';
        selectedValue.style.color = '#1d1d1b';
        selectedValue.style.fontWeight = '700';
        switch (selectedOption) {
            case 'pound':
                selectedValue.innerHTML = `${inputValue.toFixed(2)} lb [pound] is:`;
                poundResult.style.display = 'none';
                ounceResult.innerHTML = `${(inputValue*16).toFixed(2)} oz [ounce]`;
                gramResult.innerHTML = `${(inputValue*453.5924).toFixed(2)} g [gram]`;
                kilogramResult.innerHTML = `${(inputValue*0.4536).toFixed(2)} kg [kilogram]`;
                break;
            case 'ounce':
                selectedValue.innerHTML = `${inputValue.toFixed(2)} oz [ounce] is:`;
                ounceResult.style.display = 'none';
                poundResult.innerHTML = `${(inputValue*0.0625).toFixed(2)} lb [pound]`;
                gramResult.innerHTML = `${(inputValue*28.35).toFixed(2)} g [gram]`;
                kilogramResult.innerHTML = `${(inputValue*0.0284).toFixed(2)} kg [kilogram]`;
                break;
            case 'gram':
                selectedValue.innerHTML = `${inputValue.toFixed(2)} g [gram] is:`;
                gramResult.style.display = 'none';
                poundResult.innerHTML = `${(inputValue*0.0022).toFixed(2)} lb [pound]`;
                ounceResult.innerHTML = `${(inputValue*0.0353).toFixed(2)} oz [ounce]`;
                kilogramResult.innerHTML = `${(inputValue*0.0010).toFixed(2)} kg [kilogram]`;
                break;
            case 'kilogram':
                selectedValue.innerHTML = `${inputValue.toFixed(2)} kg [kilogram] is:`;
                kilogramResult.style.display = 'none';
                poundResult.innerHTML = `${(inputValue*2.2046).toFixed(2)} lb [pound]`;
                ounceResult.innerHTML = `${(inputValue*35.2734).toFixed(2)} oz [ounce]`;
                gramResult.innerHTML = `${(inputValue*1000).toFixed(2)} g [gram]`;
        }
    } else {
        selectedValue.innerHTML = `Please fill first field<br>with number grater than 0`;
        selectedValue.style.fontWeight = 'normal';
        selectedValue.style.color = 'red';
        poundResult.style.display = 'none';
        ounceResult.style.display = 'none';
        gramResult.style.display = 'none';
        kilogramResult.style.display = 'none';
    }
}

weightCalc();