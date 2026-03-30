import { createSlice } from '@reduxjs/toolkit';
import type { Article } from './articles';

const currentArticleSlice = createSlice({
  name: 'currentArticle',
  initialState: {} as Article,
  reducers: {
    setData: (_state, { payload }) => {
      return payload;
    },
  },
});

export default currentArticleSlice;
