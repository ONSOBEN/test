import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";

type ContentType = {
    id: number;
    type: string;
};

type EventNew = {
    id: number;
    uuid: string;
    title: string;
    slug: string;
    editorContent: string;
    thumbnail: string;
    images: string | null;
    contentType: ContentType;
    tagIds: number[];
    view: number;
    publishedAt: number;
    publishedBy: string;
    location: string; // Add location if it exists in your data
};

type Paging = {
    page: number;
    limit: number;
    nextPage: number;
    previousPage: number;
    totalCount: number;
    totalPages: number;
    pagesToShow: number;
    startPage: number;
    endPage: number;
    offset: number;
};

type EventNewState = {
    eventNews: EventNew[];
    paging: Paging;
    loading: boolean;
    error: string | null;
};

interface EventNewResponse {
    code: number;
    message: string;
    requestedTime: number;
    dataList: EventNew[];
    paging: Paging;
}

const initialState: EventNewState = {
    eventNews: [],
    paging: {
        page: 1,
        limit: 2,
        nextPage: 2,
        previousPage: 1,
        totalCount: 7,
        totalPages: 4,
        pagesToShow: 6,
        startPage: 1,
        endPage: 4,
        offset: 0,
    },
    loading: false,
    error: null,
};

const eventNewSlice = createSlice({
    name: "eventNew",
    initialState,
    reducers: {
        setEventNews: (state, action: PayloadAction<EventNew[]>) => {
            state.eventNews = action.payload;
        },
        setPaging: (state, action: PayloadAction<Paging>) => {
            state.paging = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const { setEventNews, setPaging, setLoading, setError } = eventNewSlice.actions;

export const selectEventNews = (state: RootState) => state.eventNew.eventNews;
export const selectPaging = (state: RootState) => state.eventNew.paging;
export const selectLoading = (state: RootState) => state.eventNew.loading;
export const selectError = (state: RootState) => state.eventNew.error;

export default eventNewSlice.reducer;
