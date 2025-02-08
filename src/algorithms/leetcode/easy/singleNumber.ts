function singleNumber(nums: number[]): number {
  let ans = 0;
  nums.forEach((num) => {
    ans ^= num;
  });

  return ans;
}
