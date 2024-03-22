import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: ''
    }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: (id) => `/posts` 
        })
    })
});

export const { useGetTodosQuery } = postApi; 
