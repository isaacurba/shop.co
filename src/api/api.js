import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com",
    }),

    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "/products",
        }),
        getProduct: builder.query({
            query: (id) => `/product/${id}`,
        }),
    }),
})

export const { useGetAllProductsQuery, useGetProductQuery } = api;