import React from 'react';
import DirectorMessage from "@/components/banner/AboutUsDirector";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "ISTAD Director Message",
    description: "Is a communication from the director of an organization. ISTAD Learning Management System is an advanced web application designed to streamline student management and offer comprehensive tools for instructors and administrators. Our platform ensures efficient communication, seamless course management, and a superior learning experience for all users.",
    openGraph: {
        title: "ISTAD Director Message",
        description: "Is a communication from the director of an organization. ISTAD Learning Management System is a web application for managing students and providing a robust system for instructors and administrators.",
        images: [
            {
                url: "https://lms-api.istad.co/api/v1/medias/view/c3ca024c-f93a-4454-83b0-6957f79eab3c.png",
                width: 120,  // Specify the width of the image
                height: 120,  // Specify the height of the image
                alt: "ISTAD Logo",
            },
        ],
    },
};



const Page = () => {
    return (
        <section>
           <DirectorMessage/>
        </section>
    );
};

export default Page;