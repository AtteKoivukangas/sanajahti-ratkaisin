import { Container, FormControl } from 'react-bootstrap';
import { useState, useRef, useContext } from 'react';

import SolutionList from './components/SolutionList/SolutionList';
import UsageGuide from './components/UsageGuide/UsageGuide';
import Copyright from './components/Copyright/Copyright';
import { store, actions } from './store';

const App = () => {
  const [userInput, setUserInput] = useState('');
  const inputRef = useRef();
  const { dispatch } = useContext(store);

  const handleUserInputChange = ({ target }) => {
    setUserInput(target.value);

    dispatch({
      type: actions.SET_USER_INPUT,
      data: {
        userInput: target.value
      }
    });

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
      <Copyright />
    </Container>
  );
};

export default App;