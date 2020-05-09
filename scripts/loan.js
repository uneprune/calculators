function loan(){
    const amount = document.querySelector('#loan_amount');
    let amountValue = parseFloat(amount.value);
    const interest = document.querySelector('#loan_interest');
    let interestValue = parseFloat(interest.value);
    const months = document.querySelector('#loan_months')
    let monthsValue = parseInt(months.value);
    const totalLoan = document.querySelector('#total_loan');
    const monthlyPayment = document.querySelector('#monthly_payment');
    const loanResult = document.querySelector('#loan_result')
    
    if (amountValue>0 && interestValue>=0 && monthsValue>0){
        let totalLoanAmount = (amountValue + (amountValue * interestValue * 0.01)).toFixed(2);
        let monthlyPaymentValue = (totalLoanAmount / monthsValue).toFixed(2);
        totalLoan.innerHTML = `Total loan amount to be repaid is ${totalLoanAmount} PLN`;
        monthlyPayment.innerHTML = `Monthly payment is ${monthlyPaymentValue} PLN`;
        loanResult.classList.remove('error');
    } else {
        totalLoan.innerHTML = `Please, fill all fields`;
        monthlyPayment.innerHTML = `with numbers grater than 0`;
        loanResult.classList.add('error');
    }
}

loan();
