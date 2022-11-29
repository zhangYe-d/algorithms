/**
 * 求解两个序列的最大公共子序列长度
 * @param {string} sequenceA 序列A
 * @param {string} sequenceB 序列B
 * @returns 最大公共子序列长度
 */
function longestCommonSequence(sequenceA, sequenceB) {
	const m = sequenceA.length
	const n = sequenceB.length

	sequenceA = ' ' + sequenceA
	sequenceB = ' ' + sequenceB

	let c = []

	for (let i = 0; i <= m; i++) {
		if (i === 0) {
			c[i] = new Array(n).fill(0)
		} else {
			c[i] = [0]
		}
	}

	// console.log(c[0])
	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			if (sequenceA.charAt(i) === sequenceB.charAt(j)) {
				c[i][j] = c[i - 1][j - 1] + 1
			} else {
				c[i][j] = Math.max(c[i][j - 1], c[i - 1][j])
			}

			console.log(`i, j: (${i}, ${j})`, c[i][j])
		}
	}

	return c
}

function printSubSequence(sequenceA, sequenceB) {
	const c = longestCommonSequence(sequenceA, sequenceB)

	sequenceA = ' ' + sequenceA
	sequenceB = ' ' + sequenceB
	let i = sequenceA.length - 1
	let j = sequenceB.length - 1
	let subSequence = ''

	console.log('length: ', c[i][j])

	while (i > 0 && j > 0) {
		if (sequenceA.charAt(i) === sequenceB.charAt(j)) {
			subSequence += sequenceA.charAt(i)
			i--
			j--
		} else {
			if (c[i][j - 1] >= c[i - 1][j]) {
				j--
			} else {
				i--
			}
		}
	}

	console.log('subSequence: ', subSequence)
}

// test

printSubSequence('BDCABA', 'ABCBDAB')
