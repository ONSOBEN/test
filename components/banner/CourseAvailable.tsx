"use client";
import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import Image from "next/image";
import CourseAvailableSkeleton from "@/components/banner/CourseAvailableSkeleton";
import AOS from "aos";

const CourseAvailable = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 120,
            once: true,
        });
    }, []);

    return (
        <>
            <Head>
                <title>Course Available | Your Website</title>
                <meta name="description" content="Check out the available courses on our platform. We offer a variety of courses to enhance your skills." />
            </Head>
            <section>
                {loading ? <CourseAvailableSkeleton /> :
                    <div className={"container"} data-aos="fade-up">
                        <Image
                            src={"https://lms-api.istad.co/api/v1/medias/view/5992e761-c2a9-45ab-bedd-e5ddb5fe6645.png"}
                            alt={"Available courses illustration"}
                            width={1920}
                            height={1080}
                            className={"w-full h-full object-cover rounded-xl"}
                        />
                    </div>
                }
            </section>
        </>
    );
};

export default CourseAvailable;
