import { useContext } from 'react';
import './UsageGuide.css';
import arrow from './arrow.svg';
import { FormControl } from 'react-bootstrap';
import LetterGrid from './components/LetterGrid/LetterGrid';
import { store } from '../../store';

const grid = [
  'rivi',
  'sana',
  'lovi',
  'mies'
];

const UsageGuide = () => {
  const { state } = useContext(store);

  return (
    <div className='usage-guide-wrapper mb-3'>
      <div className='usage-guide-grid unselectable'>
        <LetterGrid grid={grid} />
      </div>
      <div className='usage-guide-arrow'>
        <img src={arrow} draggable='false' className='unselectable' />
      </div>
      <div className='usage-guide-input'>
        <FormControl value={state.solutions.length ? state.solutions[0] : 'RIVISANALOVIMIES'} disabled />
      </div>
    </div>
  );
};

export default UsageGuide;