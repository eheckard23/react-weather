const kelvinToFahrenheit = (k) => {
	return Math.floor(1.8 * (k-273) + 32)
}

module.exports = {
	kelvinToFahrenheit
}