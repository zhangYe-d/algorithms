/** 移除数组元素
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	let fast = 0
	let slow = 0

	while (fast < nums.length) {
		if (nums[fast] !== val) {
			nums[slow] = nums[fast]
			slow++
		}

		fast++
	}

	return slow
}
