
// **** Degree *****
export type DegreeType = {
    alias: string,
    level: string,
    numberOfYear: number,
    description: string,
    isDeleted: boolean,
    isDraft: boolean
};



// **** Faculty *****
export type FacultyType = {
    alias: string,
    name: string,
    description: string,
    address: string,
    logo: string,
    isDeleted: boolean,
    isDraft: boolean

};


// === Shift ====
export type ShiftResponseType = {
    alias: string;
    name: string;
    startTime: string;
    endTime: string;
    weekday: string;
    description: string;
    isDeleted: string;
    isDraft: string;
}

