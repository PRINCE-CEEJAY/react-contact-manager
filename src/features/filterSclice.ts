import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  gender: '',
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
  },
});

export const { setSearch, setGender } = filterSlice.actions;
export default filterSlice.reducer;
