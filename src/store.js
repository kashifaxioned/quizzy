import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./features/api/apiSlice";
import numOfCorrectAnswerSlice from "./features/numOfCorrectAnswer/numOfCorrectAnswerSlice";

const store = configureStore({
  reducer: {
    correctAnswer: numOfCorrectAnswerSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export default store;
