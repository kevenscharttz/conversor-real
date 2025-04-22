const amount = document.getElementById("amount");
const form = document.querySelector("form");
const currency = document.getElementById("currency");


amount.addEventListener("input", () => {

    regexCaractersLetters = /\D+/g;
    value = amount.value.replace(regexCaractersLetters, "");
    console.log(value);
})
