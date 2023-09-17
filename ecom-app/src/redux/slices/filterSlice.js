import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: {
    products: [],
    categories: [],
    brands: [],
    ratings: [],
    fetchProductUrl: "",
    sortBy: { sortField: "brand", order: "ASC" },
    searchKeyword: "",
    isLoading: false,
  },
  totalPages: 0,
  hitOffPage: 16,
  numOfPage: 1,
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setDefault: (state) => {
      state.filter = initialState.filter;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
  },
});
export const { setFilter, setDefault, setTotalPages } = filterSlice.actions;
export default filterSlice.reducer;
