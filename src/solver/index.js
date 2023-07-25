import finnishDictionary from './finnishDictionary.json';
import workerScript from './solver.worker';

async function solve(board) {
  const newWorker = new Worker(workerScript);

  return new Promise((resolve, reject) => {
    newWorker.onmessage = ({ data }) => {
      const { solutions, error, status } = data;

      switch (status) {
        case 'success':
          resolve(solutions);
          break;
        case 'error':
          reject(error);
          break;

        default:
          break;
      }
    };

    newWorker.postMessage({
      board,
      words: finnishDictionary.words.split(','),
    });
  });
}

export default solve;
