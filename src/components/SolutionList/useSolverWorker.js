import finnishDictionary from '../../finnishDictionary.json';
import solverWorkerScript from '../../workers/solver.worker';
import { useState, useEffect } from 'react';

const useSolverWorker = userInput => {
  const [solutions, setSolutions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    if (userInput.length < 16) {
      if (worker) {
        worker.terminate();
        setWorker(null);
        setLoading(false);
      }
  
      return setSolutions([]);
    }

    const newWorker = new Worker(solverWorkerScript);
    setWorker(newWorker);
    setLoading(true);

    newWorker.onmessage = e => {
      setSolutions(e.data);
      setLoading(false);
    };

    newWorker.postMessage({
      board: userInput,
      words: finnishDictionary.words.split(',')
    });
  }, [userInput]);

  return [loading, solutions];
};

export default useSolverWorker;