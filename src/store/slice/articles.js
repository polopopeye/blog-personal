import { createSlice } from '@reduxjs/toolkit';

const articlesSlice = createSlice({
  name: 'articles',
  initialState: [],
  reducers: {
    setData: (state, { payload }) => {
      if (payload !== state) return (state = payload);
    },
  },
});

export default articlesSlice;
