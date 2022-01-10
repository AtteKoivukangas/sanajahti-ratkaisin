import { Container, FormControl } from 'react-bootstrap';
import { useState, useRef } from 'react';

import SolutionList from './components/SolutionList';
import UsageGuide from './components/UsageGuide/UsageGuide';

const App = () => {
  const [userInput, setUserInput] = useState('');
  const inputRef = useRef();

  const handleUserInputChange = ({ target }) => {
    setUserInput(target.value);

    if (target.value.length === 16) {
      inputRef.current.blur();
    }
  }

  return (
    <Container className='mt-3'>
      <UsageGuide />
      <FormControl
        ref={inputRef}
        className='mb-3'
        placeholder='Syötä kirjaimet'
        maxLength={16}
        onChange={handleUserInputChange}
        value={userInput}
      />
      <SolutionList userInput={userInput} />
    </Container>
  );
};

export default App;