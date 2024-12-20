import {istadLmsApi} from "@/redux/api";

export const degreeApi = istadLmsApi.injectEndpoints({
    endpoints: (builder) => ({
        getDegrees: builder.query<any, void>({
            query: () =>
                `/portals/degrees`,
        })
    })
})
export const {
    useGetDegreesQuery
} = degreeApi;