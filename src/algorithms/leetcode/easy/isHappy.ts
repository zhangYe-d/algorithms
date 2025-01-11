function isHappy(n: number): boolean {
  const set: Set<number> = new Set();

  while (n !== 1) {
    const str = n.toString();
    let next = 0;
    for (const s of str) {
      next += parseInt(s) ** 2;
    }
    if (set.has(next)) {
      return false;
    } else {
      set.add((n = next));
    }
  }

  return true;
}
