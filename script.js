// cotação das moedas
const USD = 5.74;
const EUR = 6.59;
const GBP = 7.76;

//obtendo os elementos do formulario
const amount = document.getElementById("amount");
const form = document.querySelector("form");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

//manipulando o input para que seja aceito apenas números
amount.addEventListener("input", () => {
    regexCaractersLetters = /\D+/g;
    const amountValue = amount.value.replace(regexCaractersLetters, "");
})

currency.addEventListener("input", (event) =>{
    const currencyValue = currency.value
})

//capturando o evento de (submit) do formulário
form.onsubmit = (event) => {
    event.preventDefault();

    switch (currency.value) {
        case "USD": 
            convertCurrency(amount.value, USD, "US$");
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€");
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£");
            break;
    }
}

//convertendo a moeda
function convertCurrency(amount, price, symbol) {
    const convertedAmount = amount * price;
    //tenta aplicar a classe que deixa o footer visivel e modificar seu resultado convertido
    
    try {
        description.textContent = `${symbol} 1 = R$ ${price}`
        result.textContent = `${convertedAmount} Reais`
        footer.classList.add("show-result");
    } catch (error) {
        console.log(error);
        footer.classList.remove("show-result");
        alert("Não foi possível converter, tente novamente em outro momento")
    }
}