import { Container } from 'react-bootstrap';
import SolutionList from './SolutionList';
import UsageGuide from './UsageGuide';
import Copyright from './Copyright';
import GridInput from './GridInput';
import './App.css';

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