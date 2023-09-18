import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPages: 0,
  hitOffPage: 16,
  numOfPage: 1,
  price: [0, 1000],
  brands: [],
  categorieslv0: "",
  categorieslv1: "",
  rating: 0,
  isFreeShip: false,
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setDefault: (state) => {
      state.filter = initialState.filter;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setHitOffPageRedux: (state, action) => {
      state.hitOffPage = action.payload;
    },
    setNumOfPage: (state, action) => {
      state.numOfPage = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setBrands: (state, action) => {
      state.brands = action.payload;
    },
    setCategorieslv0: (state, action) => {
      state.categorieslv0 = action.payload;
    },
    setCategorieslv1: (state, action) => {
      state.categorieslv1 = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    setIsFreeShip: (state, action) => {
      state.isFreeShip = action.payload;
    },
  },
});
export const {
  setDefault,
  setTotalPages,
  setHitOffPageRedux,
  setNumOfPage,
  setPrice,
  setBrands,
  setCategorieslv0,
  setCategorieslv1,
  setRating,
  setIsFreeShip,
} = filterSlice.actions;
export default filterSlice.reducer;
