function singleNumber(nums: number[]): number {
  const map: Map<number, number> = new Map();
  nums.forEach((num) => {
    const count = map.get(num);
    if (!count) {
      map.set(num, 1);
    } else {
      map.set(num, count + 1);
    }
  });

  for (const [num, count] of map) {
    if (count === 1) {
      return num;
    }
  }
  return -1;
}
