/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
	const length = numbers.length
	if (length === 1) {
		return numbers[0]
	}

	let left = 0
	let right = length - 1

	while (left < right) {
		const mid = (left + right) >> 1

		if (numbers[mid] === numbers[right]) {
			right--
		} else if (numbers[mid] < numbers[right]) {
			right = mid
		} else {
			left = mid + 1
		}
	}

	return numbers[left]
}
