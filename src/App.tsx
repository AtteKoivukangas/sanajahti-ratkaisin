import React from 'react';
import { Container } from 'react-bootstrap';
import SolutionList from './components/SolutionList';
import Preview from './components/Preview';
import Copyright from './components/Copyright';
import Input from './components/Input';
import './App.css';
import store from './redux/config/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Container className='mt-3'>
        <Preview />
        <Input />
        <SolutionList />
        <Copyright />
      </Container>
    </Provider>
  );
};

export default App;
