let currency1 = document.getElementById("currency1");
// console.log(currency1);
let currency2 = document.getElementById("currency2");
// console.log(currency2);
let btn = document.getElementById("btn");
let inputs = document.getElementById("input");
let result = document.getElementById("result");

fetch("https://www.frankfurter.app/currencies")
  .then((res) => res.json())
  .then((res) => dropdown(res));

function dropdown(res) {
  let curr = Object.entries(res);
  // For loop //
  for (let i = 0; i < curr.length; i++) {
    let opt = `<option value ="${curr[i][0]}">${curr[i][0]}</option>`;
    console.log(opt);

    currency1.innerHTML += opt;
    currency2.innerHTML += opt;
  }
}

btn.addEventListener("click", () => {
  let currency1val = currency1.value;
  let currency2val = currency2.value;
  let inputval = inputs.value;

  if (currency1val === currency2val) {
    alert("Choose different Currencies");
  } else {
    Convertcurrency(currency1val, currency2val, inputval);
  }
});

function Convertcurrency(currency1val, currency2val, inputval) {
  const host = "api.frankfurter.app";
  fetch(
    `https://${host}/latest?amount=${inputval}&from=${currency1val}&to=${currency2val}`
  )
    .then((resp) => resp.json())
    .then((data) => {
      //  alert(`10 GBP = ${data.rates.USD} USD`);
      //   console.log(Object.entries(data.rates));

      result.value = Object.values(data.rates)[0];
    });
}
