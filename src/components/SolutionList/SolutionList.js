import { useContext, useEffect } from 'react';
import { groupSolutions } from './SolutionListUtils';
import useSolverWorker from './useSolverWorker';
import PropTypes from 'prop-types';
import { store, actions } from '../../store';
import './SolutionList.css';

const propTypes = {
  userInput: PropTypes.string.isRequired
};

const SolutionList = ({ userInput }) => {
  const [loading, solutions] = useSolverWorker(userInput);
  const { state, dispatch } = useContext(store);

  useEffect(() => {
    dispatch({
      type: actions.SET_SOLUTIONS,
      data: {
        solutions
      }
    });
  }, [solutions]);

  return (
    <div>
      {loading
        ? <h3>Etsitään erilaisia sanakompinaatioita...</h3>
        : groupSolutions(state.solutions).map(({ length, words }) =>
            <div key={length}>
              <h3 className='word-container-title'>{length} kirjaimiset sanat</h3>
              <p className='word-container'>
                {words.map(word => word.charAt(0)+word.slice(1).toLowerCase()).join(', ')}
              </p>
            </div>
          )
        }
    </div>
  );
};

SolutionList.propTypes = propTypes;

export default SolutionList;