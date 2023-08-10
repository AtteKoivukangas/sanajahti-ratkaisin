import './Preview.css';
import { FormControl } from 'react-bootstrap';
import LetterGrid from './LetterGrid';
import { useAppSelector } from '../../redux/config/hooks';

const exampleGrid = ['rivi', 'sana', 'lovi', 'mies'];

const Preview = () => {
  const solver = useAppSelector((state) => state.solver);

  // If there is solutions in store we render entered grid and longest solution in it,
  // otherwise we render example grid and word from which that particular
  // grid is created.
  let grid = exampleGrid;
  let inputValue = grid.join('');
  if (solver.solutions.length > 0 && solver.userInput.length === 16) {
    grid = [0, 4, 8, 12].map((value) =>
      solver.userInput.slice(value, value + 4).toUpperCase()
    );
    inputValue = solver.solutions[0];
  }

  return (
    <div className='usage-guide-wrapper mb-3'>
      <div className='usage-guide-grid unselectable'>
        <LetterGrid grid={grid} />
      </div>
      <div className='usage-guide-arrow'>
        <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
          <path d='M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z' />
        </svg>
      </div>
      <div className='usage-guide-input'>
        <FormControl value={inputValue} disabled />
      </div>
    </div>
  );
};

export default Preview;
