import React from 'react';
import MainScholarship from "@/components/scholarshipComponent/MainScholarship";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "ISTAD 2024 Scholarship Opportunity",
    description: "Institute of Science and Technology Advanced Development (ISTAD) is offering a 100% scholarship for 60 places in 2024. Our advanced Learning Management System is designed to streamline student management and offer comprehensive tools for instructors and administrators, ensuring efficient communication and a superior learning experience.",
    openGraph: {
        title: "ISTAD 2024 Scholarship Opportunity",
        description: "Institute of Science and Technology Advanced Development (ISTAD) provides a 100% scholarship opportunity for 60 places in 2024. Our Learning Management System offers advanced tools for student management and support for instructors and administrators.",
        images: [
            {
                url: "https://lms-api.istad.co/api/v1/medias/view/c3ca024c-f93a-4454-83b0-6957f79eab3c.png",
                width: 120,
                height: 120,
                alt: "ISTAD 2024 Scholarship",
            },
        ],
    },
};


const Page = () => {
    return (
        <section>
            <MainScholarship/>
        </section>
    );
};

export default Page;