"use client";
import React, {useEffect, useState} from 'react';
import {FaPlayCircle} from "react-icons/fa";
import AOS from "aos";
import ScholarshipSkeleton from "@/components/acedemicSkeleton/ScholarshipSkeleton";
import Link from "next/link";
import {
    useGetStudyProgramsDetailQuery,
    useGetSubjectsOfStudyProgramsQuery
} from "@/redux/features/student-admission/study-program/studyProgram";
import HomeBanner3 from "@/components/banner/HomeBanner3";


type PropsParams = {
    params: {
        alias: string;
    };
};

type StudyProgramDetail = {
    studyProgram: {
        alias: string,
        studyProgramName: string,
        description: string,
        logo: string
    };
    topics: [
        {
            uuid: string,
            title: string,
            descriptions: string[];
        }
    ]
}

type StudySubjectsOfProgram = {
    alias: string,
    title: string,
    credit: string,

    yearOfStudy:
        {
            uuid: string,
            year: number,
            semester: number
        }
}


const Page = (props: PropsParams) => {
    const [studyProgram, setStudyProgram] = useState<StudyProgramDetail>({
        studyProgram: {
            alias: '',
            studyProgramName: '',
            description: '',
            logo: ''
        },
        topics: [{
            uuid: '',
            title: '',
            descriptions: []
        }]
    });

    const [studySubjects, setStudySubjects] = useState<StudySubjectsOfProgram[]>([]);
    const alias = props.params.alias;

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 120,
            once: true,
        });
    }, []);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching
        const timer = setTimeout(() => {
        setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const studyProgramDetail = useGetStudyProgramsDetailQuery(alias);
    useEffect(() => {
        if (studyProgramDetail) {
            setStudyProgram(studyProgramDetail.currentData);
        }
    }, [studyProgramDetail]);

    const studySubjectsOfProgram = useGetSubjectsOfStudyProgramsQuery(alias);

    useEffect(() => {
        if (studySubjectsOfProgram) {
            setStudySubjects(studySubjectsOfProgram.currentData);
        }
    }, [studySubjectsOfProgram]);

    const filterDataByYearAndSemester = (year: number, semester: number) => {
        return studySubjects?.filter((item: any) => item.yearOfStudy?.year === year && item.yearOfStudy?.semester === semester);
    };

    const orderedTitles = ["PROGRAM OVERVIEW", "LEARNING OUTCOME", "CAREER", "CAREER VIDEO"];

    const orderedTopics = [...(studyProgram?.topics || [])]?.sort((a, b) => {
        return orderedTitles?.indexOf(a?.title) - orderedTitles?.indexOf(b?.title);
    });

    return (
        <section>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            {loading ? <ScholarshipSkeleton/> : (
                <section>

                    {/* banner program detail start here */}
                    <div>
                    {/*<div className="relative lg:h-[580px] md:h-96 sm:h-68 h-[500px] overflow-hidden ">*/}
                        <HomeBanner3/>
                        {/* Background overlay */}
                        {/*<div className="absolute inset-0 bg-black opacity-50 z-10"></div>*/}

                        {/*/!* Video instead of Image *!/*/}
                        {/*<div className="relative w-full h-full">*/}
                        {/*    <video*/}
                        {/*        autoPlay*/}
                        {/*        loop*/}
                        {/*        muted*/}
                        {/*        playsInline*/}
                        {/*        className="absolute inset-0 w-full h-full object-cover"*/}
                        {/*    >*/}
                        {/*        /!* Ensure the src attribute points to the correct location of your video file *!/*/}
                        {/*        <source src="https://lms-api.istad.co/api/v1/medias/view/96901e8a-63fb-4765-b7f8-64ced29ed3b9.mp4" type="video/mp4"/>*/}
                        {/*        Your browser does not support the video tag.*/}
                        {/*    </video>*/}
                        {/*</div>*/}

                        {/*<div*/}
                        {/*    className="absolute inset-0 flex flex-col justify-center items-start text-white z-20 p-4 md:p-6 lg:p-8 sm:ml-8 md:ml-16 lg:ml-24 ">*/}
                        {/*    <h1 data-aos-duration="800" data-aos-delay="500" data-aos-offset="200" data-aos="fade-down"*/}
                        {/*        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight sm:leading-tight md:leading-snug lg:leading-snug text-start">*/}
                        {/*        {studyProgram?.studyProgram?.studyProgramName}*/}
                        {/*    </h1>*/}
                        {/*    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-start">*/}
                        {/*        {studyProgram?.studyProgram?.description}*/}
                        {/*    </h2>*/}
                        {/*    <div data-aos-duration="1000" data-aos-delay="500" data-aos-offset="200" data-aos="fade-up"*/}
                        {/*         className="flex text-[14px] sm:text-[16px] md:text-[18px] items-center justify-center text-white-80 mt-4">*/}
                        {/*        <div className="h-3 w-10 bg-error bg-left mr-4"></div>*/}
                        {/*        <span className="button-text">PROGRAM INTRO</span>*/}
                        {/*        <div className="bg-white-80 shadow-md border-solid rounded-full ml-2">*/}
                        {/*            <FaPlayCircle className="icon w-8 h-8 text-secondary"/>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    {/* banner program detail end here */}


                    {/* description 1 start here */}
                    <section>
                        <nav className="container flex my-5" aria-label="Breadcrumb">
                            <ol className="pb-4 inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                <li className="inline-flex items-center">
                                    <Link href={"/academics"}
                                          className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                        <svg className="w-3 h-3 me-2.5" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                        </svg>
                                        Academics
                                    </Link>
                                </li>
                                <li aria-current="page">
                                    <div className="flex items-center">
                                        <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="2" d="m1 9 4-4-4-4"/>
                                        </svg>
                                        <span
                                            className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400 line-clamp-1">{studyProgram?.studyProgram?.studyProgramName}</span>
                                    </div>
                                </li>
                            </ol>
                        </nav>



                        {/*Render with order*/}
                        {orderedTopics.map((topic) => (
                            <section className="my-10" key={topic.uuid}>
                                {/* description 1 */}
                                {topic?.title === "PROGRAM OVERVIEW" && (
                                    <div className="container tracking-wide ">
                                        <div>
                                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-primary mb-4 sm:mb-6">{topic?.title}</h1>
                                            <p className="text-base sm:text-lg ms:text-xl text-black-34 ">
                                                {topic?.descriptions}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {topic?.title === "LEARNING OUTCOME" && (
                                    <div className="tracking-wide bg-primary py-12 sm:py-8">
                                        <div className="container">
                                            <h5 className="text-xl sm:text-2xl md:text-3xl font-semibold text-start text-secondary">
                                                EXPECTATION
                                            </h5>
                                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white-80 mb-8 sm:mb-6">
                                                {topic?.title}
                                            </h1>
                                            <div className="text-base sm:text-lg md:text-xl text-white-80 space-y-2">
                                                {Array.isArray(topic?.descriptions) && topic?.descriptions.length > 1 ? (
                                                    topic?.descriptions.map((description, idx) => (
                                                        <li key={idx} className="break-words">
                                                            {description}
                                                        </li>
                                                    ))
                                                ) : (
                                                    <p>{topic?.descriptions}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div
                                    className="container grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
                                    {topic?.title === "CAREER" && (
                                        <div className="col-span-1">
                                            <div className="w-full p-4">
                                                <h5 className="text-xl sm:text-2xl md:text-3xl font-semibold text-start text-error">FUTURE</h5>
                                                <h1 className="text-start text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-primary mb-8">
                                                    {topic?.title}
                                                </h1>
                                                <div
                                                    className="text-base sm:text-lg md:text-xl text-black-34 space-y-2">
                                                    {Array.isArray(topic?.descriptions) && topic?.descriptions.length > 1 ? (
                                                        topic?.descriptions.map((description, idx) => (
                                                            <li key={idx} className="break-words">
                                                                {description}
                                                            </li>
                                                        ))
                                                    ) : (
                                                        <p>{topic?.descriptions}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {topic?.title === "CAREER VIDEO" && (
                                        <div className="col-span-1">
                                            <div
                                                className="w-full flex justify-center items-center flex-col rounded-md p-4">
                                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-start tracking-wide text-primary">
                                                    {topic?.title}
                                                </h1>
                                                <div
                                                    className="h-full mt-5 flex justify-center items-center rounded-md">
                                                    <iframe
                                                        className="w-full h-[180px] sm:h-[250px] md:w-[560px] md:h-[315px]"
                                                        src="https://www.youtube.com/embed/V8WZ1TVTsAA?si=Id2krJljLCPsAWfE"
                                                        title="YouTube video player"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        referrerPolicy="strict-origin-when-cross-origin"
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </section>
                        ))}

                    </section>


                    {/* evaluation 1 start here */}
                    <section className="rounded-sm shadow-sm mb-10  p-6 bg-primary">
                        <div className="mx-auto max-w-5xl">
                            <h5 className="text-xl sm:text-2xl md:text-3xl font-semibold text-secondary mt-4 text-center md:text-left">
                                ASSESSMENT
                            </h5>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide mb-8 text-white-80 text-center md:text-left">
                                EVALUATION & GRADUATION
                            </h1>
                            <table className="w-full tracking-wide mt-4">

                                <thead className=" text-sm sm:text-base md:text-lg ">

                                <tr className="border-b text-white-80">

                                    <th className="text-start py-2">
                                        SCORE
                                    </th>
                                    <th className="py-2 px-4 text-center">
                                        GPA
                                    </th>
                                    <th className="py-2 text-end">
                                        GRADE
                                    </th>

                                </tr>

                                </thead>

                                <tbody className=" text-sm sm:text-base md:text-lg ">

                                <tr className="text-white-80 border-b">
                                    <td className="py-4">
                                        85-100
                                    </td>
                                    <td className="py-4 text-center">
                                        4.0
                                    </td>
                                    <td className="py-4 text-end">
                                        A
                                    </td>
                                </tr>
                                <tr className="text-white-80 border-b">
                                    <td className="py-4">
                                        80-84
                                    </td>
                                    <td className="py-4 text-center">
                                        3.5
                                    </td>
                                    <td className="py-4 text-end">
                                        B+
                                    </td>
                                </tr>
                                <tr className="text-white-80 border-b">
                                    <td className="py-4">
                                        70-79
                                    </td>
                                    <td className="py-4 text-center">
                                        3.0
                                    </td>
                                    <td className="py-4 text-end">
                                        B
                                    </td>
                                </tr>
                                <tr className="text-white-80 border-b">
                                    <td className="py-4">
                                        65-69
                                    </td>
                                    <td className="py-4 text-center">
                                        2.5
                                    </td>
                                    <td className="py-4 text-end">
                                        C+
                                    </td>
                                </tr>
                                <tr className="text-white-80 border-b">
                                    <td className="py-4">
                                        50-54
                                    </td>
                                    <td className="py-4 text-center">
                                        2.0
                                    </td>
                                    <td className="py-4 text-end">
                                        C
                                    </td>
                                </tr>
                                <tr className="text-white-80 border-b">
                                    <td className="py-4">
                                        45-49
                                    </td>
                                    <td className="py-4 text-center">
                                        1.5
                                    </td>
                                    <td className="py-4 text-end">
                                        D
                                    </td>
                                </tr>
                                <tr className="text-white-80 border-b">
                                    <td className="py-4">
                                        0-44
                                    </td>
                                    <td className="py-4 text-center">
                                        0
                                    </td>
                                    <td className="py-4 text-end">
                                        F
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                    {/* evaluation 1 end here */}

                    {/*CURRICULUM start here*/}
                    {[1, 2, 3, 4].some(year => {
                        const subjectsSem1 = filterDataByYearAndSemester(year, 1) || [];
                        const subjectsSem2 = filterDataByYearAndSemester(year, 2) || [];
                        return [...subjectsSem1, ...subjectsSem2].length > 0;
                    }) && (
                        <section className="rounded-sm shadow-sm bg-white-80 pt-8 mb-12 ">
                            <h5 className="w-full max-w-[1245px] mx-auto text-xl sm:text-2xl md:text-3xl font-semibold text-error mt-4 px-4">
                                PROGRAM STRUCTURE
                            </h5>
                            <h1 className="w-full max-w-[1245px] mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide mb-8 text-primary px-4">
                                CURRICULUM
                            </h1>
                            {[1, 2, 3, 4].map(year => {
                                const subjectsSem1 = filterDataByYearAndSemester(year, 1);
                                const subjectsSem2 = filterDataByYearAndSemester(year, 2);
                                const yearSubjects = [...subjectsSem1, ...subjectsSem2];
                                if (yearSubjects.length > 0) {
                                    return (
                                        <React.Fragment key={year}>
                                            <h5 className="w-full max-w-[1245px] mx-auto pl-4 text-base md:text-lg font-semibold text-white-80 bg-primary py-2 mt-4 px-4">
                                                {`YEAR ${year}`}
                                            </h5>
                                            <div
                                                className="container w-full max-w-[1245px] grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto mt-4 px-4">
                                                {[1, 2].map(semester => {
                                                    const subjects = filterDataByYearAndSemester(year, semester);
                                                    return subjects?.length > 0 && (
                                                        <table key={semester} className="w-full tracking-wide">
                                                            <thead>
                                                            <tr className="text-sm md:text-base text-primary py-4">
                                                                <th className="text-start text-error py-2">{`SEMESTER ${semester}`}</th>
                                                            </tr>
                                                            </thead>
                                                            <thead>
                                                            <tr className="text-sm md:text-base border-b text-primary">
                                                                <th className="text-start py-2">Subjects</th>
                                                                <th className="py-2 px-4 text-end">Credit</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody className="text-sm md:text-lg">
                                                            {subjects.map((subject, index) => (
                                                                <tr key={index} className="text-black-34 border-b">
                                                                    <td className="py-4">{subject.title}</td>
                                                                    <td className="py-4 text-end">{subject.credit}</td>
                                                                </tr>
                                                            ))}
                                                            </tbody>
                                                        </table>
                                                    );
                                                })}
                                            </div>

                                        </React.Fragment>
                                    );
                                }
                            })}
                        </section>
                    )}
                    {/*CURRICULUM end here*/}


                </section>
            )}
        </section>

    );
}

export default Page;
