function minDistance(word1: string, word2: string): number {
  const dp: number[][] = [];
  for (let i = 0; i < word1.length + 1; i++) {
    dp.push(Array(word2.length + 1).fill(0));
  }

  for (let i = 0; i < word1.length + 1; i++) {
    for (let j = 0; j < word2.length + 1; j++) {
      if (i === 0) {
        dp[i][j] = j;
        continue;
      }

      if (j === 0) {
        dp[i][j] = i;
        continue;
      }

      dp[i][j] =
        1 +
        Math.min(
          dp[i - 1][j],
          dp[i][j - 1],
          dp[i - 1][j - 1] - (word1[i - 1] === word2[j - 1] ? 1 : 0)
        );
    }
  }

  return dp[word1.length][word2.length];
}
