import { createSlice } from "@reduxjs/toolkit";
import { index } from "@/data/Navdata";
const catogerySlice = createSlice({
  name: "profile",
  initialState: {
    category: index,
  },

  reducers: {
    SET_NAME(state, action) {
      state.category = action.payload;
    },
  },
});

export const { SET_NAME } = catogerySlice.actions;
export default catogerySlice.reducer;
