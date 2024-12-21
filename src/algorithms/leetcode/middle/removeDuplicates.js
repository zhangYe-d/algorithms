/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length < 3) return nums.length;

  let left = 1;

  for (let right = 2; right < nums.length; right++) {
    if (nums[right] !== nums[left - 1] && ++left !== right) {
      nums[left] = nums[right];
    }
  }

  return left + 1;
};
