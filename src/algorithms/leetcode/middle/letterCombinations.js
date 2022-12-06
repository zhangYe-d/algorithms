/**电话号码的字母组合
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
	const map = {
		2: 'abc',
		3: 'def',
		4: 'ghi',
		5: 'jkl',
		6: 'mno',
		7: 'pqrs',
		8: 'tuv',
		9: 'wxyz',
	}

	let result = []

	for (let i = 0; i < digits.length; i++) {
		let str = map[digits[i]]
		if (i === 0) {
			result = [...str]
			continue
		}

		let newRes = []

		for (let j = 0; j < str.length; j++) {
			newRes = newRes.concat(result.map(item => item + str[j]))
		}

		result = newRes
	}

	return result
}
