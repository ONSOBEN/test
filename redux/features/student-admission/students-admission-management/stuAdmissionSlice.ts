import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type StudentState = {
    studentData: {
        studentName: string;
        telegramLink: string;
    };
}

const initialState: StudentState = {
    studentData: {
        studentName: '',
        telegramLink: '',
    },
};

const stuAdmissionSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        setStudentData(state, action: PayloadAction<{ studentName: string; telegramLink: string }>) {
            state.studentData = action.payload;
        },
    },
});

export const { setStudentData } = stuAdmissionSlice.actions;
export default stuAdmissionSlice.reducer;
