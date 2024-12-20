"use client";
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";
import HomeBannerSkeleton from "@/components/banner/HomeBannerSkeleton";
import AOS from "aos";

const HomeBanner = () => {

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
            {loading ? <HomeBannerSkeleton /> :
                <section className="relative lg:h-[640px] md:h-96 sm:h-68 h-[500px] overflow-hidden">
                    {/* Background overlay */}
                    <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                    {/* Video instead of Image */}
                    <div className="relative w-full h-full">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute block w-full h-full object-cover"
                            aria-label="Promotional video for Institute of Science and Technology Advanced Development"
                        >
                            <source src="https://lms-api.istad.co/api/v1/medias/view/17815e84-b6d3-4ece-84f1-fed49bb2e442.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    {/* Overlay Content */}
                    <div
                        className="absolute inset-0 flex items-center justify-start text-white z-20 p-4 md:p-6 lg:p-8 ml-4 sm:ml-6 md:ml-8 lg:ml-12">
                        <div className="flex flex-col items-start space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-2">
                            <h1 data-aos="fade-up-right"
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight sm:leading-tight md:leading-snug lg:leading-snug">
                                Institute of Science and <br />
                                Technology Advanced <br />
                                Development
                            </h1>
                            <div className="grid grid-rows-2 items-center">
                                <Link href="" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="200" data-aos="fade-up">
                                    <button
                                        type="button"
                                        data-aos="fade-up-right"
                                        className="flex text-base sm:text-xl lg:text-2xl sm:font-bold items-center justify-center text-white-80 my-2 sm:my-2 sm:px-6 sm:py-3 rounded-lg"
                                    >
                                        <div className="h-2 sm:h-3 w-10 sm:w-20 bg-error bg-left mr-4"></div>
                                        <span>WATCH THE VIDEO</span>
                                        <div className="bg-white-80 shadow-md border-solid rounded-full ml-2">
                                            <FaPlayCircle className="icon w-8 h-8 text-secondary" />
                                        </div>
                                    </button>
                                </Link>
                                <Link href={"/admission"} target="_blank" data-aos="fade-up">
                                    <button
                                        type="button"
                                        className="text-sm md:text-base border border-primary sm:mx-4 p-4 py-1.5 text-white-80 sm:mt-4 hover:text-white hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg sm:px-5 sm:py-2.5 text-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                                    >
                                        <span className="button-text">Admission</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </section>
    );
};

export default HomeBanner;
