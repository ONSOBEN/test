import React from 'react';
import ProjectITE from "@/components/itExpert/ProjectITE";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Project ITE - ISTAD",
    description: "ISTAD Learning Management System is an advanced web application designed to streamline student management and offer comprehensive tools for instructors and administrators. Our platform ensures efficient communication, seamless course management, and a superior learning experience for all users.",
    openGraph: {
        title: "Project ITE - ISTAD",
        description:
            "ISTAD Learning Management System is a web application for managing students and providing a robust system for instructors and administrators.",
        images: "https://lms-api.istad.co/api/v1/medias/view/c3ca024c-f93a-4454-83b0-6957f79eab3c.png",
    },
};

const Page = () => {
    return (
        <section>
            <ProjectITE/>
        </section>
    );
};

export default Page;