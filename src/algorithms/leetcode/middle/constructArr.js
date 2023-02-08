/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
	const len = a.length
	const left = []
	const right = []

	for (let i = 0; i < len; i++) {
		if (i === 0) {
			left[i] = 1
		} else {
			left[i] = left[i - 1] * a[i - 1]
		}
	}

	for (let i = len - 1; i > -1; i--) {
		if (i === len - 1) {
			right[i] = 1
		} else {
			right[i] = right[i + 1] * a[i + 1]
		}
	}

	return left.map((item, i) => left[i] * right[i])
}
