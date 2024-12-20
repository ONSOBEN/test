"use client";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {Button} from "@/components/ui/button";
import style from "./style.module.css";
import {FiUploadCloud} from "react-icons/fi";
import React, { useState } from "react";
import {IoIosArrowDown} from "react-icons/io";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {TbAsterisk} from "react-icons/tb";
import {initialValues, StudentAdmissionType, validationSchema} from "@/redux/types/student/student-admission";
import {
    useCreateSingleFileMutation,
    useCreateStudentAdmissionMutation
} from "@/redux/features/student-admission/students-admission-management/stuAdmission";
import {useGetDegreesQuery} from "@/redux/features/student-admission/degree/degree";
import {useGetStudyProgramsQuery} from "@/redux/features/student-admission/study-program/studyProgram";
import {useGetShiftQuery} from "@/redux/features/student-admission/shift/shift";
import RequiredFieldLabelComponent from "@/components/student-admission/RequiredFieldLabelComponent";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {cn} from "@/lib/utils";
import {CalendarIcon} from "@radix-ui/react-icons";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar";
import { useDispatch } from 'react-redux';
import { setStudentData } from '@/redux/features/student-admission/students-admission-management/stuAdmissionSlice';
import { useRouter } from 'next/navigation';
import {DayPicker} from "react-day-picker";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {toast, ToastContainer} from "react-toastify";
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export function AddStudentAmsForm() {

    const dispatch = useDispatch();
    const [createAvatar] = useCreateSingleFileMutation();
    const [createIdentity] = useCreateSingleFileMutation();
    const [createHighSchoolCertificate] = useCreateSingleFileMutation();
    const [createVocationTrainingIiiCertificate] = useCreateSingleFileMutation();
    const [createAnyValuableCertificate] = useCreateSingleFileMutation();
    const [createStuAdmission] = useCreateStudentAdmissionMutation();
    const [activeTab, setActiveTab] = useState("personal_info");
    const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
    const {data:shifts} = useGetShiftQuery();
    const route = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [month, setMonth] = React.useState(dateOfBirth || new Date());


    const {
        data: studyPrograms,
    } = useGetStudyProgramsQuery();


    const {
        data: degrees,
    } = useGetDegreesQuery();



    const handleNext = (currentTab  : string ) => {
        if (currentTab === "personal_info") {
            setActiveTab("edu_info");
        } else if (currentTab === "edu_info") {
            setActiveTab("school_info");
        }
        window.scrollTo(0, 0);
    };



    const CustomInputFile = ({field, form: {setFieldValue, values}, label, placeholder, previewField}: any) => {
        const handleUploadFile = (e: any) => {
            const file = e.target.files[0];
            console.log(`File selected for ${field.name}:`, file);
            const localUrl = URL.createObjectURL(file);
            setFieldValue(field.name, file);
            setFieldValue(previewField, localUrl);
            console.log(`Preview set for ${previewField}:`, localUrl);
        };

    // const CustomInputFile = ({field, form: {setFieldValue, values}, label, placeholder, previewField}: any) => {
    //     const handleUploadFile = (e: any) => {
    //         const file = e.target.files[0];
    //         const localUrl = URL.createObjectURL(file);
    //         setFieldValue(field.name, file); // Set the field value in Formik
    //         setFieldValue(previewField, localUrl);
    //     };

        return (
            <div className="w-full">
                <input
                    type="file"
                    onChange={handleUploadFile}
                    className="hidden"
                    id={field.name}
                />
                <label
                    htmlFor={field.name}
                    className="border border-gray-300 hover:bg-lms-background text-gray-900 text-sm rounded-lg bg-white w-full h-[215px] p-2 border-dashed flex justify-center items-center cursor-pointer relative overflow-hidden"
                >
                    {!values[previewField] ? (
                        <div className="flex flex-col items-center justify-center gap-4">
                            <FiUploadCloud className="text-lms-primary text-[34px]"/>
                            <p className="text-center text-md text-black">
                                Select a file or drag and drop here
                            </p>
                            <p className="text-center text-md text-lms-gray-30">
                                JPG, PNG or PDF, file size no more than 10MB
                            </p>
                        </div>
                    ) : (
                        <img
                            src={values[previewField]}
                            alt="preview"
                            className="object-cover h-full w-full"
                        />
                    )}
                </label>
            </div>
        );
    };


    const handleSubmit = async (values: any, {setSubmitting, resetForm,validateForm}: any) => {
        setIsLoading(true);
        setSubmitting(true);
        console.log('Starting form submission with values:', values);
        // Validate all fields

        try {
            setSubmitting(true);
            const errors = await validateForm(values);

            if (Object.keys(errors).length > 0) {
                console.log('Form validation errors:', errors);
                toast.error("Form cannot be submitted. Please check all fields and try again.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                setSubmitting(false);
                setIsLoading(false);
                return;
            }
            const uploadFile = async (file: File | undefined, createFunction: Function, fieldName: string) => {
                if (!file) {
                    console.log(`Skipping ${fieldName} upload: No file provided`);
                    return "";
                }
                console.log(`Uploading ${fieldName}:`, file);
                const formData = new FormData();
                formData.append('file', file);
                try {
                    const response = await createFunction(formData).unwrap();
                    console.log(`${fieldName} upload response:`, response);
                    return response.name;
                } catch (error) {
                    console.error(`Error uploading ${fieldName}:`, error);
                    throw error;
                }
            };

            // Upload files
            const [avatar, identity, highSchoolCertificate, vocationTrainingIiiCertificate, anyValuableCertificate] = await Promise.all([
                uploadFile(values.avatar, createAvatar, 'avatar'),
                uploadFile(values.identity, createIdentity, 'identity'),
                uploadFile(values.highSchoolCertificate, createHighSchoolCertificate, 'highSchoolCertificate'),
                uploadFile(values.vocationTrainingIiiCertificate, createVocationTrainingIiiCertificate, 'vocationTrainingIiiCertificate'),
                uploadFile(values.anyValuableCertificate, createAnyValuableCertificate, 'anyValuableCertificate')
            ]);

            // Prepare the student admission data
            const newStuAdmission = {
                nameEn: values.nameEn,
                nameKh: values.nameKh,
                email: values.email,
                highSchool: values.highSchool,
                phoneNumber: values.phoneNumber,
                dob: values.dob,
                pob: values.pob,
                bacIiGrade: values.bacIiGrade,
                gender: values.gender,
                avatar,
                address: values.address,
                guardianContact: values.guardianContact,
                guardianRelationShip: values.guardianRelationShip,
                knownIstad: values.knownIstad,
                identity,
                biography: values.biography,
                diplomaSession: values.diplomaSession,
                classStudent: values.classStudent,
                highSchoolCertificate,
                vocationTrainingIiiCertificate,
                anyValuableCertificate,
                shiftAlias: values.shiftAlias,
                studyProgramAlias: values.studyProgramAlias,
                degreeAlias: values.degreeAlias,
                isDeleted: false,
                studentName: values.nameEn,
                telegramLink: values.telegramLink || ""
            };

            // Create the student admission
            const response = await createStuAdmission(newStuAdmission).unwrap();

            resetForm();
            console.log("Update successfully");
            toast.success("Finished successfully");
            // Dispatch the action to set student data in the Redux store
            dispatch(setStudentData({
                studentName: newStuAdmission.studentName,
                telegramLink: newStuAdmission.telegramLink,
            }));

            route.push('/welcome-page');
        } catch (error: any) {
            console.error("Error creating student admission: ", error);
            if (error.status === 503) {
                toast.error("In step 2, a High School Certificate is required.");
                // toast.error("The server is currently unavailable. Please try again later.");
            } else {
                toast.error("Failed to create student admission. Please check your input and try again.");
            }
        } finally {
            setSubmitting(false);
            setIsLoading(false);
        }
    };

    return (
        <>

        <ToastContainer />
        <section className="flex flex-grow flex-col gap-6 bg-white border w-full items-center-center rounded-[10px] none-scroll-bar">


            <section className="h-[90px] flex items-center mx-10 ">
                <h1 className="text-2xl sm:text-3xl font-bold text-lms-black-90">Student Admission</h1>
            </section>



            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >


                {({setFieldValue, values, validateForm, submitForm, errors, touched,isSubmitting, setSubmitting   }) => (



                    <Form className="py-4 rounded-lg w-full flex justify-center items-center">



                        <Tabs value={activeTab} onValueChange={setActiveTab} defaultValue="personal_info"
                              className="w-full py-0 my-0">


                            {/**/}
                            <TabsList className="bg-lms-background w-full  h-[150px] rounded-none px-10 ">

                                <div className="flex items-center justify-center container gap-[20px]">

                                    <div className={`flex flex-col justify-center items-center gap-4`}>


                                        <TabsTrigger
                                            value="personal_info"
                                            className={`${style.tab}`}
                                        >
                                            1
                                        </TabsTrigger>

                                        <span className="text-lms-primary text-lg sm:block hidden ">Personal Information</span>

                                    </div>

                                    {/* <div className="border-l border-lms-primary h-full mx-2"></div> Vertical line */}
                                    <div className="h-[1px] w-[10px] sm:w-[200px] bg-gray-300 dark:bg-gray-700"></div>

                                    <div className={`flex flex-col justify-center items-center gap-4`}>

                                        <TabsTrigger
                                            value="edu_info"
                                            className="dark:text-gray-300 dark:hover:text-white bg-white rounded-full border border-lms-primary h-[50px] w-[50px] text-[32px] font-bold text-lms-primary flex items-center justify-center text-center"
                                        >
                                            2
                                        </TabsTrigger>

                                        <span className="text-lms-primary text-lg sm:block hidden">Education Information</span>

                                    </div>

                                    <div className="h-[1px] w-[10px] sm:w-[200px] bg-gray-300 dark:bg-gray-700"></div>

                                    <div className={`flex flex-col justify-center items-center gap-4`}>

                                        <TabsTrigger
                                            value="school_info"
                                            className="dark:text-gray-300 dark:hover:text-white bg-white rounded-full border border-lms-primary h-[50px] w-[50px] text-[32px] font-bold text-lms-primary flex items-center justify-center text-center"
                                        >
                                            3
                                        </TabsTrigger> <span
                                        className="text-lms-primary text-lg sm:block hidden">Institute Information</span>

                                    </div>

                                </div>


                            </TabsList>



                            {/* Personal Information */}
                            <TabsContent
                                value="personal_info"
                                className={` relative pb-10 flex justify-center h-full items-center flex-col gap-9 mx-10 my-0`}>

                                {/* Personal Information Form Fields */}
                                <div className="border-b-2 w-full py-6">
                                    <h1 className="text-2xl font-bold text-lms-black-90 mt-20 ">Personal Information</h1>
                                </div>

                                {/* Add your form fields for personal information here */}
                                <section
                                    className="w-full md:px-20 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-9 justify-center items-center">

                                    {/*name_en */}
                                    <div className={`${style.inputContainer}`}>
                                        <div className="flex">
                                            <label className={`${style.label}`} htmlFor="nameEn">
                                                Name ( EN )
                                            </label>
                                            <TbAsterisk className='w-2 h-2 text-lms-error'/>
                                        </div>

                                        <Field
                                            type="text"
                                            name="nameEn"
                                            placeholder="Chan Tola"
                                            id="nameEn"
                                            className={`${style.input}`}
                                        />
                                        <ErrorMessage
                                            name="nameEn"
                                            component="div"
                                            className={`${style.error}`}
                                        />
                                    </div>

                                    {/*name KH */}
                                    <div className={`${style.inputContainer}`}>
                                        <div className="flex">
                                            <label className={`${style.label}`} htmlFor="nameKh">
                                                Name ( KH )
                                            </label>
                                            <TbAsterisk className='w-2 h-2 text-lms-error'/>
                                        </div>

                                        <Field
                                            type="text"
                                            name="nameKh"
                                            placeholder="Chan Tola"
                                            id="nameKh"
                                            className={`${style.input}`}
                                        />
                                        <ErrorMessage
                                            name="nameKh"
                                            component="div"
                                            className={`${style.error}`}
                                        />
                                    </div>


                                    {/* Gender */}
                                    <div className={style.inputContainer}>
                                        <div className="flex">
                                            <label className={style.label} htmlFor="gender">
                                                Gender
                                            </label>
                                            <TbAsterisk className='w-2 h-2 text-lms-error'/>
                                        </div>

                                        <div className="relative w-full">
                                            <Field
                                                as="select"
                                                name="gender"
                                                id="gender"
                                                className={`${style.input} appearance-none`}
                                            >
                                                <option className=" text-gray-400 " value="" disabled hidden>
                                                    Gender
                                                </option>
                                                <option value="M">Male</option>
                                                <option value="F">Female</option>
                                                {/*<option value="other">Other</option>*/}
                                            </Field>
                                            <ErrorMessage
                                                name="gender"
                                                component="div"
                                                className={`${style.error}`}
                                            />
                                            <div
                                                className=" absolute inset-y-0 right-0 flex top-2  pr-2 pointer-events-none">
                                                <IoIosArrowDown
                                                    className="h-5 w-5 flex text-gray-400 "
                                                    aria-hidden="true"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Date of Birth */}
                                    <div className="inputContainer z-10">
                                        <RequiredFieldLabelComponent
                                            labelText="Date of Birth"
                                            labelClassName="block mb-2 text-sm font-medium text-gray-900 dark:text-white z-10"
                                            htmlFor="dob"
                                        />
                                        <div className="relative">
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        className={cn(
                                                            "bg-white hover:bg-gray-50 z-10 border border-gray-300 text-gray-900 text-sm rounded-lg outline-lms-gray-80 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 justify-between flex items-center",
                                                            !dateOfBirth && "text-gray-600"
                                                        )}
                                                    >
                                                        {dateOfBirth ? format(dateOfBirth, "PPP") :
                                                            <span className="text-gray-400">Select a date</span>}
                                                        <CalendarIcon className="mr-2 h-4 w-4"/>
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="p-0 bg-white shadow-lg rounded-lg"
                                                                style={{width: '300px'}}>
                                                    <DayPicker
                                                        mode="single"
                                                        selected={dateOfBirth ? new Date(dateOfBirth) : undefined}
                                                        // selected={dateOfBirth}
                                                        onSelect={(date) => {
                                                            setDateOfBirth(date ? date as Date : null);
                                                            const formattedDate = date ? format(date, 'yyyy-MM-dd') : '';
                                                            setFieldValue('dob', formattedDate);
                                                        }}
                                                        month={month}
                                                        onMonthChange={setMonth}
                                                        captionLayout="dropdown-buttons"
                                                        fromYear={1900}
                                                        toYear={new Date().getFullYear()}
                                                        className="p-3"
                                                        classNames={{
                                                            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                                                            month: "space-y-4",
                                                            caption: "flex flex-col space-y-2 mb-2",
                                                            caption_label: "hidden",
                                                            caption_dropdowns: "flex justify-between items-center p-2 mt-2",
                                                            dropdown_month: " mr-2",
                                                            dropdown_year: " ml-2",
                                                            dropdown: "p-2 bg-white border border-gray-300 rounded-md text-sm",
                                                            nav: "flex justify-between items-center",
                                                            nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                                                            nav_button_previous: "absolute left-1 top-2",
                                                            nav_button_next: "absolute right-1 top-2",
                                                            table: "w-full border-collapse",
                                                            head_row: "flex",
                                                            head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem] py-2",
                                                            row: "flex w-full",
                                                            cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                                                            day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
                                                            day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                                                            day_today: "bg-accent text-accent-foreground",
                                                            day_outside: "text-muted-foreground opacity-50",
                                                            day_disabled: "text-muted-foreground opacity-50",
                                                            day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                                                            day_hidden: "invisible",
                                                        }}
                                                        components={{
                                                            IconLeft: ({...props}) => <ChevronLeft
                                                                className="h-4 w-4"/>,
                                                            IconRight: ({...props}) => <ChevronRight
                                                                className="h-4 w-4"/>,
                                                        }}
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                        <ErrorMessage name="dob" component="div" className="text-red-500 text-sm mt-1"/>
                                    </div>

                                    {/* Contact */}
                                    <div className={`${style.inputContainer}`}>
                                        <div className="flex">
                                            <label className={`${style.label}`} htmlFor="phoneNumber">
                                                Contact Number
                                            </label>
                                            <TbAsterisk className='w-2 h-2 text-lms-error'/>
                                        </div>

                                        <Field
                                            type="text"
                                            name="phoneNumber"
                                            placeholder="+855 12 345 678"
                                            id="phoneNumber"
                                            className={`${style.input}`}

                                        />
                                        <ErrorMessage
                                            name="phoneNumber"
                                            component="div"
                                            className={`${style.error}`}
                                        />
                                    </div>


                                    {/* Email */}
                                    <div className={`${style.inputContainer}`}>
                                        <div className="flex">
                                            <label className={`${style.label}`} htmlFor="email">
                                                Email
                                            </label>
                                            <TbAsterisk className='w-2 h-2 text-lms-error'/>
                                        </div>

                                        <Field
                                            type="text"
                                            name="email"
                                            placeholder="student.istad@gmail.com"
                                            id="email"
                                            className={`${style.input}`}
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className={`${style.error}`}
                                        />
                                    </div>

                                    {/* High school */}
                                    <div className={`${style.inputContainer}`}>
                                        <div className="flex">
                                            <label className={`${style.label}`} htmlFor="highSchool">
                                                High School
                                            </label>
                                            <TbAsterisk className='w-2 h-2 text-lms-error'/>
                                        </div>

                                        <Field
                                            type="text"
                                            name="highSchool"
                                            placeholder="Chea Sim Takeo High School"
                                            id="highSchool"
                                            className={`${style.input}`}
                                        />
                                        <ErrorMessage
                                            name="highSchool"
                                            component="div"
                                            className={`${style.error}`}
                                        />
                                    </div>

                                    {/* Place of Birth */}
                                    <div className={`${style.inputContainer}`}>
                                        <div className="flex">
                                            <label className={`${style.label}`} htmlFor="pob">
                                                Place of Birth
                                            </label>
                                            <TbAsterisk className='w-2 h-2 text-lms-error'/>
                                        </div>

                                        <Field
                                            type="text"
                                            name="pob"
                                            placeholder="Takeo Province"
                                            id="pob"
                                            className={`${style.input}`}
                                        />
                                        <ErrorMessage
                                            name="pob"
                                            component="div"
                                            className={`${style.error}`}
                                        />
                                    </div>

                                    {/* Current Address */}
                                    <div className={`${style.inputContainer}`}>
                                        <div className="flex">
                                            <label className={`${style.label}`} htmlFor="address">
                                                Current Address
                                            </label>
                                            <TbAsterisk className='w-2 h-2 text-lms-error'/>
                                        </div>

                                        <Field
                                            type="text"
                                            name="address"
                                            placeholder="Chamkar Mon, Phnom Penh, Cambodia"
                                            id="address"
                                            className={`${style.input}`}
                                        />
                                        <ErrorMessage
                                            name="address"
                                            component="div"
                                            className={`${style.error}`}
                                        />
                                    </div>

                                    {/* Guardian Contact */}
                                    <div className={`${style.inputContainer}`}>
                                        <div className="flex">
                                            <label className={`${style.label}`} htmlFor="guardianContact">
                                                Guardian Contact
                                            </label>
                                            <TbAsterisk className='w-2 h-2 text-lms-error'/>
                                        </div>

                                        <Field
                                            type="text"
                                            name="guardianContact"
                                            placeholder="012 345 678 98"
                                            id="guardianContact"
                                            className={`${style.input}`}
                                        />
                                        <ErrorMessage
                                            name="guardianContact"
                                            component="div"
                                            className={`${style.error}`}
                                        />
                                    </div>

                                    {/* Guardian Relationship */}
                                    <div className={`${style.inputContainer}`}>
                                        <div className="flex">
                                            <label className={`${style.label}`} htmlFor="guardianRelationShip">
                                                Guardian Relationship
                                            </label>
                                            <TbAsterisk className='w-2 h-2 text-lms-error'/>
                                        </div>

                                        <Field
                                            type="text"
                                            name="guardianRelationShip"
                                            placeholder="Mother, Father, Brother..."
                                            id="guardianRelationShip"
                                            className={`${style.input}`}
                                        />
                                        <ErrorMessage
                                            name="guardianRelationShip"
                                            component="div"
                                            className={`${style.error}`}
                                        />
                                    </div>

                                    {/* Get to know ISTAD through: */}
                                    <div className={`${style.inputContainer}`}>
                                        <div className="flex">
                                            <label className={`${style.label}`} htmlFor="knownIstad">
                                                Get to know ISTAD through:
                                            </label>
                                            <TbAsterisk className='w-2 h-2 text-lms-error'/>
                                        </div>

                                        <Field
                                            type="text"
                                            name="knownIstad"
                                            placeholder="Social Media Announcement "
                                            id="knownIstad"
                                            className={`${style.input}`}
                                        />
                                        <ErrorMessage
                                            name="knownIstad"
                                            component="div"
                                            className={`${style.error}`}
                                        />
                                    </div>

                                    {/* formal image */}
                                    <div className={`${style.inputContainer} grid row-span-3`}>
                                        <div className="flex">
                                            <label className={`${style.label}`} htmlFor="avatar">
                                                Upload Formal Picture
                                            </label>
                                            <TbAsterisk className='w-2 h-2 text-lms-error'/>
                                        </div>

                                        <Field
                                            type="file"
                                            name="avatar"
                                            id="avatar"
                                            component={CustomInputFile}
                                            previewField="avatarPreview"
                                            // setFieldValue={setFieldValue}
                                            // uploadedFile={uploadedFileAvatar}
                                            // setUploadedFile={setUploadedFileAvatar}
                                        />
                                        <ErrorMessage
                                            name="avatar"
                                            component="div"
                                            className={`${style.error}`}
                                        />
                                    </div>

                                    {/* Upload Identity */}
                                    <div className={`${style.inputContainer} grid row-span-3`}>
                                        <div className="flex">
                                            <label className={`${style.label}`} htmlFor="identity">
                                                Upload Identity
                                            </label>
                                            <TbAsterisk className='w-2 h-2 text-lms-error'/>
                                        </div>

                                        <Field
                                            type="file"
                                            name="identity"
                                            id="identity"
                                            component={CustomInputFile}
                                            // setFieldValue={setFieldValue}
                                            // uploadedFile={uploadedFileIdentity}
                                            // setUploadedFile={setUploadedFileIdentity}
                                            previewField="identityPreview"
                                        />
                                        <ErrorMessage
                                            name="identity"
                                            component="div"
                                            className={`${style.error}`}
                                        />
                                    </div>


                                </section>

                                <section className="absolute bottom-0 right-0 mt-5">
                                    <Button
                                        type="button"
                                        className="text-white bg-lms-primary rounded-[10px] hover:bg-lms-primary"
                                        onClick={() => handleNext(activeTab)}
                                    >
                                        Next
                                    </Button>
                                </section>


                            </TabsContent>


                            {/* Education Information */}
                            <TabsContent
                                value="edu_info"
                                className={` relative pb-10 flex justify-center h-full items-center flex-col gap-9 mx-10 my-0`}>
                                <div className="border-b-2 w-full py-6">
                                    <h1 className="text-2xl font-bold text-lms-black-90 mt-10 ">Education
                                        Information</h1>
                                </div>

                                {/* Add your form fields for education information here */}
                                <section
                                    className="w-full md:px-20 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-9 justify-center items-center mb-2">

                                    {/* Class Student */}
                                    <div className={style.inputContainer}>
                                        <div className="flex">
                                            <label className={style.label} htmlFor="classStudent">
                                                Class Student
                                            </label>
                                            <TbAsterisk className='w-2 h-2 text-lms-error'/>
                                        </div>

                                        <div className="relative w-full">
                                            <Field
                                                as="select"
                                                name="classStudent"
                                                id="classStudent"
                                                className={`${style.input} appearance-none`}
                                            >
                                                <option value="" disabled hidden>
                                                    Class Student
                                                </option>
                                                <option value="Male">Science Class</option>
                                                <option value="Female">Social Science Class</option>
                                            </Field>
                                            <ErrorMessage
                                                name="classStudent"
                                                component="div"
                                                className={`${style.error}`}
                                            />
                                            <div
                                                className="absolute inset-y-0 right-0 flex top-2 pr-2 pointer-events-none">
                                                <IoIosArrowDown
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/*Diploma Session */}
                                    <div className={`${style.inputContainer}`}>
                                        <div className="flex">
                                            <label className={`${style.label}`} htmlFor="diplomaSession">
                                                Diploma Session
                                            </label>
                                            <TbAsterisk className='w-2 h-2 text-lms-error'/>
                                        </div>

                                        <Field
                                            type="text"
                                            name="diplomaSession"
                                            placeholder="2023-2024"
                                            id="diplomaSession"
                                            className={`${style.input}`}
                                        />
                                        <ErrorMessage
                                            name="diplomaSession"
                                            component="div"
                                            className={`${style.error}`}
                                        />
                                    </div>

                                    <div className={style.inputContainer}>
                                        <div className="flex">
                                            <label className={style.label} htmlFor="bacIiGrade">
                                                Grade
                                            </label>
                                            <TbAsterisk className='w-2 h-2 text-lms-error'/>
                                        </div>

                                        <div className="relative w-full">
                                            <Field
                                                as="select"
                                                name="bacIiGrade"
                                                id="bacIiGrade"
                                                className={`${style.input} appearance-none`}
                                            >
                                                <option value="" disabled hidden>
                                                    Grade
                                                </option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                                <option value="D">D</option>
                                                <option value="E">E</option>
                                                <option value="O">Other</option>
                                            </Field>
                                            <ErrorMessage
                                                name="bacIiGrade"
                                                component="div"
                                                className={`${style.error}`}
                                            />
                                            <div
                                                className="absolute inset-y-0 right-0 flex top-2 pr-2 pointer-events-none">
                                                <IoIosArrowDown
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* High Certificate */}
                                    <div className="inputContainer grid row-span-3">
                                        <div className="flex">
                                            <label className="label" htmlFor="highSchoolCertificate">
                                                High Certificate
                                            </label>
                                            <TbAsterisk className='w-2 h-2 text-lms-error'/>
                                        </div>
                                        <Field
                                            type="file"
                                            name="highSchoolCertificate"
                                            id="highSchoolCertificate"
                                            component={CustomInputFile}
                                            previewField="highSchoolCertificatePreview"
                                            setFieldValue={setFieldValue}
                                        />
                                        <ErrorMessage name="highSchoolCertificate" component="div" className="error"/>
                                    </div>

                                    {/* Vocation Training III Certificate */}
                                    <div className="inputContainer grid row-span-3">
                                        <label className="label" htmlFor="vocationTrainingIiiCertificate">
                                            Vocation Training III Certificate
                                        </label>
                                        <Field
                                            type="file"
                                            name="vocationTrainingIiiCertificate"
                                            id="vocationTrainingIiiCertificate"
                                            component={CustomInputFile}
                                            previewField="vocationTrainingIiiCertificatePreview"
                                            setFieldValue={setFieldValue}
                                        />
                                        <ErrorMessage name="vocationTrainingIiiCertificate" component="div"
                                                      className="error"/>
                                    </div>

                                    {/* Any Valuable Certificate */}
                                    <div className="inputContainer grid row-span-3">
                                        <label className="label" htmlFor="anyValuableCertificate">
                                            Any Valuable Certificate
                                        </label>
                                        <Field
                                            type="file"
                                            name="anyValuableCertificate"
                                            id="anyValuableCertificate"
                                            component={CustomInputFile}
                                            previewField="anyValuableCertificatePreview"
                                            setFieldValue={setFieldValue}
                                        />
                                        <ErrorMessage name="anyValuableCertificate" component="div" className="error"/>
                                    </div>


                                </section>
                                <div className="flex">
                                        <div
                                            className={'text-red-600'}>Note</div>
                                <TbAsterisk className='w-2 h-2 text-lms-error'/>: Please provide your High School
                                    Certificate. It is required.
                                </div>
                                <section className="absolute bottom-0 right-0 mt-5">
                                    <Button
                                        type="button"
                                        className="text-white bg-lms-primary rounded-[10px] hover:bg-lms-primary"
                                        onClick={() => handleNext(activeTab)}
                                    >
                                        Next
                                    </Button>
                                </section>
                            </TabsContent>


                            {/* School Information */}
                            <TabsContent
                                value="school_info"
                                className={`relative pb-10 flex justify-center h-full items-center flex-col gap-9 mx-10 my-0`}>

                                <div className="border-b-2 w-full py-6">
                                    <h1 className="text-2xl font-bold text-lms-black-90 ">Institute Information</h1>
                                </div>

                                {/* Add your form fields for school information here */}
                                <div
                                    className="w-full md:px-20 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-9 justify-center items-center">

                                    {/* Shift */}
                                    <div className={style.inputContainer}>
                                        <div className="flex">
                                            <label className={style.label} htmlFor="shiftAlias">
                                                Shift
                                            </label>
                                            <TbAsterisk className='w-2 h-2 text-lms-error'/>
                                        </div>

                                        <div className="relative w-full">
                                            <Field as="select" name="shiftAlias" id="shiftAlias"
                                                   className={`${style.input} appearance-none`}>
                                                <option value="" label="Select Shift"/>
                                                {Array.isArray(shifts) && shifts.map(shift => (
                                                    <option key={shift.alias} value={shift.alias} label={shift.alias}/>
                                                ))}
                                            </Field>
                                            <ErrorMessage
                                                name="shiftAlias"
                                                component="div"
                                                className={`${style.error}`}
                                            />
                                            <div
                                                className="absolute inset-y-0 right-0 flex top-2 pr-2 pointer-events-none">
                                                <IoIosArrowDown
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Degree */}
                                    <div className={style.inputContainer}>
                                        <div className="flex">
                                            <label className={style.label} htmlFor="degreeAlias">
                                                Degree
                                            </label>
                                            <TbAsterisk className='w-2 h-2 text-lms-error'/>
                                        </div>

                                        <div className="relative w-full">
                                            <Field as="select" name="degreeAlias" id="degreeAlias"
                                                   className={`${style.input} appearance-none`}>
                                                <option value="" label="Select Degree"/>
                                                {Array.isArray(degrees) && degrees.map(degree => (
                                                    <option key={degree.alias} value={degree.alias}
                                                            label={degree.alias}/>
                                                ))}
                                            </Field>
                                            <ErrorMessage
                                                name="degreeAlias"
                                                component="div"
                                                className={`${style.error}`}
                                            />
                                            <div
                                                className="absolute inset-y-0 right-0 flex top-2 pr-2 pointer-events-none">
                                                <IoIosArrowDown
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Study Program */}
                                    <div className={style.inputContainer}>
                                        <div className="flex">
                                            <label className={style.label} htmlFor="studyProgramAlias">
                                                Study Program
                                            </label>
                                            <TbAsterisk className='w-2 h-2 text-lms-error'/>
                                        </div>

                                        <div className="relative w-full">
                                            <Field as="select" name="studyProgramAlias" id="studyProgramAlias"
                                                   className={`${style.input} appearance-none`}>
                                                <option value="" label="Select Study Program"/>
                                                {Array.isArray(studyPrograms) && studyPrograms.map(studyProgram => (
                                                    <option key={studyProgram.alias} value={studyProgram.alias}
                                                            label={studyProgram.alias}/>
                                                ))}
                                            </Field>
                                            <ErrorMessage
                                                name="studyProgramAlias"
                                                component="div"
                                                className={`${style.error}`}
                                            />
                                            <div
                                                className="absolute inset-y-0 right-0 flex top-2 pr-2 pointer-events-none">
                                                <IoIosArrowDown
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                        </div>

                                    </div>

                                    {/* biography */}
                                    <div className={`${style.inputContainer}`}>
                                        <div className="flex">
                                            <label className={`${style.label}`} htmlFor="biography">
                                                Biography
                                            </label>
                                            <TbAsterisk className='w-2 h-2 text-lms-error'/>
                                        </div>

                                        <Field
                                            as="textarea"
                                            name="biography"
                                            placeholder="Tell us about yourself..."
                                            id="biography"
                                            className={`${style.input}`}
                                        />
                                        <ErrorMessage
                                            name="biography"
                                            component="div"
                                            className={`${style.error}`}
                                        />
                                    </div>

                                </div>

                                <div className="absolute bottom-0 right-0 mt-5">
                                    <Button type="submit"
                                            onClick={submitForm}
                                            className="text-white bg-lms-primary rounded-[10px] hover:bg-lms-primary"
                                            disabled={isLoading}
                                    >
                                        {isLoading ? 'Loading...' : 'Register'}
                                    </Button>
                                </div>
                            </TabsContent>


                        </Tabs>


                    </Form>


                )}


            </Formik>


        </section>
        </>

    );
}