const amount = document.getElementById("amount");
const form = document.querySelector("form");
const currency = document.getElementById("currency");


amount.addEventListener("input", () => {
    regexCaractersLetters = /\D+/g;
    const amountValue = amount.value.replace(regexCaractersLetters, "");
    console.log(amountValue);
})

currency.addEventListener("input", (event) =>{
    const currencyValue = currency.value
    console.log(currencyValue);
})

form.onsubmit = (event) => {
    event.preventDefault();
}