function maxArea(height: number[]): number {
  let left = 0,
    right = height.length - 1,
    i = left,
    j = right;

  let max = Math.min(height[right], height[left]) * (right - left);
  while (i < j) {
    const nextArea = Math.min(height[j], height[i]) * (j - i);

    if (max < nextArea) {
      max = nextArea;
      left = i;
      right = j;
    }
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return max;
}
