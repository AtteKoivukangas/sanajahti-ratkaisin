import { Container, FormControl, FormGroup, FormText, FormLabel } from 'react-bootstrap';
import { useState, useRef, useContext } from 'react';

import SolutionList from './components/SolutionList/SolutionList';
import UsageGuide from './components/UsageGuide/UsageGuide';
import Copyright from './components/Copyright/Copyright';
import { store, actions } from './store';

const App = () => {
  const [userInput, setUserInput] = useState('');
  const inputRef = useRef();
  const { state, dispatch } = useContext(store);

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
      <FormGroup>
        <FormControl
          ref={inputRef}
          placeholder='Syötä kirjaimet esimerkin mukaisesti'
          maxLength={16}
          onChange={handleUserInputChange}
          value={userInput}
        />
        <FormText className="text-muted statistics-text">
          {state.executionTime && `Haku vei ${state.executionTime}s, löydettiin ${state.solutions.length} sanaa.`}
        </FormText>
      </FormGroup>
      
      <SolutionList userInput={userInput} />
      <Copyright />
    </Container>
  );
};

export default App;