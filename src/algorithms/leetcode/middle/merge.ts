function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  const ans: number[][] = [];
  intervals.forEach((interval) => {
    if (ans.length) {
      const last = ans[ans.length - 1];
      if (last[1] >= interval[0]) {
        const inte = [
          Math.min(last[0], interval[0]),
          Math.max(last[1], interval[1]),
        ];
        ans.pop();
        ans.push(inte);
      } else {
        ans.push(interval);
      }
    } else {
      ans.push(interval);
    }
  });
  return ans;
}
