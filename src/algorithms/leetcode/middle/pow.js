var myPow = function (x, n) {
	if (n < 0) {
		return myPow(1 / x, Math.abs(n))
	}

	if (n === 0) {
		return 1
	}

	const half = Math.floor(n / 2)

	if (n % 2 === 0) {
		return myPow(x * x, half)
	} else {
		return x * myPow(x * x, half)
	}
}
