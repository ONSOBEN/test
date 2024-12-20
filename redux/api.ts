import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// Simple base query without token handling
const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_ISTAD_LMS_API_URL,
});


const baseQueryApi = fetchBaseQuery({
   /* baseUrl: process.env.NEXT_PUBLIC_ISTAD_API_URL,*/
    baseUrl: '/api', // Use the proxy endpoint
    prepareHeaders: (headers) => {
        headers.set('apiKey', '2uHG3FbYCvrZrT2JKRfgPBrfIax5zPwl');
        headers.set('host', 'api.istad.co');
        return headers;
    },

});

export const istadLmsApi = createApi({
    reducerPath: "istadLmsApi",
    baseQuery,
    endpoints: () => ({}),
});

export const istadApi = createApi({
    reducerPath: "istadApi",
    baseQuery: baseQueryApi,
    endpoints: (builder) => ({
        getEventNews: builder.query({
            query: ({ page, pageSize }) => `website/api/v1/contents?page=${page}&limit=${pageSize}&type=2`
        }),

        getNews: builder.query({
            query: ({ page, pageSize }) => `website/api/v1/contents?page=${page}&limit=${pageSize}&type=3`
        }),

        getContentById: builder.query({
            query: (id:string) => `website/api/v1/contents/${id}`,
        }),
    }),

});

