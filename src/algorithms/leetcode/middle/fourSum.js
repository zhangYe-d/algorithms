/**四数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
	if (nums.length < 4) {
		return []
	}

	nums.sort((a, b) => a - b)

	let answer = []

	for (let i = 0; i < nums.length - 3; i++) {
		if (nums[i] === nums[i - 1]) {
			continue
		}
		for (let j = i + 1; j < nums.length - 2; j++) {
			if (nums[j] === nums[j - 1] && i !== j - 1) {
				continue
			}

			let k = j + 1,
				l = nums.length - 1

			while (k < l) {
				if (nums[l] === nums[l + 1]) {
					l--
					continue
				}

				if (nums[k] === nums[k - 1] && j !== k - 1) {
					k++
					continue
				}

				const sum = nums[i] + nums[j] + nums[k] + nums[l]
				if (sum === target) {
					answer.push([nums[i], nums[j], nums[k], nums[l]])
					l--
					k++
				} else if (sum < target) {
					k++
				} else {
					l--
				}
			}
		}
	}

	return answer
}
