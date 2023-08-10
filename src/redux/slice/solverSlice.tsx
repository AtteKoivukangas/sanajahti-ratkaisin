import solve from '../../solver';
import { withTimeMeasurement } from '../../helpers';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const solveOnUserInput = createAsyncThunk(
  'solverSlice/solveOnUserInput',
  async (value: string, thunkAPI) => {
    thunkAPI.dispatch({
      type: 'solverSlice/setUserInput',
      payload: { value },
    });

    if (value.length !== 16) {
      return;
    }

    const [solutions, executionTime] = await withTimeMeasurement(() =>
      solve(value)
    );

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
    builder.addCase(solveOnUserInput.rejected, (state, action) => {
      const update = {
        solutions: [],
        executionTime: null,
        errorText: 'Haku epäonnistui',
      };

      console.log(state, action);

      Object.assign(state, update);
    });
  },
});

export const solverActions = {
  solveOnUserInput,
};

export default solverSlice.reducer;
