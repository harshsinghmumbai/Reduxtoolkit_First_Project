import { configureStore } from "@reduxjs/toolkit";
import Operation from "./Slices/Operation";

const store = configureStore({
  reducer: {
    crud: Operation,
  },
});

export default store;
