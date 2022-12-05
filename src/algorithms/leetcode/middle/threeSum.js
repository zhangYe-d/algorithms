/**三数之和
 * 1.排序 2.二三层循环使用双指针
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	let answer = []
	nums = nums.sort((a, b) => a - b)

	for (let i = 0; i < nums.length - 2; i++) {
		if (nums[i] === nums[i - 1]) {
			continue
		}
		let k = nums.length - 1

		for (let j = i + 1; j < k; j++) {
			if (nums[j] === nums[j - 1] && i !== j - 1) {
				continue
			}

			for (; k > j; k--) {
				const sum = nums[i] + nums[j] + nums[k]
				if (sum <= 0) {
					if (sum === 0) {
						answer.push([nums[i], nums[j], nums[k]])
					}

					break
				}
			}
		}
	}

	return answer
}

// test
console.log(threeSum([0, 0, 0]))
