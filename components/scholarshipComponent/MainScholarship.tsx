"use client";
import React, {useEffect, useState} from 'react';
import { FaPlayCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ScholarshipSkeleton from "@/components/scholarshipComponent/ScholarshipSkeleton";
import AOS from "aos";

const MainScholarship = () => {

    useEffect(() => {
        AOS.init({

            duration: 800,
            offset: 120,
            once: true,
        });
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching
        const timer = setTimeout(() => {
        setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const [activeMenu, setActiveMenu] = useState('merit');

    return (
        <section>
            {loading ? <ScholarshipSkeleton/> : (
                <div>
                    <div className="relative lg:h-[600px] md:h-96 sm:h-68 h-[500px] overflow-hidden">
                        {/* Background overlay */}
                        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

                        {/* Video instead of Image */}
                        <div className="relative w-full h-full">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            >
                                {/* Ensure the src attribute points to the correct location of your video file */}
                                <source src="https://lms-api.istad.co/api/v1/medias/view/a208826b-61cc-4c81-8aab-505f0b727a06.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        <div
                            className="absolute inset-0 flex flex-col justify-center items-start text-white z-20 p-4 md:p-6 lg:p-8 ml-4 md:ml-24">
                            <h2 data-aos="fade-down"
                                className="text-2xl sm:text-3xlxl md:text-4xl lg:text-5xl font-bold leading-tight sm:leading-tight md:leading-snug lg:leading-snug text-start">
                                Scholarship
                            </h2>
                            <div data-aos="fade-up"
                                 className="flex text-lg sm:text-xl md:text-2xl items-center justify-center text-white-80 mt-4">
                                <div className="h-3 w-10 bg-error bg-left mr-4"></div>
                                <span className="button-text">How to apply?</span>
                                <div className="bg-white-80 shadow-md border-solid rounded-full ml-2">
                                    <FaPlayCircle className="icon w-8 h-8 text-secondary"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <section className="min-h-screen">
                        {/* Overview */}
                        <div className="rounded-sm shadow-sm p-6 lg:h-[630px] bg-primary ">
                            <h3 data-aos="fade-right"
                                className="w-full max-w-[1345px] mx-auto text-lg ms:text-xl md:text-2xl  font-bold text-secondary mt-4">
                                OVERVIEW
                            </h3>
                            <h1 data-aos="fade-right"
                                className="w-full max-w-[1345px] mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-text-5xl font-bold text-white-80">TYPE
                                OF SCHOLARSHIP</h1>
                            <table className="w-full max-w-[1345px] mx-auto tracking-wide mt-4">
                                <thead>
                                <tr className="text-lg  sm:text-lg md:text-xl lg:text-2xl border-b text-white-80">
                                    <th data-aos="fade-right" className="text-start py-2 px-4">Name</th>
                                    <th data-aos="fade-right" className="py-2 px-4 text-end">Duration</th>
                                </tr>
                                </thead>
                                <tbody className="text-base sm:text-lg md:text-xl ">

                                <tr className="text-white-80 border-b">
                                    <td data-aos="fade-right" className="py-4 px-4">Bachelors Scholarship</td>
                                    <td data-aos="fade-right" className="py-4 px-4 text-end">4 Years</td>
                                </tr>

                                <tr className="text-white-80 border-b">
                                    <td data-aos="fade-right" className="py-4 px-4">IT Expert Scholarship</td>
                                    <td data-aos="fade-right" className="py-4 px-4 text-end">9 Months</td>
                                </tr>
                                <tr className="text-white-80 border-b">
                                    <td data-aos="fade-right" className="py-4 px-4">Foundation Scholarship</td>
                                    <td data-aos="fade-right" className="py-4 px-4 text-end">4 Months</td>
                                </tr>
                                <tr className="text-white-80 border-b">
                                    <td data-aos="fade-right" className="py-4 px-4">Pre University Scholarship</td>
                                    <td data-aos="fade-right" className="py-4 px-4 text-end">2-3 Months</td>
                                </tr>
                                <tr className="text-white-80 border-b">
                                    <td data-aos="fade-right" className="py-4 px-4">Short Course Scholarship</td>
                                    <td data-aos="fade-right" className="py-4 px-4 text-end">2-3 Months</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div data-aos="fade-up" className="container bg-white rounded-sm shadow-sm p-6 mt-6">
                            <h5 data-aos="fade-right"
                                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-error">
                                APPLY FOR SCHOLARSHIPS
                            </h5>
                            <h1 data-aos="fade-right"
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-primary">SCHOLARSHIP
                                OPPORTUNITIES AT ISTAD</h1>

                            <button
                                className="md:hidden block bg-primary text-white text-sm px-4 py-2 rounded mt-4"
                                onClick={() => setActiveMenu('menu')}
                            >
                                Menu
                            </button>

                            <nav
                                className={`bg-whiteSmoke py-2 mt-4 ${activeMenu === 'menu' ? 'block' : 'hidden'} md:flex md:space-x-8 md:flex-row flex flex-col space-y-4 md:space-y-0`}
                            >

                                <button onClick={() => setActiveMenu('preUniversity')}
                                        className="text-gray-80 hover:underline px-4 py-2">
                                    Pre-University Scholarship
                                </button>
                                <button onClick={() => setActiveMenu('foundation')}
                                        className="text-gray-80 hover:underline px-4 py-2">
                                    Foundation Scholarship
                                </button>
                                <button onClick={() => setActiveMenu('itExpert')}
                                        className="text-gray-80 hover:underline px-4 py-2">
                                    IT Expert Scholarship
                                </button>
                                <button onClick={() => setActiveMenu('shortCourse')}
                                        className="text-gray-80 hover:underline px-4 py-2">
                                    Short Course Scholarship
                                </button>
                                <button onClick={() => setActiveMenu('merit')}
                                        className="text-gray-80 hover:underline px-4 py-2">
                                    Bachelors Scholarship
                                </button>

                            </nav>


                            {activeMenu === 'itExpert' && (
                                <div data-aos="fade-up"
                                     className="container bg-white rounded-sm shadow-md p-6 mt-6 tracking-wide text-black-34">

                                    <div
                                        className="relative w-full h-[680px] sm:h-[500px] md:h-[400px] lg:h-[680px] mt-4">
                                        <Image
                                            data-aos="zoom-in-right"
                                            src="https://lms-api.istad.co/api/v1/medias/view/fd2b9168-f3d5-4659-b673-29e1732e84e1.png"
                                            alt="Scholarship Banner"
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-sm aspect-square"
                                        />
                                    </div>


                                    <p className="text-lg sm:text-xl md:text-2xl text-error font-semibold mt-2">Closed</p>
                                    <h1 data-aos="fade-right" id="it-expert"
                                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">IT
                                        Expert Scholarship</h1>
                                    <p data-aos="fade-right" className="text-base sm:text-lg md:text-xl pt-8">
                                        Institute of Science and Technology Advanced Development currently provides a
                                        100% scholarship opportunity for 60 places in 2024.
                                    </p>
                                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mt-4">Foundation
                                        Courses</h4>
                                    <ul data-aos="fade-right"
                                        className="list-disc list-inside mt-2 text-base sm:text-lg md:text-xl">
                                        <li>Java Programming</li>
                                        <li>Web Design</li>
                                        <li>Database</li>
                                        <li>Spring</li>
                                        <li>Git and Deployment</li>
                                        <li>UX/UI Concept and Design</li>
                                        <li>Project Management</li>
                                    </ul>
                                    <h4 data-aos="fade-right"
                                        className="text-base sm:text-lg md:text-xl font-semibold mt-4">Advanced
                                        Courses</h4>
                                    <ul data-aos="fade-right"
                                        className="list-disc list-inside mt-2 text-base sm:text-lg md:text-xl">
                                        <li>Blockchain Development</li>
                                        <li>Cyber Security</li>
                                        <li>Data Analytics</li>
                                        <li>DevOps</li>
                                        <li>Spring Advanced</li>
                                        <li>Flutter Mobile Development</li>
                                    </ul>
                                    <Link href={"/student-admission"} target={"_blank"}>
                                        <button
                                            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  my-6">
                                            Register Now
                                        </button>
                                    </Link>
                                </div>
                            )}

                            {activeMenu === 'foundation' && (
                                <div data-aos="fade-up"
                                     className="container bg-white rounded-sm shadow-md p-6 mt-6 tracking-wide text-black-34">
                                    <div
                                        className="relative w-full h-[680px] sm:h-[500px] md:h-[400px] lg:h-[680px] mt-4">
                                        <Image
                                            data-aos="zoom-in-right"
                                            src="https://lms-api.istad.co/api/v1/medias/view/99830cc4-038e-4266-9053-7cec8bd1e452.png"
                                            alt="Scholarship Banner"
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-sm aspect-square"
                                        />
                                    </div>
                                    <p className="text-lg sm:text-xl md:text-2xl text-error font-semibold mt-2">Closed</p>
                                    <h1 data-aos="fade-right" id="foundation"
                                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">Foundation
                                        Scholarship</h1>
                                    <p data-aos="fade-right" className="text-base sm:text-lg md:text-xl pt-8">
                                        Institute of Science and Technology Advanced Development currently provides a
                                        100% scholarship opportunity for 60 places in 2024.
                                    </p>
                                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mt-4">Foundation
                                        Courses</h4>
                                    <ul data-aos="fade-right"
                                        className="list-disc list-inside mt-2 text-base sm:text-lg md:text-xl">
                                        <li>Java Programming</li>
                                        <li>Web Design</li>
                                        <li>Bootstrap & Tailwind</li>
                                        <li>ReactJS</li>
                                        <li>Database</li>
                                        <li>Spring</li>
                                        <li>Git and Deployment</li>
                                        <li>UX/UI Concept and Design</li>
                                        <li>Project Management</li>
                                    </ul>

                                    <Link href={"/student-admission"} target={"_blank"}>
                                        <button
                                            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  my-6">
                                            Register Now
                                        </button>
                                    </Link>
                                </div>
                            )}

                            {activeMenu === 'preUniversity' && (
                                <div data-aos="fade-up"
                                     className="container bg-white rounded-sm shadow-md p-6 mt-6 tracking-wide text-black-34">
                                    <div
                                        className="relative w-full h-[680px] sm:h-[500px] md:h-[400px] lg:h-[680px] mt-4">
                                        <Image
                                            data-aos="zoom-in-right"
                                            src="https://lms-api.istad.co/api/v1/medias/view/00a4aeef-a758-43c9-886f-86062324cc2b.png"
                                            alt="Scholarship Banner"
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-sm aspect-square"
                                        />
                                    </div>
                                    <p className="text-lg sm:text-xl md:text-2xl text-error font-semibold mt-2">Closed</p>
                                    <h1 data-aos="fade-right" id="pre-university"
                                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">Pre-University
                                        Scholarship</h1>

                                    <p data-aos="fade-right" className="text-base sm:text-lg md:text-xl pt-8">
                                        Institute of Science and Technology Advanced Development currently provides a
                                        100% scholarship opportunity for 60 places in 2024.
                                    </p>
                                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mt-4">Web Design</h4>
                                    <ul data-aos="fade-right"
                                        className="list-disc list-inside mt-2 text-base sm:text-lg md:text-xl">
                                        <li>Introduction</li>
                                        <li>HTML - HyperText Markup Language</li>
                                        <li>CSS - Cascading Style Sheets</li>
                                        <li>Bootstrap & Tailwind</li>
                                        <li>Git and Deployment</li>
                                        <li>UX/UI Concept and Design</li>
                                        <li>JavaScript</li>
                                    </ul>
                                    <h4 data-aos="fade-right"
                                        className="text-base sm:text-lg md:text-xl font-semibold mt-4">C++
                                        Programming</h4>
                                    <ul data-aos="fade-right"
                                        className="list-disc list-inside mt-2 text-base sm:text-lg md:text-xl">
                                        <li>Introduction</li>
                                        <li>Basic Syntax</li>
                                        <li>Control Flow Statement</li>
                                        <li>Array in C++</li>
                                        <li>Object-Oriented Programming</li>
                                        <li>Database</li>
                                    </ul>
                                    <Link href={"/student-admission"} target={"_blank"}>
                                        <button
                                            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  my-6">
                                            Register Now
                                        </button>
                                    </Link>
                                </div>
                            )}

                            {activeMenu === 'shortCourse' && (
                                <div data-aos="fade-up"
                                     className="container bg-white rounded-sm shadow-md p-6 mt-6 tracking-wide text-black-34">
                                    <div
                                        className="relative w-full h-[680px] sm:h-[500px] md:h-[400px] lg:h-[680px] mt-4">
                                        <Image
                                            data-aos="zoom-in-right"
                                            src="https://lms-api.istad.co/api/v1/medias/view/b2ba3b86-5b23-4277-82bb-077f6c5cfaf1.png"
                                            alt="Scholarship Banner"
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-sm aspect-square"
                                        />
                                    </div>

                                    <p className="text-lg sm:text-xl md:text-2xl text-error font-semibold mt-2">Closed</p>
                                    <h1 data-aos="fade-right" id="short-course"
                                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">Short
                                        Course Scholarship</h1>
                                    <p data-aos="fade-right" className="text-base sm:text-lg md:text-xl pt-8">
                                        Institute of Science and Technology Advanced Development currently provides a
                                        100% scholarship opportunity for 60 places in 2024.
                                    </p>
                                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mt-4">
                                        Courses</h4>
                                    <ul data-aos="fade-right"
                                        className="list-disc list-inside mt-2 text-base sm:text-lg md:text-xl">
                                        <li>Flutter Mobile Development</li>
                                        <li>iOS Development</li>
                                        <li>SQL & Data Modeling with PostgreSQL</li>
                                        <li>Web Design</li>
                                        <li>DevOps Engineering</li>
                                        <li>C++ Programming</li>
                                        <li>Docker</li>
                                        <li>Data Analytics</li>
                                        <li>Android Development</li>
                                        <li>NEXT.js</li>
                                        <li>Linux Administrator</li>
                                        <li>Spring Framework</li>
                                        <li>Blockchain Development</li>
                                        <li>Java Programming</li>
                                    </ul>

                                    <Link href={"/student-admission"} target={"_blank"}>
                                        <button
                                            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  my-6">
                                            Register Now
                                        </button>
                                    </Link>
                                </div>
                            )}
                            {activeMenu === 'merit' && (
                                <div data-aos="fade-up"
                                     className="container bg-white rounded-sm shadow-md p-6 mt-6 tracking-wide text-black-34">

                                    <div
                                        className="relative w-full h-[680px] sm:h-[500px] md:h-[400px] lg:h-[680px] mt-4">
                                        <Image
                                            data-aos="zoom-in-right"
                                            src="https://lms-api.istad.co/api/v1/medias/view/68a0ad77-18ff-4b05-a217-2fb9958a8767.png"
                                            alt="Scholarship Banner"
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-sm aspect-square"
                                        />
                                    </div>

                                    <p className="text-lg sm:text-xl md:text-2xl text-error font-semibold mt-2">Closed</p>
                                    <h1 data-aos="fade-right"
                                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">Merit
                                        Scholarship</h1>
                                    {/* Merit Scholarship Content */}
                                    <Link href={"/student-admission"} target={"_blank"}>
                                        <button
                                            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  my-6">
                                            Register Now
                                        </button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            )}
        </section>

    );
};

export default MainScholarship;
