import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  filter: {
    category: "",
    price: [0, 0],
    rating: 0,
    search: "",
  },
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
