const convert = document.getElementById("convert");
const result = document.getElementById("result");
const yourCurrency = document.getElementById("yourCurrency");
const wantedCurrency = document.getElementById("wantedCurrency");
const amount = document.getElementById("amount");

convert.addEventListener("click", function() {
    let fromCurrency = yourCurrency.value;
    let toCurrency = wantedCurrency.value;
    let amt = amount.value;

    fetch(`http://v6.exchangerate-api.com/v6/b9290a5c87aaef275a558257/latest/${fromCurrency}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        let rate = data.rates[toCurrency];
        let total = rate * amt;
        result.innerHTML = `${amt} ${fromCurrency} = ${total} ${toCurrency}`;
    });
});