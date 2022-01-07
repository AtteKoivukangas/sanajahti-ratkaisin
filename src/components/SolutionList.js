import finnishDictionary from '../utils/finnishDictionary.json';
import { wordzDFS } from '../utils/solver';
import { useState, useEffect } from 'react';

const SolutionList = ({ userInput }) => {
  const [solutions, setSolutions] = useState([]);

  useEffect(() => {
    setSolutions(
      userInput.length === 16
        ? wordzDFS(userInput, finnishDictionary.words.split(','))
        : []
    );
  }, [userInput]);

  return (
    <div>
      {solutions.map(solution => <div key={solution}>{solution}</div>)}
    </div>
  );
};

export default SolutionList;