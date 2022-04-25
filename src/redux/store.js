import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./loadingSlice";
import notifySlice from "./notifySlice";
const store = configureStore({
  reducer: {
    loadingReducer: loadingSlice.reducer,
    notifyReducer: notifySlice.reducer,
  },
});
export default store;
