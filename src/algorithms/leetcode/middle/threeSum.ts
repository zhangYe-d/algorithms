function threeSum(nums: number[]): number[][] {
  nums.sort((num1, num2) => num1 - num2);
  const res: [number, number, number][] = [];
  let lastFirst = Infinity,
    lastSecond = Infinity;
  for (let i = 0; i < nums.length; i++) {
    const first = nums[i];
    if (first === lastFirst) continue;
    lastFirst = first;
    for (let j = i + 1; j < nums.length; j++) {
      const second = nums[j];
      if (second === lastSecond) continue;
      lastSecond = second;
      const third = -(first + second);
      let start = j + 1,
        end = nums.length - 1;
      while (start <= end) {
        const mid = (start + end) >> 1;
        if (nums[mid] === third) {
          res.push([first, second, third]);
          break;
        } else if (nums[mid] > third) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      }
    }
  }
  return res;
}
