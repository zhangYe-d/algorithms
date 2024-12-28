function productExceptSelf(nums: number[]): number[] {
  const length: number = nums.length;
  if (length === 0) return [];
  if (length === 1) return [1];

  const anwsers: number[] = [1];

  for (let i: number = 1; i < length; i++) {
    anwsers[i] = anwsers[i - 1] * nums[i];
  }

  let R: number = 1;
  for (let i: number = length - 1; i >= 0; i--) {
    if (i !== length - 1) {
      R *= nums[i + 1];
    }

    anwsers[i] *= R;
  }

  return anwsers;
}

console.log(productExceptSelf([1, 2, 3, 4]));
