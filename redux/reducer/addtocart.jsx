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

      const countVal = (items) => {
        const newCount = items.qty === 1 ? items.qty + 1 : items.qty;
        return items.price * newCount;
      };

      switch (action.payload.inc) {
        case "increment":
          const data = JSON.parse(JSON.stringify(state.cartItem));

          const foundProduct = data.map((items) => {
            console.log(
              `${items.price} ${items.qty}   =${items.price * items.qty} }`,
              "oooo"
            );
            return items.type === action.payload.incData
              ? {
                  ...items,
                  qty: items.qty + 1,
                  totalprice: countVal(items),
                }
              : items;
          });
          return { cartItem: foundProduct };
          break;
        case "decrement":
          const datas = JSON.parse(JSON.stringify(state.cartItem));

          const foundProducts = datas.map((items) => {
            return items.type === action.payload.incData
              ? {
                  ...items,
                  qty: items.qty - 1,
                  totalprice: items.price * items.qty,
                }
              : items;
          });
          return { cartItem: foundProducts };
          break;
        default:
          state.counter;
      }
    },
  },
});

export const { ADDTOCART, COUNTER, DELETE } = productsSlice.actions;
export default productsSlice.reducer;
