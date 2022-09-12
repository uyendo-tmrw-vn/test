import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCms = createAsyncThunk("getCms", async () => {
  // const res = await axios.get(
  //   `https://cms.heroarena.app/api/hero-arena?populate[0]=popup&populate[1]=popup.image&populate[3]=seo&populate[4]=seo.thumbnail&populate[5]=partners&populate[6]=partners.logo&populate[7]=investors&populate[8]=investors.logo&populate[9]=mediaPress&populate[10]=mediaPress.logo&populate[11]=exchangeInformation&populate[12]=exchangeInformation.logo`
  // );
  const res = await axios.get(
    `https://cms.heroarena.app/api/hero-arena?populate=popups,popups.image,popup,popup.image,seo,seo.thumbnail,partners,partners.logo,investors,investors.logo,mediaPress,mediaPress.logo,exchangeInformation,exchangeInformation.logo,frame,frame.image`
  );
  console.log(res.data);
  return res.data;
});

const initialState = {
  cmsLoading: true,
  cmsData: null,
};

const cmsSlice = createSlice({
  name: "cmsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCms.pending, (state) => {
      state.cmsLoading = true;
    });
    builder.addCase(getCms.fulfilled, (state, { payload }) => {
      state.cmsLoading = false;
      state.cmsData = payload;
    });
    builder.addCase(getCms.rejected, (state) => {
      state.cmsLoading = false;
    });
  },
});

export const { } = cmsSlice.actions;
export default cmsSlice.reducer;
