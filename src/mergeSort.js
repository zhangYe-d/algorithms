const mergeSort = sourceArr => {
	if (!Array.isArray(sourceArr)) return
	if (sourceArr.length <= 1) return sourceArr

	const mid = sourceArr >> 1

	return merge(
		sourceArr.slice(0, mid + 1),
		sourceArr.slice(mid + 1, sourceArr.length)
	)
}

const merge = (left, right) => {}
