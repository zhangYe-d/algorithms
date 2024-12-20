/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
	const map = new Map()

	for (let i = 0; i < s.length; i++) {
		const char = s.charAt(i)

		if (map.has(char)) {
			map.set(char, map.get(char) + 1)
		} else {
			map.set(char, 1)
		}
	}

	for (let [key, value] of map) {
		if (value === 1) {
			return key
		}
	}

	return ' '
}
