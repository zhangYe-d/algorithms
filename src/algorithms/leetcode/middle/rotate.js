/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const length = nums.length;
  if (length < 2) return;

  k = k % length;

  function rotate(nums, start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }

  rotate(nums, 0, length - 1);
  rotate(nums, 0, k - 1);
  rotate(nums, k, length - 1);
};
