'use client';
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa";
import { IoCall, IoLocation } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { BiWorld } from "react-icons/bi";
import AOS from "aos";
import 'aos/dist/aos.css';
import { CarouselSize } from "@/components/card/CarouselCardComponent";
import BannerAboutSkeleton from "@/components/aboutUs/BannerAboutSkeleton";
import IntroduceSkeleton from "@/components/aboutUs/IntroduceSkeleton";
import PartnerContext from "@/components/aboutUs/PartnerContext";
import { IoMdSquare } from "react-icons/io";
import { IoDiamondSharp } from "react-icons/io5";
import { GiFamilyTree } from "react-icons/gi";
import NewFeatureSkeleton from "@/components/aboutUs/NewFeatureSkeleton";
import Image from "next/image";
import Carousel2 from "@/components/aboutUs/BannerIstad";



const MainAboutUs = () => {

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
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const slides = [
        {
            image: 'https://lms-api.istad.co/api/v1/medias/view/7f2ea58e-e8fc-42c5-ba21-6656a739c308.png',
            title: 'Institute of Science and Technology Advanced Development',
            description: 'Institute is a noteworthy science and technology Institute in Cambodia. CSTAD has routed Cambodian students to advanced science and technology, research, and develop digital skills and our graduates have been guaranteed excellent job opportunities with the Top IT company.',
            buttonText: 'Enroll Now',
            buttonLink: '/student-admission',
        },
        {
            image: 'https://lms-api.istad.co/api/v1/medias/view/223b15d0-e28c-4d56-bda1-c70456f8ebc2.png',
            title: 'Vision',
            description: 'Advanced IT Institute in Cambodia',
            buttonText: 'Learn More',
            buttonLink: 'https://www.facebook.com/istad.co',
        },
        {
            image: 'https://lms-api.istad.co/api/v1/medias/view/0d1c2b2b-b9b7-42fc-99e5-193e75b38e6d.png',
            title: 'Mission',
            description: 'Provide the latest methodology with high-quality training and mentoring\t' +
                '\t' +
                'Build up the capacity and career of IT experts Cambodia\n' +
                '\n' +
                'Consult and connect CSTAD trainees to top IT careers',
            buttonText: 'Get Started',
            buttonLink: '/student-admission',
        },
    ];

    return (
        <section className="overflow-hidden space-y-9 "> {
            /* Added overflow-hidden to root div */}



            {/* banner wrapper */}
            {loading ? <BannerAboutSkeleton/> : (
                <div>
                    <Carousel2 slides={slides}/>
                </div>


            )}
            {/* banner end here */}

            {/* Introduction start here */}
            {loading ? <IntroduceSkeleton/> : (
                <section className="container py-12 mx-auto " data-aos="fade-up">
                    <div
                        data-aos="fade-up-right"
                        className="text-lg sm:text-xl md:text-2xl font-bold text-error">
                        ABOUT US
                    </div>
                    <div>
                        <h1
                            data-aos="zoom-in-left"
                            className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide text-primary mb-8 sm:leading-tight md:leading-snug lg:leading-snug text-start">
                            INSTITUTION OF SCIENCE AND<br/>
                            TECHNOLOGY ADVANCED<br/>
                            DEVELOPMENT?
                        </h1>
                    </div>
                </section>)}
            {/* Introduction end here */}

            {/*add new feature start here*/}
            {loading ? <NewFeatureSkeleton/> : (
                <section className="container relative">

                    <section className="relative-container">

                        <div className="relative grid grid-cols-12 gap-4">

                            <div className="col-span-12 lg:col-span-7 relative z-10 space-y-6">

                                <div className="text-start mb-8">
                                    <h5
                                        data-aos="fade-up-left"
                                        className="text-lg sm:text-xl md:text-2xl   font-semibold text-primary ml-6">WHY SHOULD YOU CHOOSE
                                        US?</h5>
                                    <div
                                        data-aos="fade-right"
                                        className="border-l-8 border-error">
                                        <h1 className="text-2xl sm:text-3xl md:text-4xl
                                        lg:text-5xl font-bold text-blue-900 ml-4">
                                            ISTAD <br/>
                                            Institute
                                        </h1>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h1 data-aos="fade-up-left" className="flex flex-row items-center text-2xl sm:text-3xl md:text-4xl
                                    lg:text-5xl font-semibold text-black-34 mb-4">
                                        <IoMdSquare

                                            className="   w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#929abd] mr-4 rotate-45"/>WHO ARE WE?
                                    </h1>
                                    <p
                                        data-aos="fade-down-right"
                                        className="text-base sm:text-lg md:text-xl  text-black-34 tracking-wide mb-4">
                                        INSTITUTE is a noteworthy science and technology Institute in Cambodia. INSTITUTE has
                                        routed
                                        Cambodian students to advanced science and technology, research, and develop
                                        digital
                                        skills
                                        and our graduates have been guaranteed excellent job opportunities with the Top
                                        IT
                                        company.
                                        INSTITUTE will continue to provide high-quality training with the latest
                                        methodology,
                                        and
                                        roadmap as well as the best choice for those who want to be an IT expert in
                                        Cambodia.
                                    </p>
                                </div>

                                <div>
                                    <h1
                                        data-aos="fade-up-left"
                                        className="flex flex-row items-center text-2xl sm:text-3xl md:text-4xl
                                        lg:text-5xl font-semibold text-black-34 mb-8">
                                        <IoMdSquare
                                            className="text-[#515d96] w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 mr-4 rotate-45"/>VISION
                                        & MISSION
                                    </h1>
                                    <div className="mb-4 space-y-4">
                                        <h4
                                            data-aos="fade-down-right"
                                            className="flex flex-row items-center text-lg sm:text-xl md:text-2xl font-bold text-black-34">
                                            <IoDiamondSharp
                                                className="text-[#515d96] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mr-3"/>OUR
                                            VISION
                                        </h4>
                                        <p className="text-base sm:text-lg md:text-xl text-black-34 pl-10">Advanced IT Institute in
                                            Cambodia</p>
                                    </div>
                                    <div className="space-y-4">
                                        <h4
                                            data-aos="fade-down-right"
                                            className="flex flex-row items-center text-lg sm:text-xl md:text-2xl font-bold text-black-34">
                                            <GiFamilyTree
                                                className="text-[#515d96] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mr-3"/>OUR
                                            MISSION
                                        </h4>
                                        <ul className="list-disc list-inside text-base sm:text-lg md:text-xl  text-black-34 pl-10">
                                            <li data-aos="fade-left" >Provide the latest methodology with high-quality training and
                                                mentoring
                                            </li>
                                            <li data-aos="fade-right" >Build up the capacity and career of IT experts in Cambodia</li>
                                            <li data-aos="fade-left" >Consult and connect ISTAD trainees to top IT careers</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>


                            <div className="col-span-12 lg:col-span-5 relative hidden xl:block">
                                <div
                                    data-aos="fade-down-left"
                                    className="absolute h-[500px] w-[500px] bg-[#dd6460] clip-path-haft-border"></div>
                                <div
                                    data-aos="fade-down-left"
                                    className="absolute h-[500px] w-[500px] bg-[#ec989b] clip-path-haft-border-red mt-4"></div>
                                <div
                                    data-aos="fade-down-right"
                                    className="absolute h-[500px] w-[500px] bg-primary clip-path-haft-border-green"></div>
                                <div className="clip-path-haft-border-green-circle">
                                    <div className="mt-36 clip-path-haft-square">
                                        <Image
                                            src={"https://lms-api.istad.co/api/v1/medias/view/8792ad28-a489-45fb-9b85-825bc1285e5d.png"}
                                            alt="image"
                                            className="rounded-s-[100px]"
                                            data-aos="fade-down-left"
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </section>

                </section>
            )}
            {/*add new feature end here*/}


            {loading ? <PartnerContext/> : (

                <div>

                    {/* Contact Section Start Here */}
                    <section data-aos="fade-up" className="container bg-white-80 text-start tracking-wide mx-auto my-12">

                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary pt-4">If you have any questions, please feel free
                            to
                            contact us.</p>
                        <div className="grid grid-cols-1 gap-2 text-base sm:text-lg md:text-xl tracking-wide mt-8">
                            <Link href="#" className="flex items-center text-primary">
                                <IoLocation className="w-5 h-5 mr-2"/> No. 24, St. 562, Sangkat Boeung Kak I, Khan Toul
                                Kork,
                                Phnom Penh, Cambodia
                            </Link>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="gap-2">
                                    <Link href="#"
                                          data-aos="fade-right"
                                          className="flex items-center text-primary mt-3">
                                        <FaFacebook className="w-5 h-5 mr-2"/> Facebook
                                    </Link>
                                    <Link href="#"
                                          data-aos="fade-left"
                                          className="flex items-center text-primary mt-4">
                                        <FaYoutube className="w-5 h-5 mr-2"/>YouTube
                                    </Link>
                                    <Link href="mailto:info.istad@gmail.com"
                                          data-aos="fade-right"
                                          className="flex items-center text-primary mt-4">
                                        <SiGmail className="w-5 h-5 mr-2"/> info.istad@gmail.com
                                    </Link>
                                    <Link href="tel:+85595990910"
                                          data-aos="fade-left"
                                          className="flex items-center text-primary mt-4">
                                        <IoCall className="w-5 h-5 mr-2"/> (+855) 95 990 910 | (+855) 93 990 910
                                    </Link>
                                    <Link href="https://t.me/istadkh"
                                          data-aos="fade-right"
                                          className="flex items-center text-primary mt-4">
                                        <FaTelegram className="w-5 h-5 mr-2"/> Telegram
                                    </Link>
                                    <Link href="https://www.istad.co"
                                          data-aos="fade-left"
                                          className="flex items-center text-primary mt-4">
                                        <BiWorld className="w-5 h-5 mr-2"/> www.istad.co
                                    </Link>
                                </div>
                                <div  className="pl-0 md:pl-18">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.2894046150174!2d104.90168557579511!3d11.578326445405018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e96d257a6f%3A0x6b66703c5fc0c7cc!2sScience%20and%20Technology%20Advanced%20Development%20Co.%2C%20Ltd.!5e0!3m2!1sen!2skh!4v1717637726829!5m2!1sen!2skh"
                                        width="500"
                                        height="300"
                                        style={{border: 0}}
                                        data-aos="flip-left"
                                        loading="lazy"
                                        aria-hidden="false"
                                        className="rounded-sm shadow-sm mx-auto w-full"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Contact Section End Here */}
                </div>

            )}


        </section>

    );
};
export default MainAboutUs;
