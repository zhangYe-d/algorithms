function isPalindrome(x: number): boolean {
  const xstr = x.toString();
  if (xstr[0] === "-") return false;
  const length = xstr.length;
  let i = 0;
  while (i < length - i - 1) {
    if (xstr[i] !== xstr[length - i - 1]) {
      return false;
    }
    i++;
  }

  return true;
}
