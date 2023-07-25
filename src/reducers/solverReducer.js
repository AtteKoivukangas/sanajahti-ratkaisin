import solve from 'solver';
import { calculateExecutionTime } from 'helpers';

const actionTypes = Object.freeze({
  SET_USER_INPUT: 'SET_USER_INPUT',
  SET_SOLUTIONS: 'SET_SOLUTIONS',
  SOLVER_ERROR: 'SOLVER_ERROR',
});

const initialState = Object.freeze({
  solutions: [],
  userInput: '',
  executionTime: null,
  errorText: '',
});

const solverReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SOLUTIONS: {
      const { solutions, executionTime } = action.data;

      return {
        ...state,
        solutions,
        executionTime,
        errorText: '',
      };
    }

    case actionTypes.SET_USER_INPUT: {
      const { value } = action.data;

      return {
        ...state,
        userInput: value,
      };
    }

    case actionTypes.SOLVER_ERROR: {
      return {
        ...state,
        solutions: [],
        executionTime: null,
        errorText: 'Haku epäonnistui',
      };
    }

    default:
      return state;
  }
};

export const actions = Object.freeze({
  setUserInput: (value) => {
    return async (dispatch) => {
      // Update user input immediately store
      dispatch({
        type: actionTypes.SET_USER_INPUT,
        data: { value },
      });

      // When user input is 16 characters long, execute solver and update solutions to store
      if (value.length === 16) {
        try {
          const startTime = window.performance.now();
          const solutions = await solve(value);
          const endTime = window.performance.now();

          const executionTime = calculateExecutionTime(startTime, endTime);

          dispatch({
            type: actionTypes.SET_SOLUTIONS,
            data: {
              solutions,
              executionTime,
            },
          });
        } catch (error) {
          console.error('Error occured in solver:', error);
          dispatch({ type: actionTypes.SOLVER_ERROR });
        }
      }
    };
  },
});

export default solverReducer;
