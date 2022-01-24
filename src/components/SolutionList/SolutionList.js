import { useContext, useEffect } from 'react';
import { groupSolutions } from './SolutionListUtils';
import { storeContext } from 'shared/store';
import actionTypes from 'shared/store/constants/actionTypes';
import './SolutionList.css';

const SolutionList = () => {
  const { state, dispatch } = useContext(storeContext);
  const loading = false;

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

export default SolutionList;