/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let steps = 0;
  let right = 0;
  let maxPos = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (maxPos < i + nums[i]) {
      maxPos = i + nums[i];
    }

    if (i === right) {
      right = maxPos;
      steps++;

      if (right >= nums.length - 1) {
        return steps;
      }
    }
  }

  return steps;
};
