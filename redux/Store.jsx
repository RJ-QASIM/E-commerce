import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducer/catogry";
import productsReducer from "./reducer/products";
export const store = configureStore({
  reducer: {
    category: profileReducer,
    products: productsReducer,
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
