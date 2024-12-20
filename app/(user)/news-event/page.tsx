import React from 'react';
import {Metadata} from "next";
import MainNewsEvent from "@/components/events/MainNewsEvent";

export const metadata: Metadata = {
    title: "ISTAD News & Events",
    description: "ISTAD is a place where you can find the latest news and events. Our advanced Learning Management System also streamlines student management and offers comprehensive tools for instructors and administrators. We ensure efficient communication, seamless course management, and a superior learning experience for all users.",
    openGraph: {
        title: "ISTAD News & Events",
        description: "ISTAD is your source for the latest news and events. Our Learning Management System provides advanced tools for managing students and robust support for instructors and administrators.",
        images: [
            {
                url: "https://lms-api.istad.co/api/v1/medias/view/c3ca024c-f93a-4454-83b0-6957f79eab3c.png",
                width: 120,
                height: 120,
                alt: "ISTAD News & Events",
            },
        ],
    },
};


const Page = () => {
    return (
        <section className={"container"}>
            <MainNewsEvent/>
        </section>
    );
};

export default Page;