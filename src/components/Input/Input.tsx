import { FormControl, FormGroup, FormText } from 'react-bootstrap';
import { solverActions } from '../../redux/slice/solverSlice';
import { useAppDispatch, useAppSelector } from '../../redux/config/hooks';

const Input = () => {
  const dispatch = useAppDispatch();
  const solver = useAppSelector((state) => state.solver);

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(solverActions.solveOnUserInput(target.value));
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
