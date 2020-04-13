let search = document.querySelector('#search_input')
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
    if (counter === 0) {
        notFound.style.display = 'block'
    } else {
        notFound.style.display = 'none'
    }
})