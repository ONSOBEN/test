import React from 'react';
import TrainingIte from "@/components/itExpert/TrainingITE";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "ISTAD Training & Resources",
    description: "ISTAD Learning Management System offers the latest curriculum, comprehensive course materials, and tools for developing researching skills and knowledge. Our advanced platform is designed to streamline student management and support instructors and administrators with efficient communication, seamless course management, and a superior learning experience.",
    openGraph: {
        title: "ISTAD Training & Resources",
        description: "ISTAD Learning Management System provides the latest curriculum, course materials, and resources to enhance researching skills and knowledge. Our system supports effective student management and offers robust tools for instructors and administrators.",
        images: [
            {
                url: "https://lms-api.istad.co/api/v1/medias/view/c3ca024c-f93a-4454-83b0-6957f79eab3c.png",
                width: 120,
                height: 120,
                alt: "ISTAD Training & Resources",
            },
        ],
    },
};


const Page = () => {
    return (
        <section className=" w-full">
            <TrainingIte />
        </section>
    );
};

export default Page;