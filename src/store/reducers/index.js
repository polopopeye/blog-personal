import { combineReducers } from 'redux';
import articlesSlice from '../slice/articles';

import counterReducer from './counter';

const allReducers = combineReducers({
  counter: counterReducer,
  articles: articlesSlice.reducer,
});

export default allReducers;
