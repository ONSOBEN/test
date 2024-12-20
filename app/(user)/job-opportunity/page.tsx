import React from 'react';
import MainJobOpportunity from "@/components/events/MainJobOpportunity";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "ISTAD Job Opportunity",
    description: "ISTAD is a place where you can find the latest job opportunities. Our advanced Learning Management System is designed to streamline student management and offer comprehensive tools for instructors and administrators. We provide a platform that ensures efficient communication, seamless course management, and a superior learning experience for all users.",
    openGraph: {
        title: "ISTAD Job Opportunity",
        description: "ISTAD is a place where you can find the latest job opportunities. Our Learning Management System offers advanced tools for managing students and providing robust support for instructors and administrators.",
        images: [
            {
                url: "https://lms-api.istad.co/api/v1/medias/view/c3ca024c-f93a-4454-83b0-6957f79eab3c.png",
                width: 120,
                height: 120,
                alt: "ISTAD Job Opportunities",
            },
        ],
    },
};


const Page = () => {
    return (
        <section>
            <MainJobOpportunity/>
        </section>
    );
};

export default Page;