const mergeSort = sourceArr => {
	if (!Array.isArray(sourceArr)) return
	if (sourceArr.length <= 1) return sourceArr

	const mid = sourceArr.length >> 1

	const sortedLeft = mergeSort(sourceArr.slice(0, mid))
	const sortedRight = mergeSort(sourceArr.slice(mid))

	return merge(sortedLeft, sortedRight)
}

const merge = (left, right) => {
	const mergedArray = []
	let i = 0
	let j = 0

	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			mergedArray.push(left[i])
			i++
		} else {
			mergedArray.push(right[j])
			j++
		}
	}

	while (i < left.length) {
		mergedArray.push(left[i])
		i++
	}

	while (j < right.length) {
		mergedArray.push(right[j])
		j++
	}

	return mergedArray
}

// console.log(mergeSort([6, 4, 9, 1, 0]))
