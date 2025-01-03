function isSubsequence(s: string, t: string): boolean {
  let i = 0,
    j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] !== t[j]) {
      j++;
    } else {
      i++;
      j++;
    }
  }

  if (i < s.length) return false;

  return true;
}
