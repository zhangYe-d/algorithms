/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicate = function (nums) {
  if (nums.length <= 1) return nums.length;
  let left = 0;

  for (let right = 1; right < nums.length; right++) {
    if (nums[right] !== nums[left] && ++left !== right) {
      nums[left] = nums[right];
    }
  }

  return left + 1;
};
