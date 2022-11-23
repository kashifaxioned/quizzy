import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

export const numOfCorrectAnswerSlice = createSlice({
  name: "numOfCorrectAnswer",
  initialState,
  reducers: {
    increment: (state) => state + 1,
    reset: (state) => state = 0,
  },
});

export const { increment, reset } = numOfCorrectAnswerSlice.actions;
export default numOfCorrectAnswerSlice.reducer;
