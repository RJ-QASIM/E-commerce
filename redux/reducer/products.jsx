import { createSlice } from "@reduxjs/toolkit";
import { products } from "@/data/Navdata";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: products,
    type: null,
    detailItem: null,
    maintype: "grocery",
    filterProduct: null,
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

    GET_DETAIL_ITEM(state, action) {
      state.detailItem = action.payload;
    },

    FILTER_PRODUCTS(state, action) {
      const data = state.products.filter((elm) => elm.type === action.payload);
      state.filterProduct = JSON.parse(JSON.stringify(data));

      console.log(state.filterProduct, "hhh");
    },
  },
});

export const {
  PRODUCTS,
  GET_TYPE,
  GET_MAINTYPE,
  GET_DETAIL_ITEM,
  FILTER_PRODUCTS,
} = productsSlice.actions;

export default productsSlice.reducer;
