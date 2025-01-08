function canConstruct(ransomNote: string, magazine: string): boolean {
  const map: Map<string, number> = new Map();

  for (const char of magazine) {
    const value = map.get(char);
    if (value === undefined) {
      map.set(char, 1);
    } else {
      map.set(char, value + 1);
    }
  }

  for (const char of ransomNote) {
    const value = map.get(char);
    if (value === undefined || value < 1) {
      return false;
    } else {
      map.set(char, value - 1);
    }
  }
  return true;
}
