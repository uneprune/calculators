let quoteText = document.querySelector('#quote_text')
let quoteAuthor = document.querySelector('#quote_author')

function generateQuote(){
    fetch("https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
        .then(response => response.json())
        .then(response => {
            const random = Number.parseInt(Math.random()*(response.quotes.length - 1))
            quoteText.innerHTML = `${response.quotes[random].quote}`;
            quoteAuthor.innerHTML = `(${response.quotes[random].author})`;
        })
}

generateQuote();

/* ANOTHER WAY TO DO THAT (FOR OLDEST BROWSERS)
function generateQuote(){
    const quoteRequest = new XMLHttpRequest();

    quoteRequest.open("GET", "https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json", true);
    quoteRequest.send(null);

    quoteRequest.responseType = "json";

    let quoteText = document.querySelector('#quote_text')
    let quoteAuthor = document.querySelector('#quote_author')

    quoteRequest.addEventListener("load", function() {
        if (quoteRequest.status === 200) {
            const random = Number.parseInt(Math.random()*(quoteRequest.response.quotes.length - 1))
                quoteText.innerHTML = `${quoteRequest.response.quotes[random].quote}`;
                quoteAuthor.innerHTML = `(${quoteRequest.response.quotes[random].author})`;
            }
        })

    quoteRequest.addEventListener("error", function(){
        console.log("Nie udało się nawiązać połączenia");
    })
}

generateQuote(); */