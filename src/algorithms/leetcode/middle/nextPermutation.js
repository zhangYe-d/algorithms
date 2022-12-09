/**下一个排列
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
	let small = undefined
	let big = undefined
	let smallIndex = -1
	let bigIndex = -1

	for (let i = nums.length - 2; i >= 0; i--) {
		if (nums[i] < nums[i + 1]) {
			small = nums[i]
			smallIndex = i
			break
		}
	}

	if (smallIndex !== -1) {
		for (let j = nums.length - 1; j > smallIndex; j--) {
			if (nums[j] > small) {
				big = nums[j]
				bigIndex = j
				break
			}
		}

		;[nums[bigIndex], nums[smallIndex]] = [small, big]
	}

	let i = smallIndex + 1,
		j = nums.length - 1

	while (i < j) {
		;[nums[i], nums[j]] = [nums[j], nums[i]]

		i++
		j--
	}
}
