import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "notify-slice",
  initialState: {
    isShow: false,
    type: "success",
    msg: [],
  },
  reducers: {
    showNotify: (state, action) => {
      state.isShow = true;
      state.type = action.payload.type;
      state.msg = action.payload.msg;
    },
    hideNotify: (state) => {
      state.isShow = false;
    },
  },
});
