import { createSlice } from '@reduxjs/toolkit';

const currentThemeSlice = createSlice({
  name: 'currentTheme',
  // initialState: 'theme-default',
  initialState: 'theme-dark',
  reducers: {
    setData: (state, { payload }) => {
      if (payload !== state) return (state = payload);
    },
  },
});

export default currentThemeSlice;
