function addBinary(a: string, b: string): string {
  let canary = 0;
  const long = a.length > b.length ? a : b;
  const short = a.length > b.length ? b : a;
  const arr: string[] = [];
  for (let i = 0; i < long.length; i++) {
    const longNum = parseInt(long[long.length - 1 - i]);
    const shortNum =
      i < short.length ? parseInt(short[short.length - 1 - i]) : 0;
    const num = (canary + longNum + shortNum) % 2;
    canary = (canary + longNum + shortNum) >> 1;
    arr.unshift(String(num));
  }

  if (canary) arr.unshift("1");

  return arr.join("");
}
