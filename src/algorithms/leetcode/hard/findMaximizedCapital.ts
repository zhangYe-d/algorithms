function findMaximizedCapital(
  k: number,
  w: number,
  profits: number[],
  capital: number[]
): number {
  const projects = profits
    .map((profit, i) => ({ profit, capital: capital[i] }))
    .sort((project1, project2) => project2.profit - project1.profit);
  const set: Set<Project> = new Set();
  let total: number = w;

  while (set.size !== k) {
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      if (project.capital <= total && !set.has(project)) {
        total += project.profit;
        set.add(project);
        break;
      } else if (i === projects.length - 1) {
        return total;
      }
    }
  }

  return total;
}

interface Project {
  profit: number;
  capital: number;
}
