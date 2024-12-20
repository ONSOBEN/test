import React from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

// Lazy load the MainAdmission component
const MainAdmission = dynamic(() => import('@/components/admission/MainAdmission'));

export const metadata: Metadata = {
    title: "ISTAD Admission",
    description: "Welcome to our Admissions page! Here, you will find all the necessary information to guide you. ISTAD Learning Management System is an advanced web application designed to streamline student management and offer comprehensive tools for instructors and administrators. Our platform ensures efficient communication, seamless course management, and a superior learning experience for all users.",
    openGraph: {
        title: "ISTAD Admission",
        description: "Welcome to our Admissions page! Here, you will find all the necessary information to guide you. ISTAD Learning Management System is a web application for managing students and providing a robust system for instructors and administrators.",
        images: [
            {
                url: "https://lms-api.istad.co/api/v1/medias/view/c3ca024c-f93a-4454-83b0-6957f79eab3c.png",
                width: 120,
                height: 120,
                alt: "ISTAD Admission Page Image",
            },
        ],
    },
};


const Page = () => {
    return (
        <section>
            <MainAdmission />
        </section>
    );
};

export default Page;
