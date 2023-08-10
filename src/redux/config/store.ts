import { configureStore } from '@reduxjs/toolkit';
import solverSlice from '../../redux/slice/solverSlice';

const store = configureStore({
  reducer: {
    solver: solverSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
