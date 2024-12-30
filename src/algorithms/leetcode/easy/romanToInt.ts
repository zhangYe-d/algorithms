function romanToInt(s: string): number {
  const r2iMap = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    L: 50,
    XL: 40,
    C: 100,
    XC: 90,
    D: 500,
    CD: 400,
    M: 1000,
    CM: 900,
  };

  let int: number = 0;
  let i: number = s.length - 1;
  while (i >= 0) {
    if (i - 1 >= 0 && r2iMap[s.slice(i - 1, i + 1)]) {
      int += r2iMap[s.slice(i - 1, i + 1)];
      i -= 2;
    } else {
      int += r2iMap[s[i]];
      i -= 1;
    }
  }

  return int;
}
