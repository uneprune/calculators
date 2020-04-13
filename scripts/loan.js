function loan(){
    let amount = parseFloat(document.querySelector('#loan_amount').value);
    let interest = parseFloat(document.querySelector('#loan_interest').value);
    let months = parseInt(document.querySelector('#loan_months').value);
    
    if (amount>0 && interest>=0 && months>0){
        let totalLoan = (amount + (amount * interest * 0.01)).toFixed(2);
        let monthlyPayment = (totalLoan / months).toFixed(2);
        document.querySelector('#total_loan').innerHTML = `Total loan amount to be repaid is ${totalLoan} PLN`;
        document.querySelector('#monthly_payment').innerHTML = `Monthly payment is ${monthlyPayment} PLN`;
        document.querySelector('#loan_result').classList.remove('error');
    } else {
        document.querySelector('#total_loan').innerHTML = `Please, fill all fields`;
        document.querySelector('#monthly_payment').innerHTML = `with numbers grater than 0`;
        document.querySelector('#loan_result').classList.add('error');
    }
}

loan();
