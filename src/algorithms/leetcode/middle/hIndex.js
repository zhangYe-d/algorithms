/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let n = citations.length,
    tot = 0;

  const countArr = Array(n + 1).fill(0);
  citations.forEach((num) => {
    if (num > n) {
      countArr[n] += 1;
    } else {
      countArr[num] += 1;
    }
  });

  for (let i = n; i >= 0; i--) {
    tot += countArr[i];

    if (tot >= i) {
      return i;
    }
  }

  return 0;
};
