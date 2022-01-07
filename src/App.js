import { Container, FormControl } from 'react-bootstrap';
import { useState } from 'react';

import SolutionList from './components/SolutionList';

const App = () => {
  const [userInput, setUserInput] = useState('');

  return (
    <Container className='mt-5'>
      <FormControl
        placeholder='Syötä kirjaimet'
        maxLength={16}
        onChange={({ target }) => setUserInput(target.value)}
        value={userInput}
      />
      <SolutionList userInput={userInput} />
    </Container>
  );
};

export default App;