"use client";
import React, {useEffect, useState} from 'react';
import {FaPlayCircle} from "react-icons/fa";
import Link from "next/link";
import AdmissionSkeleton from "@/components/admission/AdmissionSkeleton";
import Lottie from "lottie-react";
import Admission1 from "@/components/imageJson/Admission1.json";
import Admission2 from "@/components/imageJson/Admission2.json";
import {BsPersonSquare} from "react-icons/bs";
import {PiCertificateFill} from "react-icons/pi";
import {FaSchoolCircleExclamation} from "react-icons/fa6";
import Admission3 from "@/components/imageJson/Admission3.json";
import CardComponent from "@/components/admission/CardComponent";
import AOS from "aos";

const MainAdmission = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 120,
            once: true,
        });
    }, []);

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Simulate data fetching
        // const timer = setTimeout(() => {
        setLoading(false);
        // }, 2000);

        // return () => clearTimeout(timer);
    }, []);
    return (
        <section>
            {loading ? <AdmissionSkeleton/> : (
                <section>

                    {/* banner start here */}
                    <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[100vh] overflow-hidden rounded-sm">
                        {/* Background overlay */}
                        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

                        {/* Video instead of Image */}
                        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[100vh]">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            >
                                {/* Ensure the src attribute points to the correct location of your video file */}
                                <source src="https://lms-api.istad.co/api/v1/medias/view/9e271f2a-00b4-498a-abd5-f6efc2e989d9.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        <div
                            className="absolute inset-0 flex flex-col justify-center items-center lg:items-start md:items-start sm:items-center text-white z-20 p-4 md:p-6 lg:p-8 ml-4 sm:ml-8 md:ml-12 lg:ml-16 ">
                            <h2
                                data-aos="zoom-in-right"
                                className=" text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight sm:leading-tight md:leading-snug lg:leading-snug text-start mb-3">
                                Admission
                            </h2>
                            <div
                                className="h-1 w-24 sm:h-2 sm:w-32 md:h-2 md:w-40 bg-error bg-left mr-2 sm:mr-4"
                            ></div>
                            <div
                                data-aos="zoom-in"
                                className="flex flex-wrap items-center justify-center text-white-80 lg:mt-6 md:mt-3 sm:mt-2 "
                            >

                                <div className="text-lg sm:text-xl font-semibold text-center ">
                                    How to apply for admission at ISTAD?
                                  </div>
                                <div className="shadow-md border-solid rounded-full ml-2 mt-2 sm:mt-0 pb-2">
                                    <FaPlayCircle
                                        className="icon w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white-80 text-secondary"/>
                                </div>
                            </div>

                            <Link

                                href={"/student-admission"}
                                target={"_blank"}>
                                <button
                                    type="button"
                                    data-aos="fade-up"
                                    className=" mt-2 p-4 sm:mt-6 text-white-80 hover:text-white border border-white hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-white rounded-lg text-xs md:text-base sm:px-5 py-1.5 sm:py-2.5 text-center me-2 dark:border-white-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-white-500 dark:focus:ring-white "
                                >
                                    <span>Register Now</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* banner end here */}


                    <div className="container mx-auto text-black-34 space-y-20 pb-6 px-4 sm:px-6 lg:px-8">
                        {/* Header of admission start here */}
                        <div>
                            <h5
                                data-aos="fade-up"
                                className="text-lg sm:text-2xl md:text-2xl lg:text-2xl font-semibold text-start text-error mt-20">
                            New Academic Year’s Information
                            </h5>
                            <h1
                                data-aos="fade-right"
                                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-primary mb-3">
                                Subject Information for the <br /> New Academic Year
                            </h1>

                            <CardComponent />
                        </div>
                        {/* Card from API component end here */}

                        {/* Text 1 start here */}
                        <div>
                            <h1
                                data-aos="fade-up"
                                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-start">
                                Admissions Criteria And Processes
                            </h1>
                            <p
                                data-aos="fade-right"
                                className="mb-4 text-start text-base sm:text-xl md:text-2xl tracking-wide py-4 text-black-34">
                                Welcome to our Admissions page! Here, you will find all the necessary information to guide you
                                through the application process for our undergraduate and graduate programs. Our goal is to make your
                                application experience as straightforward and transparent as possible. Please review the criteria
                                and steps below to ensure you meet all requirements and submit a complete application.
                            </p>
                        </div>
                        {/* Text 1 end here */}

                        {/* Banner 1 start here */}
                        <div
                            className="bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg flex flex-col md:flex-row items-center text-white p-0 sm:p-6 md:p-12 mt-8 overflow-hidden">
                            <div

                                className="text-center sm:text-start flex-grow md:pl-16">
                                <h1 data-aos="fade-up"
                                    className="text-2xl md:text-3xl font-semibold">Admission Process</h1>
                                <Link href={"/student-admission"} target={"_blank"}>
                                    <button
                                        data-aos="fade-down-right"
                                        className="mt-2 p-4 sm:mt-6 text-white-80 hover:text-white border border-white hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-xs md:text-base sm:px-5 py-1.5 sm:py-2.5 text-center me-2 dark:border-white-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-white-500 dark:focus:ring-white">
                                        Register Now
                                    </button>
                                </Link>
                            </div>
                            <Lottie
                                data-aos="fade-up-right"
                                className="w-auto h-auto sm:w-[350px] sm:h-[350px]"
                                animationData={Admission1}/>
                        </div>
                        {/* Banner 1 end here */}

                        {/* Admission process start here */}
                        <div className="flex flex-col md:flex-row items-center flex-wrap bg-opacity-80 p-0 sm:p-6 overflow-hidden">
                            <div

                                className="w-full md:w-1/2 p-4 flex justify-center">
                                <Lottie
                                    data-aos="flip-left"
                                    className="w-full max-w-[400px] h-auto sm:h-[400px] md:h-[500px] pb-6"
                                    animationData={Admission2}/>
                            </div>

                            <div
                                data-aos="flip-left"
                                className="w-full md:w-1/2 text-start">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-error font-bold pb-3">
                                    Admission Process
                                </h1>
                                <p className="mb-4 text-start text-base sm:text-xl md:text-2xl tracking-wide py-4 text-black-34">
                                    Before starting the application to the Center of Science and Technology
                                    Advanced Development, please check out our Admissions Criteria for eligibility.
                                    Then you can get started with the online application and take the following steps:
                                </p>
                            </div>
                        </div>
                        {/* Admission process end here */}

                        {/* Step of icon start here */}
                        <div className="flex flex-row items-center justify-center flex-wrap mt-10 overflow-hidden bg-white-80">
                            <div
                                data-aos="flip-left"
                                className="flex flex-col items-center w-full md:w-1/3 p-4 text-center tracking-wide">
                                <BsPersonSquare className="text-primary w-24 h-24 md:w-32 md:h-32"/>
                                <h5 className="text-primary text-sm md:text-base font-bold mt-2">Step 1</h5>
                                <p className="font-semibold text-primary mt-2">Personal Information</p>
                            </div>
                            <div
                                data-aos="flip-left"
                                className="flex flex-col items-center w-full md:w-1/3 p-4 text-center tracking-wide">
                                <PiCertificateFill className="text-primary w-24 h-24 md:w-32 md:h-32"/>
                                <h5 className="text-primary text-sm md:text-base font-bold mt-2">Step 2</h5>
                                <p className="font-semibold text-primary mt-2">Education Information</p>
                            </div>
                            <div
                                data-aos="flip-left"
                                className="flex flex-col items-center w-full md:w-1/3 p-4 text-center tracking-wide">
                                <FaSchoolCircleExclamation className="text-primary w-24 h-24 md:w-32 md:h-32"/>
                                <h5 className="text-primary text-sm md:text-base font-bold mt-2">Step 3</h5>
                                <p className="font-semibold text-primary mt-2">School Information</p>
                            </div>
                        </div>
                        {/* Step of icon end here */}

                        {/* Admission steps start here */}
                        <div className="mt-10 shadow-sm">
                            <div
                                 className="p-0 sm:p-6 tracking-wide">
                                <h2
                                    data-aos="fade-right"
                                    className="text-xl sm:text-2xl md:text-4xl font-bold text-error">1. First Step</h2>
                                <p
                                    data-aos="fade-right"
                                    className="mt-2 text-base sm:text-xl md:text-2xl font-semibold">
                                    You complete your personal information as the field required:
                                </p>
                                <ul className="list-disc list-inside mt-2 text-base sm:text-xl md:text-2xl font-semibold">
                                    <li data-aos="fade-right">Basic information</li>
                                    <li data-aos="fade-right">Upload formal profile image</li>
                                    <li data-aos="fade-right">Upload identity card, birth certificate, or passport</li>
                                </ul>
                            </div>

                            <div  className="p-0 sm:p-6 mt-6">
                                <h2 data-aos="fade-right" className="text-xl sm:text-2xl md:text-4xl font-bold text-error">2. Second Step</h2>
                                <p data-aos="fade-right" className="mt-2 text-base sm:text-xl md:text-2xl font-semibold">
                                    You complete your education information as the field required:
                                </p>
                                <ul className="list-disc list-inside mt-2 text-base sm:text-xl md:text-2xl font-semibold">
                                    <li data-aos="fade-right">Basic information of high school</li>
                                    <li data-aos="fade-right">Upload BAC II certificate or valuable certificate for clarity</li>
                                </ul>
                            </div>

                            <div  className="p-0 sm:p-6 mt-6">
                                <h2 data-aos="fade-right" className="text-xl sm:text-2xl md:text-4xl font-bold text-error">3. Third Step</h2>
                                <p data-aos="fade-right" className="mt-2 text-base sm:text-xl md:text-2xl font-semibold">
                                    You complete your school information as the field required:
                                </p>
                                <ul data-aos="fade-right" className="list-disc list-inside mt-2 text-base sm:text-xl md:text-2xl font-semibold">
                                    <li data-aos="fade-right">Complete form with specific shift, degree, and study program</li>
                                </ul>
                            </div>
                        </div>
                        {/* Admission steps end here */}

                        {/* Application is complete start here */}
                        <div className="rounded-sm p-0 sm:p-6 mt-10 text-base sm:text-xl md:text-2xl tracking-wide mb-8 font-semibold">
                            <h2 data-aos="fade-right" className="text-base sm:text-xl md:text-3xl font-bold">
                                Once your application is complete, you will receive an admission offer via email. Take the following steps to ensure a successful CSTAD experience:
                            </h2>
                            <ol className="list-decimal list-inside mt-4 font-semibold">
                                <li data-aos="fade-right" className="mt-2">Accept the Offer</li>
                                <li data-aos="fade-right" className="mt-2">Wait for course registration and tuition invoice</li>
                                <li data-aos="fade-right" className="mt-2">Pay tuition</li>
                                <li data-aos="fade-right" className="mt-2">Join orientation day and attend your first lesson as the first step to success!</li>
                            </ol>
                        </div>
                        {/* Application is complete end here */}

                        {/* Banner 2 start here */}
                        <div className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg flex flex-col md:flex-row items-center text-white p-0 sm:p-6 md:p-12 mt-8">
                            <div  className="text-center sm:text-start flex-grow md:pl-16">
                                <h1 data-aos="fade-up-right" className="text-2xl md:text-3xl font-semibold">Admission Criteria</h1>
                                <Link href={"/student-admission"} target="_blank">
                                    <button
                                        data-aos="fade-down-right"
                                        className="mt-2 p-4 sm:mt-6 text-white-80 hover:text-white border border-white hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-xs md:text-base sm:px-5 py-1.5 sm:py-2.5 text-center me-2 dark:border-white-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-white-500 dark:focus:ring-white">
                                        Register Now
                                    </button>
                                </Link>
                            </div>
                            {/* Replace with the correct path to your animated image */}
                            <Lottie
                                data-aos="fade-up-right"
                                className="h-auto w-auto sm:h-[350px] sm:w-[350px]" animationData={Admission3}/>
                        </div>
                        {/* Banner 2 end here */}


                        {/*point end start here*/}
                        <div className=" mt-10 p-0 sm:px-4  shadow-sm my-12 space-y-12">
                            <div

                                className="text-start">
                                <p
                                    data-aos="fade-right"
                                    className=" text-basse sm:text-lg md:text-xl font-semibold">
                                    Upon submitting the online application and paying for the application fee, please collect and submit the required documentation to our office.
                                </p>
                            </div>

                            <div

                                className="mt-4 space-y-9">
                                <div

                                    className="tracking-wide">
                                    <h2
                                        data-aos="fade-right"
                                        className=" text-xl sm:text-2xl md:text-text-3xl font-bold text-error">
                                        1. Profile Picture
                                    </h2>
                                    <p
                                        data-aos="fade-right"
                                        className="mt-2 tetx-base sm:text-lg md:text-xl font-semibold">
                                        You must upload a professional profile picture as formatted below:
                                    </p>
                                    <ul className=" list-disc list-inside mt-2 text-base sm:text-lg md:text-xl font-semibold">
                                        <li data-aos="fade-right">Blue background</li>
                                        <li data-aos="fade-right">Formal clothes</li>
                                    </ul>
                                </div>

                                <div

                                    className="tracking-wide">
                                    <h2 data-aos="fade-right" className=" text-xl sm:text-2xl md:text-text-3xl font-bold text-error">
                                        2. Proof of Identity
                                    </h2>
                                    <p data-aos="fade-right" className="mt-2 text-base sm:text-lg md:text-xl font-semibold">
                                        You must submit one of your identification documents as below:
                                    </p>
                                    <ul data-aos="fade-right" className="list-disc list-inside mt-2 text-base sm:text-lg md:text-xl font-semibold">
                                        <li data-aos="fade-right">Cambodia National Identity Card</li>
                                        <li data-aos="fade-right">Birth Certificate</li>
                                        <li data-aos="fade-right">Passport</li>
                                    </ul>
                                </div>

                                <div

                                    className="tracking-wide">
                                    <h2 data-aos="fade-right" className=" text-xl sm:text-2xl md:text-text-3xl font-bold text-error">
                                        3. Proof of High School Graduation
                                    </h2>
                                    <p data-aos="fade-right" className="mt-2 text-base sm:text-lg md:text-xl font-semibold">
                                        The following are our high school graduation requirements based on the type of school from which you are graduating:
                                    </p>
                                    <div className="overflow-x-auto mt-4 pt-4">
                                        <table className="min-w-full border">
                                            <thead>
                                            <tr className="text-gray-600">
                                                <th data-aos="fade-right" className="text-base md:text-xl px-2 md:px-4 py-2 md:py-4 border">
                                                    Graduation Form
                                                </th>
                                                <th data-aos="fade-right" className="text-base md:text-xl px-2 md:px-4 py-2 md:py-4 border">
                                                    Required High School Graduation Documentation
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td data-aos="fade-right" className="px-2 md:px-4 py-2 md:py-4 border text-base md:text-lg">
                                                    Public School
                                                </td>
                                                <td className="px-2 md:px-4 py-2 md:py-4 border text-base md:text-lg ">
                                                    <ul className="list-disc list-inside text-base md:text-lg">
                                                        <li data-aos="fade-right">National Diploma</li>
                                                        <li data-aos="fade-right">High School Transcript/ Grade Report</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-aos="fade-right" className="px-2 md:px-4 py-2 md:py-4 border text-base md:text-lg">
                                                    Private School (Khmer program)
                                                </td>
                                                <td className="px-2 md:px-4 py-2 md:py-4 border text-base md:text-lg">
                                                    <ul className="list-disc list-inside text-base md:text-lg">
                                                        <li data-aos="fade-right">National Diploma</li>
                                                        <li data-aos="fade-right">High School Transcript/ Grade Report</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-aos="fade-right" className="px-2 md:px-4 py-2 md:py-4 border text-base md:text-lg">
                                                    Private School (International program)
                                                </td>
                                                <td className="px-2 md:px-4 py-2 md:py-4 border text-base md:text-lg ">
                                                    <ul className="list-disc list-inside">
                                                        <li data-aos="fade-right">High School Official Certificate/ Diploma</li>
                                                        <li data-aos="fade-right">12th Grade Transcript/Grade Report OR National
                                                            Diploma
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-aos="fade-right" className="px-2 md:px-4 py-2 md:py-4 border text-base md:text-lg">
                                                    International Student/ School Outside Cambodia
                                                </td>
                                                <td className="px-2 md:px-4 py-2 md:py-4 border text-base md:text-lg ">
                                                    <ul className="list-disc list-inside text-base md:text-lg ">
                                                        <li data-aos="fade-right">Certified and Translated High School Diploma</li>
                                                        <li data-aos="fade-right">Certified and Translated High School Transcript</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-aos="fade-right" className="px-2 md:px-4 py-2 md:py-4 border text-base md:text-lg ">
                                                    College or University (Transfer)
                                                </td>
                                                <td className="px-2 md:px-4 py-2 md:py-4 border text-base md:text-lg">
                                                    <ul className="list-disc list-inside text-base md:text-lg">
                                                        <li data-aos="fade-right">High School National Diploma OR Equivalent</li>
                                                        <li data-aos="fade-right">Transcript (all courses attended)</li>
                                                        <li data-aos="fade-right">Syllabus (all courses attended)</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*point  end here*/}

                    </div>

                </section>)}
        </section>

    );
};

export default MainAdmission;