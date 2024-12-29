function canCompleteCircuit(gas: number[], cost: number[]): number {
  let n = gas.length;
  let i: number = 0;

  while (i < n) {
    let currentGas: number = 0;
    let count: number = 0;
    let j: number = 0;
    while (j < n) {
      const index = (i + j) % n;
      currentGas += gas[index] - cost[index];
      if (currentGas < 0) {
        break;
      } else {
        count++;
        j++;
      }
    }

    if (count === n) {
      return i;
    } else {
      i += count + 1;
    }
  }
  return -1;
}
