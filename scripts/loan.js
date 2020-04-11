function loan(){
    let amount = parseFloat(document.querySelector('#loan_amount').value);
    let interest = parseFloat(document.querySelector('#loan_interest').value);
    let months = parseFloat(document.querySelector('#loan_months').value);
    
    if (amount && interest && months){
        let totalLoan = (amount + (amount * interest * 0.01)).toFixed(2);
        let monthlyPayment = (totalLoan / months).toFixed(2);
    
        document.querySelector('#total_loan').innerHTML = `Total loan amount to be repaid is ${totalLoan} PLN`;
        document.querySelector('#monthly_payment').innerHTML = `Monthly payment is ${monthlyPayment} PLN`;
        document.querySelector('#loan_result').style.color = '#1d1d1b';
    } else if (!(amount && interest && months)){
        document.querySelector('#total_loan').innerHTML = `Fill all fields`;
        document.querySelector('#monthly_payment').innerHTML = `The number must be greater than 0`;
        document.querySelector('#loan_result').style.color = 'red';
    }
}

loan();
