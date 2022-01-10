import { Container, FormControl } from 'react-bootstrap';
import { useState } from 'react';

import SolutionList from './components/SolutionList';
import UsageGuide from './components/UsageGuide/UsageGuide';

const App = () => {
  const [userInput, setUserInput] = useState('');

  return (
    <Container className='mt-3'>
      <UsageGuide />
      <FormControl
        className='mb-3'
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