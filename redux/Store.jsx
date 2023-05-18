import { configureStore } from "@reduxjs/toolkit";

import profileReducer from "./reducer/catogry";
import productsReducer from "./reducer/products";
import cartitemReducer from "./reducer/addtocart";
import geturlreduce from "./reducer/geturl";
export const store = configureStore({
  reducer: {
    category: profileReducer,
    products: productsReducer,
    cartitems: cartitemReducer,
    geturl: geturlreduce,
  },
});

// export function makeStore() {
//   return configureStore({
//     reducer: {
//       category: profileReducer,
//     },
//   });
// }

// export const store = makeStore();
