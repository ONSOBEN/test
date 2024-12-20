import {istadApi} from "@/redux/api";


export const newsApi = istadApi.injectEndpoints({
    endpoints: (builder) => ({
        getNews: builder.query<any, { page: number; pageSize: number }>({
            query: ({ page = 0, pageSize = 10 }) =>
                `/contents?page=1&limit=2&type=3?pageNumber=${page}&pageSize=${pageSize}`,
        }),
        getContentById: builder.query<string, string>({
            query: (id : string
            ) => `website/api/v1/contents/${id}`,
        }),
    })
})

export const { useGetNewsQuery, useGetContentByIdQuery } = newsApi;