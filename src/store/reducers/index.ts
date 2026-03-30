import { combineReducers } from 'redux';
import articlesSlice from '../slice/articles';
import currentArticleSlice from '../slice/currentArticle';
import currentThemeSlice from '../slice/currentTheme';
import modalsSlice from '../slice/modals';

import counterReducer from './counter';

const allReducers = combineReducers({
  counter: counterReducer,
  articles: articlesSlice.reducer,
  currentArticle: currentArticleSlice.reducer,
  currentTheme: currentThemeSlice.reducer,
  modals: modalsSlice.reducer,
});

export default allReducers;
