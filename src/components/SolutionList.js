import finnishDictionary from '../utils/finnishDictionary.json';
import { useState, useEffect } from 'react';
import solverWorkerScript from '../workers/solver.worker';

const SolutionList = ({ userInput }) => {
  const [solutions, setSolutions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [solverWorker, setSolverWorker] = useState(null);

  useEffect(() => {
    if (userInput.length === 16) {
      setLoading(true);
      setSolutions([]);

      const worker = new Worker(solverWorkerScript);
      setSolverWorker(worker);

      worker.onmessage = e => {
        setSolutions(e.data);
        setLoading(false);
      };

      worker.postMessage({ board: userInput, words: finnishDictionary.words.split(',') });
      
      return;
    }

    if (solverWorker) {
      solverWorker.terminate();
      setSolverWorker(null);
      setLoading(false);
    }

    setSolutions([]);
  }, [userInput]);

  const map = new Map();

  solutions.forEach(solution => {
    const len = solution.length;
    if (map.has(len)) {
      map.get(len).push(solution);
    } else {
      map.set(len, [solution]);
    }
  });

  return (
    <div>
      {loading && <p>Etsitään sanoja</p>}
      {Array.from(map).map(([length, words]) => (
        <div key={length}>
          <h3>{length} kirjaimiset sanat</h3>
          <p>{words.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default SolutionList;