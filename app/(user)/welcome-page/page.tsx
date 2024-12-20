'use client'
import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Lottie from "lottie-react";
import WelcomeImage from "@/components/welcome-json/WelcomeImage.json";
import WelcomePeople from "@/components/welcome-json/WelcomePeople.json";

export default function WelcomePage() {
    const studentData = useSelector((state: RootState) => state.studentAdmission.studentData);

    return (
        <section className="container mx-auto py-8 bg-white-80 flex flex-col lg:flex-row justify-start items-start shadow-sm rounded border border-gray-200 my-16">
            <div className="text-start p-8 bg-white w-full lg:max-w-2xl">

                <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-primary">Welcome, {studentData.studentName}!</h1>
                <p className="mb-4 text-primary">
                    Thank you for registering with ISTAD. We are excited to have you on board!
                </p>
                {/*<Link href={studentData.telegramLink}>*/}
                <Link href={"https://t.me/istadkh"} target={'_blank'}>
                    <button className="flex items-center bg-primary text-white px-4 py-2 rounded-full mb-6">
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M24 4.557c-.885.392-1.83.656-2.825.775a4.932 4.932 0 002.163-2.723 9.864 9.864 0 01-3.127 1.196 4.92 4.92 0 00-8.384 4.482A13.978 13.978 0 011.671 3.149 4.92 4.92 0 003.195 9.73a4.9 4.9 0 01-2.23-.616c-.054 2.28 1.581 4.415 3.95 4.89a4.93 4.93 0 01-2.224.085 4.927 4.927 0 004.6 3.417A9.875 9.875 0 010 21.539a13.943 13.943 0 007.548 2.213c9.056 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z"
                                fill="currentColor"/>
                        </svg>
                        Join Telegram group
                    </button>
                </Link>
                <p className="mb-4">
                    ISTAD is your gateway to a world of knowledge. Explore our extensive course catalog, engage with
                    interactive learning tools, and join a community of passionate learners.
                </p>
                <p className="font-semibold">
                    Find out more about our <span className="text-primary">SHORT COURSES</span>.
                </p>

            </div>
            <div className="flex flex-col items-center w-full lg:w-auto">
                <Lottie className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] md:h-[110px] md:w-[110px]" animationData={WelcomeImage}/>
                <Lottie className="h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px]" animationData={WelcomePeople}/>
            </div>
        </section>
    );
}
