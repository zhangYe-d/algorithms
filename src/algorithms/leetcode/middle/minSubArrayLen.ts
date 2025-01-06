function minSubArrayLen(target: number, nums: number[]): number {
  let minLength = Infinity,
    start = 0,
    end = 0,
    sum = 0;
  while (end < nums.length) {
    while (sum < target && end < nums.length) {
      sum += nums[end];
      if (sum < target) {
        end++;
      }
    }

    while (sum >= target && start <= end) {
      minLength = Math.min(minLength, end - start + 1);
      sum -= nums[start++];
    }
    end++;
  }
  return minLength < Infinity ? minLength : 0;
}

minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
