function lengthOfLongestSubstring(s: string): number {
  if (s.length <= 1) return s.length;
  let start = 0,
    end = 0,
    length = 1;
  const set: Set<string> = new Set();

  while (end < s.length) {
    while (!set.has(s[end]) && end < s.length) {
      set.add(s[end++]);
    }
    length = Math.max(length, set.size);
    set.delete(s[start]);
    start++;
    end = Math.max(start, end);
  }

  return length;
}
