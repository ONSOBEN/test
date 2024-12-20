import { istadLmsApi } from "@/redux/api";

export const stuAdmissionApi = istadLmsApi.injectEndpoints({

    endpoints: (builder) => ({

        createStudentAdmission: builder.mutation({
            query: (newStudentAdmission) => ({
                url: '/student-admissions',
                method: 'POST',
                body: newStudentAdmission,
            }),
        }),


        createSingleFile: builder.mutation({
            query: (fileData) => ({
                url: `/portals/uploads`,
                method: 'POST',
                body: fileData,
            }),
        }),

    })
})
export const {
    useCreateStudentAdmissionMutation,
    useCreateSingleFileMutation,
} = stuAdmissionApi;