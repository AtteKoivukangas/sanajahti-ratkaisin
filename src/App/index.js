import { Container } from 'react-bootstrap';
import SolutionList from 'components/SolutionList/SolutionList';
import UsageGuide from 'components/UsageGuide/UsageGuide';
import Copyright from 'components/Copyright/Copyright';
import GridInput from './GridInput';

const App = () => {
  return (
    <Container className='mt-3'>
      <UsageGuide />
      <GridInput />
      <SolutionList />
      <Copyright />
    </Container>
  );
};

export default App;