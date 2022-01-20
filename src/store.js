import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  solutions: [],
  userInput: '',
  executionTime: null
};

export const store = createContext();

const { Provider } = store;

const propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ])
};

export const actions = {
  SET_SOLUTIONS: 'SET_SOLUTIONS',
  SET_USER_INPUT: 'SET_USER_INPUT',
  SET_EXECUTION_TIME: 'SET_EXECUTION_TIME'
};

const stateReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_SOLUTIONS: {
      const { solutions } = action.data;

      return {
        ...state,
        solutions
      };
    };

    case actions.SET_USER_INPUT: {
      const { userInput } = action.data;

      return {
        ...state,
        userInput
      };
    };

    case actions.SET_EXECUTION_TIME: {
      const { executionTime } = action.data;

      return {
        ...state,
        executionTime
      };
    };

    default:
      return state;
  }
}

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <Provider value={{state, dispatch}}>
      {children}
    </Provider>
  );
};

StateProvider.propTypes = propTypes;