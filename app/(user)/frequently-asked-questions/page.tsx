import React from 'react';
import FAQ from "@/components/aboutUs/MainFrequentlyAskedQuestions";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "ISTAD FAQ",
    description: "While the acronym FQA refers to theories that are questioned, FAQ, or frequently asked questions, refers to a group of questions that are most often asked. ISTAD Learning Management System is an advanced web application designed to streamline student management and offer comprehensive tools for instructors and administrators. Our platform ensures efficient communication, seamless course management, and a superior learning experience for all users.",
    openGraph: {
        title: "ISTAD FAQ",
        description: "While the acronym FQA refers to theories that are questioned, FAQ, or frequently asked questions, refers to a group of questions that are most often asked. ISTAD Learning Management System is a web application for managing students and providing a robust system for instructors and administrators.",
        images: [
            {
                url: "https://lms-api.istad.co/api/v1/medias/view/c3ca024c-f93a-4454-83b0-6957f79eab3c.png",
                width: 128,
                height: 75,
                alt: "ISTAD FAQ Page Image",
            },
        ],
    },
};


const Page = () => {
    return (
        <section>
            <FAQ/>
        </section>
    );
};

export default Page;