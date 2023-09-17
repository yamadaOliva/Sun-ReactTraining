import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};
const filter = persistReducer(persistConfig, filterSlice);
export const store = configureStore({
  reducer: {
    filter,
  },
  middleware: [thunk],
});
export const persistor = persistStore(store);