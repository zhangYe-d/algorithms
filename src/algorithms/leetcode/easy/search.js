/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	const len = nums.length

	if (len === 0) {
		return 0
	}

	let left = 0
	let right = len - 1
	let targetIndex = -1

	while (left <= right) {
		const mid = (left + right) >> 1

		if (nums[mid] === target) {
			targetIndex = mid
			break
		} else if (nums[mid] > target) {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}

	if (targetIndex === -1) {
		return 0
	}

	let count = 1
	let index = targetIndex + 1

	while (index < len && nums[index] === target) {
		count++
		index++
	}

	index = targetIndex - 1

	while (index >= 0 && nums[index] === target) {
		count++
		index--
	}

	return count
}
