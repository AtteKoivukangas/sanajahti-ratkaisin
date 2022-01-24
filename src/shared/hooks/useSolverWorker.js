import finnishDictionary from 'finnishDictionary.json';
import solverWorkerScript from 'workers/solver.worker';
import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withPropsValidation } from 'validation';

const propTypes = {
  userInput: PropTypes.string.isRequired,
  age: PropTypes.string
};

const useSolverWorker = userInput => {
  const [solutions, setSolutions] = useState([]);
  const [worker, setWorker] = useState(null);
  const [executionTime, setExecutionTime] = useState(null);
  const startTime = useRef();

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
      }

      setExecutionTime(null);
      return setSolutions([]);
    }

    const newWorker = new Worker(solverWorkerScript);
    setWorker(newWorker);

    newWorker.onmessage = ({ data }) => {
      const { solutions, error, status } = data;

      switch (status) {
        case 'success':
          setSolutions(solutions);
          break;

        case 'error':
          console.log('useSolverWorker.js: Error occured in solverWorkerScript. \n', error);
          setSolutions([]);
          setExecutionTime(null);
          break;

        default: break;
      }

      setExecutionTime(((window.performance.now() - startTime.current) / 1000).toFixed(3));
      startTime.current = null;
    };

    startTime.current = window.performance.now();
    setExecutionTime(null);
    newWorker.postMessage({
      board: userInput,
      words: finnishDictionary.words.split(',')
    });
  }, [userInput]);

  return [solutions, executionTime];
};

export default useSolverWorker;