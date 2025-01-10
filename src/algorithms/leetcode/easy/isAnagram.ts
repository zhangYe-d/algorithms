/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const map = new Map();

  for (const char of s) {
    const value = map.get(char);
    if (!value) {
      map.set(char, 1);
    } else {
      map.set(char, value + 1);
    }
  }

  for (const char of t) {
    const value = map.get(char);
    if (!value) {
      return false;
    } else {
      map.set(char, value - 1);
    }
  }

  return true;
};
