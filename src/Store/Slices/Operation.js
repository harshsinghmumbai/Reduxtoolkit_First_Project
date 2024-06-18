import { createSlice } from "@reduxjs/toolkit";

const Operation = createSlice({
  name: "Operatio",
  initialState: [],
  reducers: {
    addOperation: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addOperation } = Operation.actions;
export default Operation.reducer;
