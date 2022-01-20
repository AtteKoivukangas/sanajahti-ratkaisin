import finnishDictionary from '../../finnishDictionary.json';
import solverWorkerScript from '../../workers/solver.worker';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withPropsValidation } from '../../validation';

const propTypes = {
  userInput: PropTypes.string.isRequired,
  age: PropTypes.string
};

const useSolverWorker = userInput => {
  const [solutions, setSolutions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    withPropsValidation({
      props: { userInput },
      propTypes,
      componentName: 'useSolverWorker'
    });

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