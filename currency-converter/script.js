console.log("Heloł!");

let formElement = document.querySelector(".js-form");

let amountElement = document.querySelector(".js-amount");

let currencyElement = document.querySelector(".js-currency");

let resultElement = document.querySelector(".js-result");

let rateEUR = "4.70";
let rateGBP = "5.33";
let rateUSD = "4.36";

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result = 0;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;
        case "GBP":
            result = amount / rateGBP;
            break;
        case "USD":
            result = amount / rateUSD;
            break;
    }

    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong> ${result.toFixed(2)} ${currency}</strong>`;
});
