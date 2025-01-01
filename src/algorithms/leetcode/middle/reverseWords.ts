function reverseWords(s: string): string {
  return s.trim().split(/ +/).reverse().join(" ");
}
