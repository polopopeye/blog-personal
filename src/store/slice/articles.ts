import { createSlice } from '@reduxjs/toolkit';

export interface Article {
  id?: string;
  name?: string;
  slug?: string;
  desc?: string;
  postinHTML?: string;
  imgPost?: string;
  timeStamp?: string;
  lang?: string;
  error?: number;
}

const articlesSlice = createSlice({
  name: 'articles',
  initialState: [] as Article[],
  reducers: {
    setData: (_state, { payload }) => {
      return payload;
    },
  },
});

export default articlesSlice;
