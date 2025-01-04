function twoSum(numbers: number[], target: number): number[] {
  const half = target >> 1;
  let left = 0,
    right = numbers.length - 1;

  while (left < right) {
    const mid = (right + left) >> 1;

    if (numbers[mid] < half) {
      left = mid + 1;
    } else if (numbers[mid] === half) {
      left = mid;
      break;
    } else {
      right = mid - 1;
    }
  }

  left = Math.min(left, right, numbers.length - 2);
  if (left < 0) left = 0;
  right = left + 1;
  while (numbers[left] + numbers[right] !== target) {
    if (numbers[left] + numbers[right] > target) {
      if (left === 0) {
        right--;
      } else {
        left--;
      }
    } else {
      if (right === numbers.length - 1) {
        left++;
      } else {
        right++;
      }
    }
  }

  return [left + 1, right + 1];
}
