const currencyOne = document.querySelector("#currency-one")
const amountOne = document.querySelector(".amount-one")
const currencyTwo = document.querySelector("#currency-two")
const amountTwo = document.querySelector(".amount-two")
const swapBtn = document.querySelector(".swap")
const rateInfo = document.querySelector(".rate-info")

const calculate = () => {
	const currency1 = currencyOne.value
	const currency2 = currencyTwo.value

	fetch(
		`https://api.exchangerate.host/convert?from=${currency1}&to=${currency2}`
	)
		.then(res => res.json())
		.then(data => {
			// console.log(data)
			// console.log(data.info)
			// console.log(currencyOne.value)

			const exRate = data.result
			rateInfo.textContent = `1 ${currency1} = ${exRate.toFixed(
				4
			)} ${currency2}`

			const calcCurrency = amountOne.value * data.result
			amountTwo.value = calcCurrency.toFixed(2)
		})
}

const swap = () => {
	const currency1 = currencyOne.value
	const currency2 = currencyTwo.value

	currencyOne.value = currency2
	currencyTwo.value = currency1

	calculate()
}

currencyOne.addEventListener("change", calculate)
currencyTwo.addEventListener("change", calculate)
amountOne.addEventListener("input", calculate)
swapBtn.addEventListener("click", swap)
calculate()
