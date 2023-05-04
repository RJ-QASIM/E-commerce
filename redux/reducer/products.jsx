import { createSlice } from "@reduxjs/toolkit";
import { products } from "@/data/Navdata";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: products,
    type: null,
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
  },
});

export const { PRODUCTS, GET_TYPE } = productsSlice.actions;
export default productsSlice.reducer;
