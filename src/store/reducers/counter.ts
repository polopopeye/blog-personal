import { combineReducers } from 'redux';
import counterSlice from '../slice/counter';

const counter = combineReducers({
  main: counterSlice.reducer,
  thisIsAnother: counterSlice.reducer,
});

export default counter;
