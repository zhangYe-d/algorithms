function insert(intervals: number[][], newInterval: number[]): number[][] {
  const ans: number[][] = [];
  const inte = [Infinity, -Infinity];
  let i = -1;
  intervals.forEach((interval, index) => {
    if (i !== -1) {
      ans.push(interval);
      return;
    }

    if (newInterval[1] < interval[0]) {
      ans.push([
        Math.min(inte[0], newInterval[0]),
        Math.max(inte[1], newInterval[1]),
      ]);
      i = index;
      ans.push(interval);
    } else if (newInterval[0] > interval[1]) {
      ans.push(interval);
    } else {
      inte[0] = Math.min(inte[0], interval[0]);
      inte[1] = Math.max(inte[1], interval[1]);
    }
  });

  if (i === -1) {
    ans.push([
      Math.min(inte[0], newInterval[0]),
      Math.max(inte[1], newInterval[1]),
    ]);
  }

  return ans;
}
