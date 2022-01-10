import { groupSolutions } from './SolutionListUtils';
import useSolverWorker from './useSolverWorker';

const SolutionList = ({ userInput }) => {
  const [loading, solutions] = useSolverWorker(userInput);

  return (
    <div>
      {loading
        ? <h3>Etsitään erilaisia sanakompinaatioita...</h3>
        : groupSolutions(solutions).map(({ length, words }) =>
            <div key={length}>
              <h3>{length} kirjaimiset sanat</h3>
              <p>{words.join(', ')}</p>
            </div>
          )
        }
    </div>
  );
};

export default SolutionList;