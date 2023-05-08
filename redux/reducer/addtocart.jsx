import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "addtocart",
  initialState: {
    cartItem: [],
    counter: 0,
  },

  reducers: {
    ADDTOCART(state, action) {
      state.cartItem = [...state.cartItem, action.payload];
      //   localStorage.setItem("addtocart", JSON.stringify(state));
      //   const data = localStorage.getItem("addtocart");
      //   if (data === null) return undefined;
      //   return JSON.parse(data);

      //   return localStorage.getItem("addtocart", JSON.parse());

      //   [...state.cartItem] = JSON.parse(localStorage.getItem("addtocart"));
    },

    DELETE(state, action) {
      const data = JSON.parse(JSON.stringify(state.cartItem));
      const filterData = data.filter((items) => items.type !== action.payload);
      state.cartItem = filterData;
    },

    COUNTER(state, action) {
      const data = JSON.parse(JSON.stringify(state.cartItem));
      const foundProduct = data.find(
        (item) => item.type === action.payload.incData
      );
      const index = data.findIndex(
        (product) => product.type === action.payload.incData
      );
      const newCartItems = data.filter(
        (item) => item.type !== action.payload.incData
      );

      console.log(foundProduct, index, newCartItems, "ooo");

      switch (action.payload.inc) {
        case "increment":
          const data = JSON.parse(JSON.stringify(state.cartItem));
          data.filter((items) => items.type === action.payload.incData);
          state.counter += 1;
          break;
        case "decrement":
          state.counter > 0 ? (state.counter -= 1) : "";
          break;
        default:
          state.counter;
      }
    },
  },
});

export const { ADDTOCART, COUNTER, DELETE } = productsSlice.actions;
export default productsSlice.reducer;
