import { createSlice } from '@reduxjs/toolkit';

const currentArticleSlice = createSlice({
  name: 'currentArticle',
  initialState: {},
  reducers: {
    setData: (state, { payload }) => {
      if (payload !== state) return (state = payload);
    },
  },
});

export default currentArticleSlice;
