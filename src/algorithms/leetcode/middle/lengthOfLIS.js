/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length < 2) return nums.length;
  let len = 1;
  const d = [-Infinity, nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (d[len] < nums[i]) {
      d[++len] = nums[i];
    } else {
      let left = 0,
        right = len;

      while (left <= right) {
        const mid = (left + right) >> 1;
        if (d[mid - 1] < nums[i] && nums[i] < d[mid]) {
          d[mid] = nums[i];
          break;
        } else if (nums[i] > d[mid]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
  }

  return len;
};

lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]);
