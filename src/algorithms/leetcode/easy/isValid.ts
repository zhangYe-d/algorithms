function isValid(s: string): boolean {
  const stack: string[] = [];
  const bracketMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (const c of s) {
    if ([")", "]", "}"].includes(c)) {
      if (stack[stack.length - 1] === bracketMap[c]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(c);
    }
  }

  return stack.length ? false : true;
}
