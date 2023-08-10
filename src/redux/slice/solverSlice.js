import solve from 'solver';
import { calculateExecutionTime } from 'helpers';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const solveOnUserInput = createAsyncThunk(
  'solverSlice/solveOnUserInput',
  async (value, thunkAPI) => {
    thunkAPI.dispatch({
      type: 'solverSlice/setUserInput',
      payload: { value },
    });

    if (value.length !== 16) {
      return;
    }

    const startTime = window.performance.now();
    const solutions = await solve(value);
    const endTime = window.performance.now();

    const executionTime = calculateExecutionTime(startTime, endTime);

    thunkAPI.dispatch({
      type: 'solverSlice/setSolutions',
      payload: { solutions, executionTime },
    });
  }
);

const solverSlice = createSlice({
  name: 'solverSlice',
  initialState: {
    solutions: [],
    userInput: '',
    executionTime: null,
    errorText: '',
  },
  reducers: {
    setSolutions(state, action) {
      const { solutions, executionTime } = action.payload;

      const update = {
        solutions,
        executionTime,
        errorText: '',
      };

      Object.assign(state, update);
    },
    setUserInput(state, action) {
      const { value } = action.payload;
      state.userInput = value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(solveOnUserInput.rejected, (state) => {
      const update = {
        solutions: [],
        executionTime: null,
        errorText: 'Haku epäonnistui',
      };

      Object.assign(state, update);
    });
  },
});

export const solverActions = {
  solveOnUserInput,
};

export default solverSlice.reducer;
