import { Container } from 'react-bootstrap';
import SolutionList from 'components/SolutionList';
import Preview from 'components/Preview';
import Copyright from 'components/Copyright';
import Input from 'components/Input';
import './App.css';

const App = () => {
  return (
    <Container className='mt-3'>
      <Preview />
      <Input />
      <SolutionList />
      <Copyright />
    </Container>
  );
};

export default App;
