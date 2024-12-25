/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const dp = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      dp[i] = nums[i];
    } else {
      dp[i] = Math.max(nums[i] + (dp[i - 2] || 0), dp[i - 1]);
    }
  }

  return dp[nums.length - 1];
};
