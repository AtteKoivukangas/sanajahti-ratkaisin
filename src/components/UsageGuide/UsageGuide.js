import { useContext } from 'react';
import './UsageGuide.css';
import arrow from './arrow.svg';
import { FormControl } from 'react-bootstrap';
import LetterGrid from './components/LetterGrid/LetterGrid';
import { storeContext } from 'shared/store';

const UsageGuide = () => {
  const { state } = useContext(storeContext);

  let grid = [
    'rivi',
    'sana',
    'lovi',
    'mies'
  ];

  let word = grid.join('');

  if (state.solutions.length > 0 && state.userInput.length === 16) {
    grid = [0, 4, 8, 12].map((value) =>
      state.userInput.slice(value, value+4).toUpperCase()
    );
    word = state.solutions[0];
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
        <FormControl value={word} disabled />
      </div>
    </div>
  );
};

export default UsageGuide;