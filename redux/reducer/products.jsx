import { createSlice } from "@reduxjs/toolkit";
import { products } from "@/data/Navdata";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: products,
    type: null,
    maintype: "grocery",
  },

  reducers: {
    PRODUCTS(state, action) {
      state.products = action.payload;
    },
    GET_TYPE(state, action) {
      const filterData = products.filter((elm) => elm.type === action.payload);

      state.type = action.payload;
      state.products = filterData;
    },
    GET_MAINTYPE(state, action) {
      state.maintype = action.payload;
      const filterData = products.filter(
        (elm) => elm.maintyp === action.payload
      );
      state.products = filterData;
    },
  },
});

export const { PRODUCTS, GET_TYPE, GET_MAINTYPE } = productsSlice.actions;
export default productsSlice.reducer;
