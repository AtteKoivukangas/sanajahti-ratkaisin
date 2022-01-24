import React, { createContext, useReducer } from 'react';
import appReducer from './reducers/appReducer';
import PropTypes from 'prop-types';

const initialState = {
  solutions: [],
  userInput: '',
  executionTime: null
};

const propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ])
};

export const storeContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <storeContext.Provider value={{state, dispatch}}>
      {children}
    </storeContext.Provider>
  );
};

StateProvider.propTypes = propTypes;