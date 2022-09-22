/**
 * 查找数组中第k小的元素
 * @param {Array} sourceArr 目标数组
 * @param {number} p 左边界
 * @param {number} r 右边界
 * @param {number} k 顺序
 * @returns
 */
const randomSelect = (sourceArr, p, r, k) => {
	if (!Array.isArray(sourceArr)) return
	if (p === r) return sourceArr[p]

	const q = randomPartition(sourceArr, p, r)

	// console.log('p:', p, 'r:', r, 'q:', q, 'k:', k)
	const s = q - p + 1
	if (s === k) {
		return sourceArr[q]
	} else if (s < k) {
		const k1 = k - s
		return randomSelect(sourceArr, q + 1, r, k1)
	} else {
		return randomSelect(sourceArr, p, q - 1, k)
	}
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

const randomPartition = (sourceArr, p, r) => {
	const i = getRandomInt(p, r)
	;[sourceArr[i], sourceArr[r]] = [sourceArr[r], sourceArr[i]]

	return partition(sourceArr, p, r)
}

const getRandomInt = (max, min) => {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

// console.log(randomSelect([6, 4, 9, 1, 0], 0, 4, 1))
// console.log(randomSelect([6, 4, 9, 1, 0], 0, 4, 2))
// console.log(randomSelect([6, 4, 9, 1, 0], 0, 4, 3))
// console.log(randomSelect([6, 4, 9, 1, 0], 0, 4, 4))
// console.log(randomSelect([6, 4, 9, 1, 0], 0, 4, 5))
