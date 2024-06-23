import { createSlice } from "@reduxjs/toolkit";

const Operation = createSlice({
  name: "Operatio",
  initialState: [],
  reducers: {
    addOperation: (state, action) => {
      state.push(action.payload);
    },
    RemoveName: (state, action) => {
      state.splice(action.payload, 1);
    },
    Remove_All: (state, action) => {
      return (state = []);
    },
  },
});

export const { addOperation, RemoveName, Remove_All } = Operation.actions;
export default Operation.reducer;
