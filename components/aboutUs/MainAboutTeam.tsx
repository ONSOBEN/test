"use client";
import React, { useEffect, useState } from 'react';
import MentorComponent from "@/components/aboutUs/MentorComponent";
import LmsTeamComponent from "@/components/aboutUs/LmsTeamComponent";
import DescriptionSkeleton from "@/components/aboutUs/DescriptionSkeleton";
import Lottie from "lottie-react";
import AboutUs1 from "@/components/imageJson/AboutUs1.json";
import AboutUs2 from "@/components/imageJson/AboutUs2.json";
import TeamSkeletonLoader from "@/components/aboutUs/TeamSkeletonLoader";
import MissionAndVision from "@/components/aboutUs/MissionAndVision";
import AOS from "aos";

const MainAboutTeam = () => {

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

    return (
        <section>
            {loading ? <TeamSkeletonLoader /> : (
                <div>
                    <MentorComponent />
                    <LmsTeamComponent />
                </div>
            )}

            {loading ? <DescriptionSkeleton /> : (
                <div className="container mt-12">
                    <h5
                        data-aos="fade-up-right"
                        className="text-lg sm:text-xl font-semibold text-primary ml-6">PURPOSES OF ISTAD LMS</h5>
                    <div
                        data-aos="fade-right"
                        className="border-l-8 border-error">
                        <h1
                            data-aos="fade-up"
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary ml-4">
                            iSTAD LMS<br />
                            LEARNING MANAGEMENT SYSTEM
                        </h1>
                    </div>

                    {/* Description 1 Start Here */}
                    <div className="flex items-center flex-wrap justify-center">
                        <div
                            data-aos="fade-up-right"
                            className="border-l-8 border-error w-full md:w-1/2 p-4 md:p-8"
                        >
                            <div data-aos="fade-right" className="sm:ml-12 md:ml-8">
                                <h1
                                    data-aos="fade-up-left"
                                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight sm:leading-tight md:leading-snug lg:leading-snug text-start text-primary"
                                >
                                    iSTAD LMS
                                </h1>
                                <p
                                    className=" text-base sm:text-lg md:text-xl lg:text-xl mt-4 md:mt-6 lg:mt-8 text-start text-gray-800 tracking-wide"
                                    data-aos="fade-right">
                                    Empowering Cambodia is IT Leaders
                                </p>
                                <p
                                    data-aos="fade-right"
                                    className=" text-base sm:text-lg md:text-xl lg:text-xl mt-4 md:mt-6 lg:mt-8 text-start text-gray-800 tracking-wide"
                                >
                                    Our Integrated School Management System is designed to streamline academic processes, making it effortless for both students and teachers to navigate daily school activities. This comprehensive system includes features such as attendance tracking, grade management, assignment submission, and communication tools.
                                </p>
                            </div>
                        </div>

                        <div data-aos="fade-up-right"
                             className="w-full md:w-1/2 p-4 md:p-8">
                            <div
                                className="w-full h-auto max-w-md mx-auto">
                                <Lottie animationData={AboutUs1} />
                            </div>
                        </div>
                    </div>
                    {/* Description 1 End Here */}

                    {/* Description 2 Start Here */}
                    <div className="flex flex-wrap justify-center items-center">

                        <div   data-aos="zoom-in-up"
                               data-aos-duration="2000"
                               className="w-full md:w-1/2 p-4 md:p-8">
                            <div className="w-full h-auto max-w-md mx-auto">
                                <Lottie animationData={AboutUs2}     />
                            </div>
                        </div>

                        <div
                            data-aos="fade-right"
                            data-aos-duration="2000"
                            className="border-l-8 border-error w-full md:w-1/2 p-4"
                        >
                            <div className="sm:ml-12 md:ml-8">
                                <h1
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight sm:leading-tight md:leading-snug lg:leading-snug text-start text-primary"
                                >
                                    iSTAD LMS
                                </h1>
                                <p
                                    data-aos="fade-down-left"
                                    data-aos-duration="1500"
                                    className=" text-base sm:text-lg md:text-xl lg:text-xl mt-4 md:mt-6 lg:mt-8 text-start text-gray-800 tracking-wide"
                                >
                                    It aims to enhance educational outcomes by providing a user-friendly interface
                                    that promotes collaboration and efficiency. Whether accessing course materials,
                                    submitting assignments, or communicating with peers and educators, our system
                                    ensures a seamless educational experience tailored to the needs of modern
                                    schools.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Description 2 End Here */}

                    <MissionAndVision />
                </div>
            )}
        </section>
    );
};

export default MainAboutTeam;
