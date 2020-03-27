let search = document.querySelector('#search_input')
let calculatorItems = document.querySelectorAll('#calculators_container .flex_item')

search.addEventListener('keyup', (e) => {
    
    const filter = e.target.value.toLowerCase().trim();

    calculatorItems.forEach((item) => {
        let itemHeader = item.querySelector('h2')
        if (itemHeader.textContent.toLowerCase().includes(filter)){
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
})