// 1.快慢指针
/**原址删除数组中的重复元素
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	if (nums.length < 2) {
		return nums.length
	}

	let fast = 1
	let slow = 1
	while (fast < nums.length) {
		if (nums[fast] !== nums[fast - 1]) {
			nums[slow] = nums[fast]
			slow++
		}

		fast++
	}

	return slow
}
