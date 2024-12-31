function lengthOfLastWord(s: string): number {
  const arr = s.split(/ +/);
  let ans;
  while (!(ans = arr.pop())) {}
  return ans.length;
}
