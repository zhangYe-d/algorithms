/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = Array(n).fill(0);

  for (let i = 1; i < n + 1; i++) {
    if (i === 1) {
      dp[i - 1] = 1;
    } else if (i === 2) {
      dp[i - 1] = 2;
    } else {
      dp[i - 1] = dp[i - 2] + dp[i - 3];
    }
  }

  return dp[n - 1];
};
