const quickSort = (sourceArr, p, r) => {
	if (!Array.isArray(sourceArr)) return

	if (p < r) {
		const q = partition(sourceArr, p, r)

		quickSort(sourceArr, p, q - 1)
		quickSort(sourceArr, q + 1, r)
	}

	return sourceArr
}

const partition = (sourceArr, p, r) => {
	const x = sourceArr[r]
	let i = p

	for (let j = p; j < r; j++) {
		if (sourceArr[j] < x) {
			;[sourceArr[i], sourceArr[j]] = [sourceArr[j], sourceArr[i]]
			i++
		}
	}

	;[sourceArr[i], sourceArr[r]] = [sourceArr[r], sourceArr[i]]

	return i
}

const randomQuickSort = (sourceArr, p, r) => {
	if (!Array.isArray(sourceArr)) return

	if (p < r) {
		const q = randomPartition(sourceArr, p, r)

		randomQuickSort(sourceArr, p, q - 1)
		randomQuickSort(sourceArr, q + 1, r)
	}

	return sourceArr
}

const randomPartition = (sourceArr, p, r) => {
	const i = getRandomInt(p, r)
	;[sourceArr[i], sourceArr[r]] = [sourceArr[r], sourceArr[i]]

	return partition(sourceArr, p, r)
}

const getRandomInt = (max, min) => {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

// console.log(randomQuickSort([6, 4, 9, 1, 0, 11, 2, 3, 12, 20, 5, 7], 0, 11))
