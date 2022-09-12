import { createSlice } from "@reduxjs/toolkit";

// interface ICounter {
//   count: number;
//   checkBottom: number;

// }

const initialState = {
  count: 20,
  checkBottom: 0,
  isPlayingVideo: true,
  isShowingContractBar: true,
  popupOpen: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.count++;
    },
    decrease: (state) => {
      state.count--;
    },
    setCheckBottom: (state, { payload }) => {
      state.checkBottom = payload;
    },
    setPlayingVideo: (state, { payload }) => {
      console.log("set");
      state.isPlayingVideo = payload;
    },
    setShowingContractBar: (state, { payload }) => {
      state.isShowingContractBar = payload;
    },
    setPopup: (state, action) => {
      state.popupOpen = action.payload;
      sessionStorage["popup-flag"] = true;
    },
  },
});

export const {
  increase,
  decrease,
  setCheckBottom,
  setPlayingVideo,
  setShowingContractBar,
  setPopup,
} = counterSlice.actions;

export default counterSlice.reducer;
