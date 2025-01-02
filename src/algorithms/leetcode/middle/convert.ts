function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  const arr: string[] = [];
  for (let i = 0; i < numRows; i++) {
    let j = i;
    let stage: 0 | 1 = 0;
    while (j < s.length) {
      arr.push(s[j]);
      if (i === 0 || i === numRows - 1) {
        j += 2 * numRows - 2;
      } else {
        if (stage === 0) {
          j += 2 * (numRows - i) - 2;
          stage = 1;
        } else {
          j += 2 * i;
          stage = 0;
        }
      }
    }
  }

  return arr.join("");
}
