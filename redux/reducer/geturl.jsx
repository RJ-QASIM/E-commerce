import { createSlice } from "@reduxjs/toolkit";

const urlSlice = createSlice({
  name: "url",
  initialState: {
    url: null,
  },

  reducers: {
    GET_URL(state, action) {
      state.url = action.payload;
    },
  },
});

export const { GET_URL } = urlSlice.actions;
export default urlSlice.reducer;
