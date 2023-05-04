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
      console.log(action.payload, "jjj");
      state.getcategory = action.payload;

      let filterData;
      {
        action.payload === "Grocery"
          ? (filterData = index.filter((elm) => elm.type === action.payload))
          : (filterData = othercategory.filter(
              (elm) => elm.type === action.payload
            ));
      }
      state.category = filterData;
      console.log(filterData, "filterData");
    },
  },
});

export const { SET_NAME, GET_CATOGERY, OTHER_CATEGORY } = catogerySlice.actions;
export default catogerySlice.reducer;
