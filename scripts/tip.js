let bill = document.querySelector('#bill_amount')
let tip = document.querySelector('#tip_percentage')

function tipCalc(){
    let tipAmountText = document.querySelector('#tip_amount')
    let totalAmountText = document.querySelector('#total_amount')
    let tipResultText = document.querySelector('#tip_result')
    let billAmount = parseFloat(bill.value)
    let tipPercentage = parseFloat(tip.value)

    if ((billAmount>0) && (tipPercentage>0)) {
        let tipValue = parseFloat((billAmount * tipPercentage/100).toFixed(2));
        let totalAmount = (billAmount + tipValue).toFixed(2);
        tipAmountText.innerHTML = `Tip amount is ${tipValue} PLN`;
        totalAmountText.innerHTML = `Total amount is ${totalAmount} PLN`;
        tipResultText.classList.remove('error');
    } else if ((billAmount === 0 && tipPercentage>0) || (billAmount>0 && tipPercentage === 0) || (billAmount === 0 && tipPercentage === 0)) {
        tipAmountText.innerHTML = `Tip amount is 0.00 PLN`;
        totalAmountText.innerHTML = `Total amount is ${billAmount.toFixed(2)} PLN`;
        tipResultText.classList.remove('error');
    } else if ((billAmount<0) || (tipPercentage<0)) {
        tipAmountText.innerHTML = `Please, fill all fields`;
        totalAmountText.innerHTML = `with numbers grater than 0`;
        tipResultText.classList.add('error');
    } else {
        tipAmountText.innerHTML = `Your result will be here`;
        totalAmountText.innerHTML = `Please, fill all fields with numbers`;
        tipResultText.classList.remove('error');
    }
}

bill.addEventListener('keyup', (e) => tipCalc());
tip.addEventListener('keyup', (e) => tipCalc());