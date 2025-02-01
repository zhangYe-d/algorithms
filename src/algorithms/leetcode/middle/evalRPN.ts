function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  tokens.forEach((token) => {
    if (/[0-9]/.test(token)) {
      stack.push(parseInt(token));
    } else {
      const right = stack.pop();
      const left = stack.pop();
      stack.push(operate(token, left as number, right as number));
    }
  });
  return stack.pop() as number;
}

function operate(operator: string, left: number, right: number): number {
  switch (operator) {
    case "+":
      return left + right;
    case "-":
      return left - right;
    case "*":
      return left * right;
    case "/":
      const res = left / right;
      return res < 0 ? Math.ceil(res) : Math.floor(res);
    default:
  }
  return 0;
}
