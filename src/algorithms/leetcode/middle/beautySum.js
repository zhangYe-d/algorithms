/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function (s) {
	let res = 0
	for (let i = 0; i < s.length - 1; i++) {
		let map = new Map([[s.charAt(i), 1]])
		for (let j = i + 1; j < s.length; j++) {
			const char = s.charAt(j)
			const charCount = map.get(char) ? map.get(char) + 1 : 1
			map.set(char, charCount)

			let highFreq = charCount
			let lowFreq = charCount
			for (let [key, value] of map) {
				highFreq = Math.max(highFreq, value)
				lowFreq = Math.min(lowFreq, value)
			}

			res += highFreq - lowFreq
		}
	}

	return res
}

// test

beautySum('aabcb')
