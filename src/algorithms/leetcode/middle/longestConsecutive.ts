function longestConsecutive(nums: number[]): number {
  const set: Set<number> = new Set();
  return nums
    .filter((num) => {
      if (!set.has(num)) {
        set.add(num);
        return true;
      }
      return false;
    })
    .reduce((maxLength, num) => {
      if (!set.has(num - 1)) {
        let count = 1;
        let next = num + 1;
        while (set.has(next)) {
          count++;
          next++;
        }

        return Math.max(maxLength, count);
      }
      return maxLength;
    }, 0);
}
