function threeSum(nums: number[]): number[][] {
  nums.sort((num1, num2) => num1 - num2);
  const res: [number, number, number][] = [];
  let lastFirst = Infinity;
  for (let i = 0; i < nums.length; i++) {
    const first = nums[i];
    if (first === lastFirst) continue;
    lastFirst = first;
    let j = i + 1,
      k = nums.length - 1;
    let second = nums[j],
      third = nums[k];
    while (j < k) {
      const sum = first + second + third;
      if (sum === 0) {
        res.push([first, second, third]);
        while (nums[j] === second) {
          j++;
        }
        second = nums[j];
      } else if (sum > 0) {
        while (nums[k] === third) {
          k--;
        }
        third = nums[k];
      } else {
        while (nums[j] === second) {
          j++;
        }
        second = nums[j];
      }
    }
  }
  return res;
}
