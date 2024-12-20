import { istadLmsApi } from "@/redux/api";

export const studyProgramApi = istadLmsApi.injectEndpoints({
    endpoints: (builder) => ({
        getStudyPrograms: builder.query<any, void>({
            query: () =>
                `/portals/study-programs`,
        }),
        getStudyProgramsDetail: builder.query<any, string   >({
            query: (alias:string) =>
                `/portals/study-programs/${alias}/study-program-topics`,
        }),
        getSubjectsOfStudyPrograms: builder.query<any, string   >({
            query: (alias:string) =>
                `/portals/study-programs/${alias}/subjects`,
        }),
    })
})

export const {
    useGetStudyProgramsQuery,
    useGetStudyProgramsDetailQuery,
    useGetSubjectsOfStudyProgramsQuery
} = studyProgramApi;