/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let current1 = m - 1,
    current2 = n - 1,
    currentEnd = m + n - 1;

  while (currentEnd >= 0 && current1 >= 0 && current2 >= 0) {
    if (nums1[current1] > nums2[current2]) {
      nums1[currentEnd] = nums1[current1];
      current1--;
      currentEnd--;
    } else {
      nums1[currentEnd] = nums2[current2];
      current2--;
      currentEnd--;
    }
  }

  while (current2 >= 0) {
    nums1[currentEnd] = nums2[current2];
    current2--;
    currentEnd--;
  }
};

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1);
