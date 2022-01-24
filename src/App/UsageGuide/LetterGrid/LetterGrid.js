import './LetterGrid.css';
import PropTypes from 'prop-types';

const propTypes = {
  grid: PropTypes.arrayOf((propValue, key, componentName, location, propFullName) => {
    if (typeof propValue[key] !== 'string' || propValue[key].length !== 4) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  }).isRequired
};

const LetterGrid = ({ grid }) => {
  return (
    <div className='grid-wrapper'>
      <div className='grid'>
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className='grid-row'>
            {row.split('').map((character, characterIndex) => (
              <div key={characterIndex} className='grid-character'>{character}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

LetterGrid.propTypes = propTypes;

export default LetterGrid;