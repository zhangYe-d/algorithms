/**
 * 将整数转为罗马数字
 * @param {number} sourceNum
 * @return {string}
 */
var intToRoman = function (sourceNum) {
	let resultRoman = ''
	const symbolArray = [
		{ num: 1000, roman: 'M' },
		{ num: 900, roman: 'CM' },
		{ num: 500, roman: 'D' },
		{ num: 400, roman: 'CD' },
		{ num: 100, roman: 'C' },
		{ num: 90, roman: 'XC' },
		{ num: 50, roman: 'L' },
		{ num: 40, roman: 'XL' },
		{ num: 10, roman: 'X' },
		{ num: 9, roman: 'IX' },
		{ num: 5, roman: 'V' },
		{ num: 4, roman: 'IV' },
		{ num: 1, roman: 'I' },
	]

	while (sourceNum !== 0) {
		const { num, roman } = symbolArray.find(({ num }) => num <= sourceNum)
		resultRoman += roman
		sourceNum -= num
	}

	return resultRoman
}
