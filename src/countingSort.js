const countingSort = (sourceArr, k) => {
	if (!Array.isArray(sourceArr)) return

	const countingArray = new Array(k + 1).fill(0)
	const targetArr = new Array(sourceArr.length)

	for (let i = 0; i < sourceArr.length; i++) {
		countingArray[sourceArr[i]]++
	}

	console.log(countingArray)

	for (let j = 1; j < k + 1; j++) {
		countingArray[j] = countingArray[j] + countingArray[j - 1]
	}

	for (let l = 0; l < sourceArr.length; l++) {
		const item = sourceArr[l]
		const count = countingArray[item]

		targetArr[count - 1] = item
		countingArray[item]--
	}

	return targetArr
}

// console.log(countingSort([6, 4, 9, 1, 0, 11, 2, 3, 12, 20, 5, 7], 20))
