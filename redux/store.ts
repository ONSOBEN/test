import { configureStore } from "@reduxjs/toolkit";
import { istadApi, istadLmsApi } from "@/redux/api";
import eventNewSlice from "@/redux/features/event-new/eventNewSlice";
import newSlice from "@/redux/features/news-event/newSlice";
import courseSlice from "@/redux/features/academic-management/courses/courseSlice";
import classSlice from "@/redux/features/academic-management/classes/classSlice";
import stuAdmissionSlice from "@/redux/features/student-admission/students-admission-management/stuAdmissionSlice";
import {degreeApi} from "@/redux/features/student-admission/degree/degree";
import {facultyApi} from "@/redux/features/student-admission/faculty/faculty";
import {shiftApi} from "@/redux/features/student-admission/shift/shift";
import {studyProgramApi} from "@/redux/features/student-admission/study-program/studyProgram";
import {bannerAdApi} from "@/redux/features/banners/bannerAd";


export const makeStore = () => {
    return configureStore({
        reducer: {
            [istadLmsApi.reducerPath]: istadLmsApi.reducer,
            [istadApi.reducerPath]: istadApi.reducer,
            eventNew: eventNewSlice,
            new: newSlice,
            courses: courseSlice,
            class: classSlice,
            studentAdmission: stuAdmissionSlice ,
            degreeApi : degreeApi.reducer,
            facultyApi : facultyApi.reducer,
            shiftApi : shiftApi.reducer,
            studyProgramApi : studyProgramApi.reducer,
            bannerAd : bannerAdApi.reducer,

        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
            .concat(istadLmsApi.middleware)
            .concat(istadApi.middleware),

    });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
