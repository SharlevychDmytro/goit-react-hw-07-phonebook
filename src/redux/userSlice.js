import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { changeFilter } = userSlice.actions;
