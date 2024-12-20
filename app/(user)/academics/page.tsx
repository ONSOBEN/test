import React from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

// Lazy load the MainAcademic component
const MainAcademic = dynamic(() => import('@/components/acedemicSkeleton/MainAcademic'));

export const metadata: Metadata = {
    title: "ISTAD Academics",
    description: "ISTAD offers BA degrees in IT field to preparing students for their IT career in the future. Our programs equip students with the skills needed for a successful IT career.",
    openGraph: {
        title: "ISTAD Academics",
        description: "ISTAD offers BA degrees in IT field to preparing students for their IT career in the future. Our comprehensive programs equip students with the necessary skills and knowledge to succeed in the IT industry.",
        images: [
            {
                url: "https://lms-api.istad.co/api/v1/medias/view/c3ca024c-f93a-4454-83b0-6957f79eab3c.png",
                width: 120,
                height: 120,
                alt: "ISTAD BA Degrees in IT - Prepare for a Successful IT Career",
            },
        ],
    },
};



const Page = () => {
    return (
        <section>
            <MainAcademic />
        </section>
    );
};

export default Page;
