"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface InputState {
  value: string;
}
const initialState: InputState = {
  value: "",
};
export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    resetInputValue: (state) => {
      state.value = "";
    },
  },
});
export const { setInputValue, resetInputValue } = inputSlice.actions;
export default inputSlice.reducer;
