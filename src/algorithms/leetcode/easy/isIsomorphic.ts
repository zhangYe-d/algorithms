/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  const STmap: Map<string, string> = new Map();
  const TSmap: Map<string, string> = new Map();
  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];
    const STMapChar = STmap.get(charS);
    const TSMapChar = TSmap.get(charT);
    if (!STMapChar && !TSMapChar) {
      STmap.set(charS, charT);
      TSmap.set(charT, charS);
    } else if (STMapChar !== charT || TSMapChar !== charS) {
      return false;
    }
  }

  return true;
};
