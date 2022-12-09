/**搜索旋转排序数组
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let start = 0
	let end = nums.length - 1
	let mid = (start + end) >> 1

	while (start <= end) {
		if (target === nums[mid]) {
			return mid
		}

		if (nums[start] <= nums[mid]) {
			if (target >= nums[start] && target < nums[mid]) {
				end = mid - 1
				mid = (start + mid) >> 1
			} else {
				start = mid + 1
				mid = (start + end) >> 1
			}
		} else {
			if (target > nums[mid] && target <= nums[end]) {
				start = mid + 1
				mid = (start + end) >> 1
			} else {
				end = mid - 1
				mid = (start + end) >> 1
			}
		}
	}
}

// test

search([4, 5, 6, 7, 0, 1, 2], 0)
