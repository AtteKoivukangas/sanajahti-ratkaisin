import actionTypes from "../constants/actionTypes";

const appReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SOLUTIONS: {
      const { solutions } = action.data;

      return {
        ...state,
        solutions
      };
    };

    case actionTypes.SET_USER_INPUT: {
      const { userInput } = action.data;

      return {
        ...state,
        userInput
      };
    };

    case actionTypes.SET_EXECUTION_TIME: {
      const { executionTime } = action.data;

      return {
        ...state,
        executionTime
      };
    };

    default:
      return state;
  }
};

export default appReducer;