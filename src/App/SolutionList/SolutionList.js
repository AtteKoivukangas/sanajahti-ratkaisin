import { useContext } from 'react';
import { groupSolutions } from './utils/solutionHelper';
import { storeContext } from 'shared/store';
import './SolutionList.css';

const SolutionList = () => {
  const { state } = useContext(storeContext);

  return (
    <div>
      {groupSolutions(state.solutions).map(({ length, words }) =>
        <div key={length}>
          <h3 className='word-container-title'>{length} kirjaimiset sanat</h3>
          <p className='word-container'>
            {words.map(word => word.charAt(0)+word.slice(1).toLowerCase()).join(', ')}
          </p>
        </div>
      )}
    </div>
  );
};

export default SolutionList;