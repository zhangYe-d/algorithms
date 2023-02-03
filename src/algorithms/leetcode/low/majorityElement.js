/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	const len = nums.length
	if (len === 1) {
		return nums[0]
	}

	const freqMap = new Map()

	for (let i = 0; i < len; i++) {
		const num = nums[i]
		const freq = freqMap.get(num) || 0

		if (!freq) {
			freqMap.set(num, 1)
		} else {
			freqMap.set(num, freq + 1)
		}

		if (freq + 1 > len / 2) {
			return num
		}
	}

	return null
}
