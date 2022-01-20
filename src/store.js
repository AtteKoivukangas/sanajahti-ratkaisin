import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  solutions: []
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
  SET_SOLUTIONS: 'SET_SOLUTIONS'
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