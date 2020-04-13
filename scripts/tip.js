let bill = document.querySelector('#bill_amount')
let tip = document.querySelector('#tip_percentage')

function tipCalc(){
    let tipValueText = document.querySelector('#tip_value')
    let totalTipText = document.querySelector('#total_tip')
    let tipResultText = document.querySelector('#tip_result')
    let billAmount = parseFloat(bill.value)
    let tipPercentage = parseFloat(tip.value)

    if (billAmount && tipPercentage) {
        let tipValue = parseFloat((billAmount * tipPercentage/100).toFixed(2));
        let totalTip = (billAmount + tipValue).toFixed(2);

        tipValueText.innerHTML = `Tip amount is ${tipValue} PLN`
        totalTipText.innerHTML = `Total amount is ${totalTip} PLN`
        tipResultText.style.color = '#1d1d1b';
    } else if ((billAmount === 0) || (tipPercentage === 0)) {
        tipValueText.innerHTML = `Please, fill all fields`
        totalTipText.innerHTML = `with numbers greater than 0`
        tipResultText.style.color = 'red';
    } else if (billAmount || tipPercentage) {
        tipValueText.innerHTML = `Your result will be here`
        totalTipText.innerHTML = `Please, fill all fields with numbers`
        tipResultText.style.color = 'white';
    } else {
        tipValueText.innerHTML = `Your result will be here`
        totalTipText.innerHTML = `Please, fill all fields with numbers`
        tipResultText.style.color = '#1d1d1b';
    }
}

bill.addEventListener('keyup', (e) => tipCalc());
tip.addEventListener('keyup', (e) => tipCalc());