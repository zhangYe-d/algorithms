function hammingWeight(n: number): number {
  let count = 0;
  while (n) {
    if ((n & 1) === 1) {
      count++;
    }

    n >>= 1;
  }
  return count;
}
