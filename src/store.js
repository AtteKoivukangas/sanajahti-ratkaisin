import { combineReducers, createStore, applyMiddleware } from 'redux';
import solverReducer from 'reducers/solverReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  solver: solverReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
