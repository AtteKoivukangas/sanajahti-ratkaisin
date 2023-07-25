import './Preview.css';
import arrow from './arrow.svg';
import { FormControl } from 'react-bootstrap';
import LetterGrid from './LetterGrid';
import { useSelector } from 'react-redux';

const exampleGrid = ['rivi', 'sana', 'lovi', 'mies'];

const Preview = () => {
  const solver = useSelector((state) => state.solver);

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
        <img src={arrow} draggable='false' className='unselectable' />
      </div>
      <div className='usage-guide-input'>
        <FormControl value={inputValue} disabled />
      </div>
    </div>
  );
};

export default Preview;
