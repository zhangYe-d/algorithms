/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  s = s.split(" ");
  if (pattern.length !== s.length) return false;
  const psMap = new Map();
  const spMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const pChar = pattern[i];
    const sChar = s[i];

    const psMapValue = psMap.get(pChar);
    const spMapValue = spMap.get(sChar);
    if (!psMapValue && !spMapValue) {
      psMap.set(pChar, sChar);
      spMap.set(sChar, pChar);
    } else if (psMapValue !== sChar || spMapValue !== pChar) {
      return false;
    }
  }

  return true;
};
