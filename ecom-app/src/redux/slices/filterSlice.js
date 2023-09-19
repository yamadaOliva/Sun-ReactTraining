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
  isFreeShip: true,
  products: [],
  isFiltering: false,
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
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
      state.isFiltering = true;
    },
    setBrandsRedux: (state, action) => {
      state.brands = action.payload;
      state.isFiltering = true;
    },
    setCategorieslv0: (state, action) => {
      state.categorieslv0 = action.payload;
      state.isFiltering = true;
    },
    setCategorieslv1: (state, action) => {
      state.categorieslv1 = action.payload;
      state.isFiltering = true;
    },
    setRatingRedux: (state, action) => {
      state.rating = action.payload;
      state.isFiltering = true;
    },
    setIsFreeShipRedux: (state, action) => {
      state.isFreeShip = action.payload;
      state.isFiltering = true;
    },
    setDefault: (state) => {
      state.numOfPage = 1;
      state.rating = 0;
      state.categorieslv0 = "";
      state.categorieslv1 = "";
      state.brands = [];
      state.price = [0, 1000];
      state.isFreeShip = true;
      state.hitOffPage = 16;
      state.isFiltering = false;
    },
  },
});
export const {
  setDefault,
  setTotalPages,
  setHitOffPageRedux,
  setNumOfPage,
  setPrice,
  setBrandsRedux,
  setCategorieslv0,
  setCategorieslv1,
  setRatingRedux,
  setIsFreeShipRedux,
  setProducts,
} = filterSlice.actions;
export default filterSlice.reducer;
