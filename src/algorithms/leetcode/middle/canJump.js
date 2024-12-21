/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length < 2) return true;
  let right = 0;
  for (let i = 0; i <= right; i++) {
    if (right < i + nums[i]) {
      right = i + nums[i];
    }
    if (right >= nums.length - 1) return true;
  }

  return false;
};
