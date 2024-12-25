/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const set = new Set(wordDict);
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i < s.length + 1; i++) {
    let inDict = false;
    for (let j = 0; j < i; j++) {
      const leftIn = dp[j];
      const right = s.slice(j, i);

      const rightIn = set.has(right);
      if (leftIn && rightIn) {
        inDict = true;
      }
    }
    dp[i] = inDict;
  }
  return dp[s.length];
};

console.log(wordBreak("leetcode", ["leet", "code"]));
