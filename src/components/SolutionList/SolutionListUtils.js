export const groupSolutions = solutions => {
  const map = new Map();

  solutions.forEach(solution => {
    const length = solution.length;
  
    if (map.has(length)) {
      return map.get(length).push(solution);
    }

    map.set(length, [solution]);
  });

  return Array.from(map).map(([length, words]) => ({ length, words }));
};

