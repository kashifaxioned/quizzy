import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath:'api',
  baseQuery: fetchBaseQuery({baseUrl: "https://opentdb.com/api.php"}),
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: () => '?amount=100&category=18&type=multiple'
    })
  })
}) 

export const {useGetQuestionsQuery} = apiSlice;