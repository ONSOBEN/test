import {istadApi} from "@/redux/api";


export const eventNewApi = istadApi.injectEndpoints({
    endpoints: (builder) => ({
        getEventNews: builder.query<any, { page: number; pageSize: number }>({
            query: ({ page = 0, pageSize = 10 }) =>
                `/contents?page=1&limit=2&type=2?pageNumber=${page}&pageSize=${pageSize}`,
        }),
        getContentById: builder.query<string, string>({
            query: (id : string
            ) => `website/api/v1/contents/${id}`,
        }),
    })
})

export const { useGetEventNewsQuery, useGetContentByIdQuery } = eventNewApi;