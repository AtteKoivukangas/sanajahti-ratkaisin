import React from 'react';
import './LetterGrid.css';

interface LetterGridProps {
  grid: string[];
}

const LetterGrid: React.FC<LetterGridProps> = ({ grid }) => {
  return (
    <div className='grid-wrapper'>
      <div className='grid'>
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className='grid-row'>
            {row.split('').map((character, characterIndex) => (
              <div key={characterIndex} className='grid-character'>
                {character}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LetterGrid;
