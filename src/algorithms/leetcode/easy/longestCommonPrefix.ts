function longestCommonPrefix(strs: string[]): string {
  let prefix: string = "";
  const firstStr: string = strs[0];

  for (let i = 0; i < firstStr.length; i++) {
    const char = firstStr[i];
    const isCommon = strs.every((str) => str[i] === char);
    if (isCommon) {
      prefix += char;
    } else {
      break;
    }
  }

  return prefix;
}
