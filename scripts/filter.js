let search = document.querySelector('#filter_input')
let calculatorItems = document.querySelectorAll('#calculators_container .flex_item')
let notFound = document.querySelector('#not_found')

search.addEventListener('keyup', (e) => {
    const filter = e.target.value.toLowerCase().trim();
    let counter = 0

    calculatorItems.forEach((item) => {
        let itemHeader = item.querySelector('h2');
        if (itemHeader.textContent.toLowerCase().includes(filter)){
            item.style.display = 'block',
            counter++
        } else {
            item.style.display = 'none'
        }
    })
    notFound.style.display = counter === 0 ? 'block' : 'none';
})