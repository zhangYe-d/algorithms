const quickSort = (sourceArr, p, r) => {
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

// console.log(quickSort([6, 4, 9, 1, 0], 0, 4))
