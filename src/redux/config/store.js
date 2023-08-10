import { configureStore } from '@reduxjs/toolkit';
import solverSlice from 'redux/slice/solverSlice';

const store = configureStore({
  reducer: {
    solver: solverSlice,
  },
});

export default store;
