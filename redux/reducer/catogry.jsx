import { createSlice } from "@reduxjs/toolkit";
import { index, othercategory } from "@/data/Navdata";

const catogerySlice = createSlice({
  name: "profile",
  initialState: {
    category: index,
    getcategory: null,
  },

  reducers: {
    SET_NAME(state, action) {
      state.category = action.payload;
    },

    GET_CATOGERY(state, action) {
      let result;
      result = othercategory.filter((items) => items.type === action.payload);

      result = action.payload === "grocery" ? index : result;
      state.category = result;
    },
  },
});

export const { SET_NAME, GET_CATOGERY, OTHER_CATEGORY } = catogerySlice.actions;
export default catogerySlice.reducer;
