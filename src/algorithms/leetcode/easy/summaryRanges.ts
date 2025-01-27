function summaryRanges(nums: number[]): string[] {
  const res: string[] = [];
  let i = 0;
  while (i < nums.length) {
    const first = nums[i];
    let last = nums[i];
    while (i + 1 < nums.length && nums[i + 1] - nums[i] === 1) {
      last = nums[i + 1];
      i += 1;
    }

    if (first !== last) {
      res.push(`${first}->${last}`);
    } else {
      res.push(String(first));
    }

    i += 1;
  }

  return res;
}
