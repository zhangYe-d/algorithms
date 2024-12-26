/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) return 0;
  if (coins.includes(amount)) return 1;

  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      const coin = coins[j];

      if (i >= coin) {
        dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
      }
    }
  }
  console.log(dp);
  return dp[amount] > amount ? -1 : dp[amount];
};

coinChange([1, 2, 5], 11);
