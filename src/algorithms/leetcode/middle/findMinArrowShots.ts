function findMinArrowShots(points: number[][]): number {
  if (points.length === 0) return 0;
  points.sort((a, b) => a[1] - b[1]);
  let pos = points[0][1];
  let ans = 1;

  for (let point of points) {
    if (point[0] > pos) {
      pos = point[1];
      ans += 1;
    }
  }
  return ans;
}
