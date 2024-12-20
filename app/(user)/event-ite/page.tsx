import React from 'react';
import EventITE from "@/components/itExpert/EventITE";
import EventITE2 from "@/components/itExpert/EventITE2";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "ISTAD LMS EVENT ITE",
    description: "Celebrating closing ceremony, orientation, special lecture, and so on. ISTAD Learning Management System is an advanced web application designed to streamline student management and offer comprehensive tools for instructors and administrators. Our platform ensures efficient communication, seamless course management, and a superior learning experience for all users.",
    openGraph: {
        title: "ISTAD LMS EVENT ITE",
        description: "Celebrating closing ceremony, orientation, special lecture, and so on. ISTAD Learning Management System is a web application for managing students and providing a robust system for instructors and administrators.",
        images: [
            {
                url: "https://lms-api.istad.co/api/v1/medias/view/c3ca024c-f93a-4454-83b0-6957f79eab3c.png",
                width: 120,
                height: 120,
                alt: "ISTAD LMS Event Image",
            },
        ],
    },
};


const Page = () => {
    return (
        <section>
            <EventITE/>
            <EventITE2/>
        </section>
    );
};

export default Page;