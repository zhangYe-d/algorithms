function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      break;
    } else {
      digits[i] = 0;
    }
  }
  if (digits[0] === 0) digits.unshift(1);
  return digits;
}
