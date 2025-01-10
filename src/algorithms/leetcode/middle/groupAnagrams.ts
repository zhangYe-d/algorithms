/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs: string[]): string[][] {
  const anagrams: Map<string, string[]> = new Map();

  strs.forEach((str) => {
    const key = Array.from(str).sort().join("");
    const group = anagrams.get(key);
    if (!group) {
      anagrams.set(key, [str]);
    } else {
      group.push(str);
    }
  });

  return Array.from(anagrams.values());
};
