import { istadLmsApi } from "@/redux/api";

export const shiftApi = istadLmsApi.injectEndpoints({
    endpoints: (builder) => ({
        getShift: builder.query<any, void>({
            query: () =>
                `/portals/shifts`,
        }),


    })
})

export const {
   useGetShiftQuery

} = shiftApi;