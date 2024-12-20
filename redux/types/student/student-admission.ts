import * as Yup from "yup";




export type StudentAdmissionType = {
    nameEn: string,
    nameKh: string,
    email: string,
    highSchool: string,
    phoneNumber: string,
    dob: string,
    pob: string,
    bacIiGrade: string,
    gender: string,
    avatar: string,
    address: string,
    guardianContact: string,
    guardianRelationShip: string,
    knownIstad: string,
    identity: string,
    biography: string,
    isDeleted: boolean,
    shiftAlias: string,
    studyProgramAlias: string,
    degreeAlias: string,
    admission: string,
    diplomaSession: string,
    classStudent: string,
    highSchoolCertificate: string,
    vocationTrainingIiiCertificate: string,
    anyValuableCertificate: string,
    studentName: string,
    telegramLink: string,
};




export type StuAdmissionState = {
    stuAdmissions: StudentAdmissionType[];
    isLoading: boolean;
    error: string | null;
}






export const initialValues: StudentAdmissionType = {
    isDeleted: false,
    nameEn: "",
    nameKh: "",
    email: "",
    highSchool: "",
    phoneNumber: "",
    dob: "",
    pob: "",
    bacIiGrade: "",
    gender: "",
    avatar: "",
    address: "",
    guardianContact: "",
    guardianRelationShip: "",
    knownIstad: "",
    identity: "",
    biography: "",
    shiftAlias: "",
    studyProgramAlias: "",
    degreeAlias: "",
    admission: "",
    diplomaSession: "",
    classStudent: "",
    highSchoolCertificate: "",
    vocationTrainingIiiCertificate: "",
    anyValuableCertificate: "",
    studentName: "",
    telegramLink: "",
};




export const certificateValidationSchema = Yup.object().shape({
    highSchoolCertificate: Yup.mixed().nullable(),
    vocationTrainingIiiCertificate: Yup.mixed().nullable(),
    anyValuableCertificate: Yup.mixed().nullable(),
    certificates: Yup.array().test(
        'at-least-one',
        'At least one certificate is required',
        function (value) {
            const { highSchoolCertificate, vocationTrainingIiiCertificate, anyValuableCertificate } = this.parent;
            return !!highSchoolCertificate || !!vocationTrainingIiiCertificate || !!anyValuableCertificate;
        }
    ),
});

export const validationSchema = Yup.object().shape({
    nameEn: Yup.string()
        .matches(/^[a-zA-Z ]*$/, 'Invalid format with English name')
        .max(100, 'Name (EN) cannot be longer than 100 characters')
        .required('Name (EN) is required'),
    nameKh: Yup.string()
        // .matches(/^[\u1780-\u17FF\s]+$/, 'Invalid format with Khmer name')
        .matches(/^[a-zA-Z ]*$/, 'Invalid format with English name')
        .max(100, 'Name (KH) cannot be longer than 100 characters')
        .required('Name (KH) is required'),
    email: Yup.string()
        .email('Invalid email format')
        .max(50, 'Email cannot be longer than 50 characters')
        .required('Email is required'),
    highSchool: Yup.string().required("High School is required"),
    phoneNumber: Yup.string()
        .matches(
            /^(\+855|0)(\s?[1-9]\d{1,2})(\s?\d{3})(\s?\d{3,4})$/,
            'Please enter a valid Cambodian phone number'
        )
        .required('Phone Number is required'),
    dob: Yup.string()
        .required('Date of Birth is required')
        .max(50, 'Date of Birth cannot be longer than 50 characters'),
    pob: Yup.string()
        .required("Place of Birth is required")
        .max(50, 'Place of Birth cannot be longer than 50 characters'),
    bacIiGrade: Yup.string()
        .max(10, 'Bac II Grade cannot be longer than 10 characters')
        .required('Bac II Grade is required'),
    gender: Yup.string()
        .matches(/^(M|F|other)$/i, 'Invalid gender format')
        .max(20, 'Gender cannot be longer than 20 characters')
        .required('Gender is required'),
    address: Yup.string()
        .required('Address is required'),
    guardianContact: Yup.string()
        .matches(/^\+?\d[\d\s]{7,14}$/, 'Phone number is not valid')
        .max(50, 'Guardian Contact cannot be longer than 50 characters')
        .required('Guardian Contact is required'),
    guardianRelationShip: Yup.string()
        .max(50, 'Guardian Relationship cannot be longer than 50 characters')
        .required('Guardian Relationship is required'),
    knownIstad: Yup.string().nullable().notRequired(),
    identity: Yup.string().nullable().notRequired(),
    avatar: Yup.string().nullable().notRequired(),
    biography: Yup.string().nullable().notRequired(),
    classStudent: Yup.string()
        .max(255, 'Class Student cannot be longer than 255 characters')
        .required('Class Student is required'),
    diplomaSession: Yup.string()
        .matches(/^\d{4}-\d{4}$/, 'Please enter a valid session format (YYYY-YYYY)')
        .test('valid-year-range', 'End year should be one year after start year', function(value) {
            if (value && value.length === 9) {
                const [start, end] = value.split('-').map(Number);
                return end === start + 1;
            }
            return true;
        })
        .required('Diploma Session is required'),
    highSchoolCertificate: Yup.mixed().nullable(),
    // highSchoolCertificate: Yup.mixed().required('High School Certificate is required'),

    vocationTrainingIiiCertificate: Yup.mixed().nullable(),
    anyValuableCertificate: Yup.mixed().nullable(),
    // Custom validation to ensure at least one certificate is uploaded
    certificates: Yup.array().test(
        'at-least-one',
        'At least one certificate is required',
        function (value) {
            const { highSchoolCertificate, vocationTrainingIiiCertificate, anyValuableCertificate } = this.parent;
            return !!highSchoolCertificate || !!vocationTrainingIiiCertificate || !!anyValuableCertificate;
        }
    ),
    shiftAlias: Yup.string()
        .max(100, 'Shift Alias cannot be longer than 100 characters')
        .required('Shift Alias is required'),
    studyProgramAlias: Yup.string()
        .max(100, 'Study Program Alias cannot be longer than 100 characters')
        .required('Study Program Alias is required'),
    degreeAlias: Yup.string()
        .max(100, 'Degree Alias cannot be longer than 100 characters')
        .required('Degree Alias is required'),
});
