class MinStack {
  private stack: number[];
  private min: number[];
  constructor() {
    this.stack = [];
    this.min = [];
  }

  push(val: number): void {
    this.stack.push(val);
    this.min.push(Math.min(this.min.at(-1) ?? Infinity, val));
  }

  pop(): void {
    this.stack.pop();
    this.min.pop();
  }

  top(): number {
    return this.stack.at(-1) ?? Infinity;
  }

  getMin(): number {
    return this.min.at(-1) ?? Infinity;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
