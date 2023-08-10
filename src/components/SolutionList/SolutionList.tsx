import './SolutionList.css';
import _ from 'lodash';
import { useAppSelector } from '../../redux/config/hooks';

const SolutionList = () => {
  const solver = useAppSelector((state) => state.solver);

  const groupedSolutions = _.groupBy(
    solver.solutions,
    (solution: string) => solution.length
  );

  return (
    <div>
      {Object.keys(groupedSolutions)
        .sort((a, b) => Number(b) - Number(a)) // Sort keys in descending order
        .map((key) => (
          <div key={key}>
            <h3 className='word-container-title'>{key} kirjaimiset sanat</h3>
            <p className='word-container'>
              {groupedSolutions[key]
                .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
                .join(', ')}
            </p>
          </div>
        ))}
    </div>
  );
};

export default SolutionList;
