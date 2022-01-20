import './UsageGuide.css';
import arrow from './arrow.svg';
import { FormControl } from 'react-bootstrap';
import LetterGrid from './components/LetterGrid/LetterGrid';

const grid = [
  'rivi',
  'sana',
  'lovi',
  'mies'
];

const UsageGuide = () => {
  return (
    <div className='usage-guide-wrapper mb-3'>
      <div className='usage-guide-grid unselectable'>
        <LetterGrid grid={grid} />
      </div>
      <div className='usage-guide-arrow'>
        <img src={arrow} draggable='false' className='unselectable' />
      </div>
      <div className='usage-guide-input'>
        <FormControl value={'TESTI'} disabled />
      </div>
    </div>
  );
};

export default UsageGuide;