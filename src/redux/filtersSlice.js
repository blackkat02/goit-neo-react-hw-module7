import { createSlice } from '@reduxjs/toolkit';

const filtersSliceReducer = createSlice({
  name: 'filters',
  initialState: {
    name: ""
  },
  reducers: {
    changeFilter(state, payload) {
      state.name = payload;
    },
  },
});

export const { changeFilter } = filtersSliceReducer.actions;
export default filtersSliceReducer.reducer;


