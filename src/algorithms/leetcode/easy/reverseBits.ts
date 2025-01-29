function reverseBits(n: number): number {
  const strs = n.toString(2).split("");
  for (let i = strs.length; i < 32; i++) {
    strs.unshift("0");
  }
  return parseInt(strs.reverse().join(""), 2);
}
