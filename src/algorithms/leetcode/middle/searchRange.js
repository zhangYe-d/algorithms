/**在排序数组中查找元素的第一个和最后一个位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
	let start = 0
	let end = nums.length - 1
	let mid = (start + end) >> 1
	let leftIndex = nums[start] === target ? 0 : -1
	let rightIndex = nums[end] === target ? end : -1

	while (start <= end) {
		if (nums[mid] > target) {
			rightIndex = mid - 1
			end = mid - 1
		} else {
			start = mid + 1
		}
		mid = (start + end) >> 1
	}
	start = 0
	end = nums.length - 1
	mid = (start + end) >> 1

	while (start <= end) {
		if (nums[mid] < target) {
			leftIndex = mid + 1
			start = mid + 1
		} else {
			end = mid - 1
		}

		mid = (start + end) >> 1
	}

	if (nums[leftIndex] !== target) {
		leftIndex = -1
	}

	if (nums[rightIndex] !== target) {
		rightIndex = -1
	}

	return [leftIndex, rightIndex]
}
