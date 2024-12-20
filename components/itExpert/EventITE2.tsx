"use client";
import React, { useEffect } from 'react';
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";

const EventIte2 = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 120,
            once: true,
        });
    }, []);

    const events2 = [
        {
            id: 1,
            src: "https://lms-api.istad.co/api/v1/medias/view/ce1b64c8-4d56-45b0-bfcc-5b31011b4935.png",
            alt: "event1",
        },
        {
            id: 2,
            src: "https://lms-api.istad.co/api/v1/medias/view/f6063869-adb8-416e-88af-88da5a25c207.png",
            alt: "event2",
        },
        {
            id: 3,
            src: "https://lms-api.istad.co/api/v1/medias/view/dd037a0c-beac-4987-8983-8de0c4f86a71.png",
            alt: "event3",
        },
        {
            id: 4,
            src: "https://lms-api.istad.co/api/v1/medias/view/ec4ec262-0485-455e-b8e9-6fb9976d0bc6.png",
            alt: "event4",
        },
    ];

    return (
        <div className="sm:rounded-md max-w-6xl mx-auto p-4 py-8 space-y-9">
            {events2.map(event => (
                <div  key={event.id}  className="w-full">
                    <Image
                        src={event.src}
                        alt={event.alt}
                        width={1920}
                        height={1080}
                        data-aos="zoom-in-up"
                        className={"w-full h-full object-cover rounded-lg"}
                    />
                </div>
            ))}
        </div>
    );
};

export default EventIte2;
