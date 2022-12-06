/**三数最近之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
	nums = nums.sort((a, b) => a - b)

	let answer = 0
	let delta = Infinity
	for (let i = 0; i < nums.length - 2; i++) {
		let j = i + 1,
			k = nums.length - 1
		while (j !== k) {
			const threeSum = nums[i] + nums[j] + nums[k]

			if (threeSum === target) {
				return threeSum
			}
			if (Math.abs(target - threeSum) < delta) {
				delta = Math.abs(target - threeSum)
				answer = threeSum
			}

			if (threeSum < target) {
				j++
			} else {
				k--
			}
		}
	}

	return answer
}

// test
console.log(threeSumClosest([-1, 2, 1, -4], 1))
