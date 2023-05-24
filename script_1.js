
const convertBtn = document.getElementById("convert-btn");
convertBtn.addEventListener("click", function() {
	const tempInput = document.getElementById("temp-input").value;
	const fromUnit = document.getElementById("from-unit").value;
	const resultField = document.getElementById("result");
	if (fromUnit === "celsius") {
		const fahrenheit = (tempInput * 1.8) + 32;
		const kelvin = tempInput + 273.15;
		resultField.value = `${fahrenheit} F / ${kelvin} K`;
	} else if (fromUnit === "fahrenheit") {
		const celsius = (tempInput - 32) / 1.8;
		const kelvin = ((tempInput - 32) / 1.8) + 273.15;
		resultField.value = `${celsius} C / ${kelvin} K`;
	} else if (fromUnit === "kelvin") {
		const celsius = tempInput - 273.15;
		const fahrenheit = ((tempInput - 273.15) * 1.8) + 32;
		resultField.value = `${celsius} C / ${fahrenheit} F`;
	}

});

