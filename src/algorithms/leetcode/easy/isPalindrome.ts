function isPalindrome(s: string): boolean {
  let i = 0,
    j = s.length - 1;

  while (i < j) {
    const strI = s[i];
    const strJ = s[j];
    if (!/[a-zA-Z0-9]/.test(strI) || !/[a-zA-Z0-9]/.test(strJ)) {
      !/[a-zA-Z0-9]/.test(strI) && i++;
      !/[a-zA-Z0-9]/.test(strJ) && j--;
      continue;
    }

    if (strI.toLowerCase() !== strJ.toLowerCase()) {
      return false;
    }

    i++;
    j--;
  }
  return true;
}
