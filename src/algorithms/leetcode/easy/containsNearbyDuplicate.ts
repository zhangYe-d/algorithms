function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const mapIndex = map.get(num);
    if (mapIndex === undefined) {
      map.set(num, i);
    } else if (i - mapIndex <= k) {
      return true;
    } else {
      map.set(num, i);
    }
  }
  return false;
}
