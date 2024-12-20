
// **** Generation *****

import {CourseInfo, Generation, Shift, StudyProgram} from "@/redux/features/academic-management/classes/classSlice";

export type GenerationType = {
    name: string;
  startYear: number;
  endYear: number;
  alias: string;
  isDeleted: boolean;
  isDraft: boolean;
  description?: string;
};

export type CreateGenerationType = {
    name: string;
    startYear: number;
    endYear: number;
    alias: string;
    isDraft: boolean;
    description?: string;
};



export type OptionType = {
  label: string;
  value: string;
};

// **** Class *****

export type ClassTableFormType = {
    uuid: string;
    classCode: string;
    shift: string;
    studyProgram: string;
    generation: string;
    isDraft: boolean;
    isDeleted: boolean;
    status: number;
}

export type Class = {
    uuid: string;
    classCode: string;
    description: string;
    isDeleted: boolean;
    isDraft: boolean;
    status: number;
    instructor: string | null;
    studyProgram: StudyProgram;
    shift: Shift;
    generation: Generation;
    students: any[]; // Assuming students are an array of objects
    courses: CourseInfo[];
};

export type ShortClassType = {
    uuid: string;
    classCode: string;
}


export type ShortCourseType = {
    uuid: string;
    title: string;
}

export type ShortCourseStudentType = {
    uuid: string;
    title: string;
    score: string;
    credit: string;
    grade: string;
}

export type StudentType = {
    nameEn: string,
    nameKh: string,
    alias: string,
    gender: string,
    email: string,
    password: string,
    profileImage: string,
    phoneNumber: string,
    cityOrProvince: string,
    khanOrDistrict: string,
    sangkatOrCommune: string,
    street: string,
    status: number,
    cardId: string,
}

export type InstructorType = {
    nameEn: string,
    nameKh: string,
    alias: string,
    gender: string,
    email: string,
    password: string,
    profileImage: string,
    phoneNumber: string,
    cityOrProvince: string,
    khanOrDistrict: string,
    sangkatOrCommune: string,
    street: string,
    status: boolean,
    cardId: string,
    inCharged: boolean
}

export type CourseType = {
    subject: string,
    startDate: Date,
    endDate: Date,
    status: boolean,
    instructor: string,
    semester: number,
    year: number,
    visibility: boolean
}



export type TranscriptType = {
  cardId: string,
  nameEn: string,
  gender: string,
  dob: string,
  class: string,
  studyProgram: string,
  year: number,
  semester1: number,
  semester2: number,
  gpa: number,
  total: number,
  status: number
}

export type semesterAssessementType = {
  cardId: string,
  nameEn: string,
  gender: string,
  dob: string,
  class: string,
  subjects: SubjectType[],
  grade: string,
  total: number,
  status: number
}

export type SubjectType = {
  subjectName: string,
  score: number
};

// export type courseAssessmentType = {
//   uuid: string
//   cardId: string,
//   nameEn: string,
//   gender: string,
//   dob: string,
//   class: string,
//   course: string,
//   midtermExamScore: number,
//   finalExamScore: number,
//   attendanceScore: number,
//   assignmentScore: number,
//   miniProjectScore: number,
//   activityScore: number,
//   status: number
// }

//response course assessment
export type courseAssessmentType = {
    uuid: string;
    activityScore: number;
    attendanceScore: number;
    midtermExamScore: number;
    finalExamScore: number;
    miniProjectScore: number;
    assignmentScore: number;
    student: {
        uuid: string;
        nameEn: string;
        nameKh: string;
        username: string;
        email: string;
        phoneNumber: string;
        dob: string;
        gender: string;
        profileImage: string;
    };
    course: {
        uuid: string;
        title: string;
        credit: number | null;
    } | null;
    isDeleted: boolean;
};


export type courseAssessmentTableType = {
    uuid: string;
    cardId: string;
    nameEn: string;
    gender: string;
    dob: string;
    class: string;
    course: string;
    midtermExamScore: number;
    finalExamScore: number;
    attendanceScore: number;
    assignmentScore: number;
    miniProjectScore: number;
    activityScore: number;
    status: number;
};


// export type LectureType = {
//     // alias: string,
//     startTime: string,
//     endTime: string,
//     description: string,
//     lectureDate: string,
//     status: number,
//     // courseAlias: string,
//     // additional on not have in api
//     teachingType: string,
//     isDelete: boolean,
//     class: string,
//     instructor: string,
//     course: string
//
// }

export type LectureType = {
    uuid: string;
    //session is the combination of start time and end time
    session: string;
    lectureDate: string;
    isDeleted: boolean;
    isDraft: boolean;
    status: number;
    teachingType: string;
    classCode: string;
    courseTitle: string;
    courseUuid: string;
    instructorName: string;
    instructorUuid: string
}

//response lecture
export type LectureRespondType = {
    uuid: string;
    startTime: string;
    endTime: string;
    lectureDate: string;
    isDeleted: boolean;
    isDraft: boolean;
    status: number;
    teachingType: string;
    classCode: string;
    courseTitle: string;
    courseUuid: string;
    instructorName: string;
    instructorUuid: string;
    session?: string;
}

export type FormLectureType = {
    startTime: string;
    endTime: string;
    lectureDate: string;
    isDraft: boolean;
    status: number;
    teachingType: string;
    courseUuid: string;
}

// class

export type GenerationShortType = {
    alias: string;
    name: string;
}

export type ShiftType = {
    alias: string;
    startTime: string;
    endTime: string;
    name: string;
}

export type StudyProgramShortType = {
    alias: string;
    studyProgramName: string;
}

export type ClassDetailResponseType = {
    uuid: string;
    classCode: string;
    courses: ShortCourseType[];
    generation: GenerationShortType;
    instructor: string;

    isDeleted: boolean;
    isDraft: boolean;
    status: number;

    students: any[];
    studyProgram: StudyProgramShortType;

}
