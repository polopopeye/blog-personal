import { combineReducers } from 'redux';
import articlesSlice from '../slice/articles';
import currentArticleSlice from '../slice/currentArticle';

import counterReducer from './counter';

const allReducers = combineReducers({
  counter: counterReducer,
  articles: articlesSlice.reducer,
  currentArticle: currentArticleSlice.reducer,
});

export default allReducers;
