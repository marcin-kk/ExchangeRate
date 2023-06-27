const currencyOne = document.querySelector("#currency-one")
const amountOne = document.querySelector(".amount-one")
const currencyTwo = document.querySelector("#currency-two")
const amountTwo = document.querySelector(".amount-two")
const swapBtn = document.querySelector(".swap")
const rateInfo = document.querySelector(".rate-info")

const calculate = () => {
	fetch(
		`https://api.exchangerate.host/convert?from=${currencyOne.value}&to=${currencyTwo.value}`
	)
		.then(res => res.json())
		.then(data => {
			console.log(data)
			console.log(data.info)
			console.log(currencyOne.value)
			const currency1 = currencyOne.value
			const currency2 = currencyTwo.value
			rateInfo.textContent = `1 ${currency1} = ${data.result.toFixed(
				4
			)} ${currency2}`

			const calcCurrency = amountOne.value * data.result
			amountTwo.value = calcCurrency.toFixed(2)
		})
}

currencyOne.addEventListener("change", calculate)
currencyTwo.addEventListener("change", calculate)
amountOne.addEventListener("input", calculate)

calculate()
