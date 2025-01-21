function findKthLargest(
  nums: number[],
  k: number,
  left: number = 0,
  right: number = nums.length - 1
): number {
  if (left === right) return nums[left];
  const q = partition(nums, left, right);

  function partition(nums: number[], left: number, right: number): number {
    const x = nums[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
      if (nums[j] <= x) {
        [nums[j], nums[i + 1]] = [nums[i + 1], nums[j]];
        i++;
      }
    }

    [nums[right], nums[i + 1]] = [nums[i + 1], nums[right]];
    return i + 1;
  }

  if (q === right - k + 1) {
    return nums[q];
  } else if (q < right - k + 1) {
    return findKthLargest(nums, k, q + 1, right);
  } else {
    return findKthLargest(nums, k - right + q - 1, left, q - 1);
  }
}
