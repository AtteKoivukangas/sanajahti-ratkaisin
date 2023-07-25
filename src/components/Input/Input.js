import { FormControl, FormGroup, FormText } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { actions as solverActions } from 'reducers/solverReducer';

const Input = () => {
  const dispatch = useDispatch();
  const solver = useSelector((state) => state.solver);

  const onChange = ({ target }) => {
    dispatch(solverActions.setUserInput(target.value));
  };

  return (
    <FormGroup>
      <FormControl
        placeholder='Syötä kirjaimet esimerkin mukaisesti'
        maxLength={16}
        onChange={onChange}
        value={solver.userInput}
      />
      <FormText className='text-muted statistics-text'>
        {solver.errorText}
        {solver.executionTime &&
          `Haku vei ${solver.executionTime}s, löydettiin ${solver.solutions.length} sanaa.`}
      </FormText>
    </FormGroup>
  );
};

export default Input;
