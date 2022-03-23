import { combineReducers } from 'redux';
import counterSlice from '../slice/counter';
import counterReducer from './counter';

const allReducers = combineReducers({
  todos: counterSlice.reducer,
  counter: counterReducer,
});

export default allReducers;
