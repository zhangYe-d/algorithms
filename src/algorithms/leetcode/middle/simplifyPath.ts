function simplifyPath(path: string): string {
  const stack: string[] = [];
  const pathArr = path.split("/").filter(Boolean);

  pathArr.forEach((str) => {
    if (str === ".") {
      return;
    } else if (str === "..") {
      stack.pop();
    } else {
      stack.push(str);
    }
  });

  return `/${stack.join("/")}`;
}
