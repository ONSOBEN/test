"use client";
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import Link from "next/link";
import EventSkeleton from "@/components/events/EventSkeleton";

const Page = () => {
    const newsEvent = [
        {
            id: 1,
            title: "‘Washy Clouds and a Weepy Sky Floating Upside Down’: Simon Armitage's Arctic expedition...",
            location: "Phnom Penh",
            date: "October 22, 2023",
            image: '/news&event/new-image-1.png'
        },
        {
            id: 2,
            title: "‘Washy Clouds and a Weepy Sky Floating Upside Down’: Simon Armitage's Arctic expedition...",
            location: "Phnom Penh",
            date: "October 22, 2023",
            image: 'https://lms-api.istad.co/api/v1/medias/view/ae8a3647-ed81-4940-9839-a5a8f78a07b9.png'
        },
        {
            id: 3,
            title: "កម្មវិធី សង្ក្រាន្តឆ្នាំថ្មី​ និង​ពិសាអាហារសាមគ្គីភាតរភាពរបស់គ្រួសារ CSTAD នាថ្ងៃព្រហស្បតិ៍  ទី១១ ខែមេសា​ ឆ្នាំ២០២៤",
            location: "Phnom Penh",
            date: "October 22, 2023",
            image: 'https://lms-api.istad.co/api/v1/medias/view/bd2b1d38-6877-4be7-a901-816a84f6a2dc.png'
        },
        {
            id: 4,
            title: "‘Washy Clouds and a Weepy Sky Floating Upside Down’: Simon Armitage's Arctic expedition...",
            location: "Phnom Penh",
            date: "October 22, 2023",
            image: '/news&event/new-image-1.png'
        },
        {
            id: 5,
            title: "‘Washy Clouds and a Weepy Sky Floating Upside Down’: Simon Armitage's Arctic expedition...",
            location: "Phnom Penh",
            date: "October 22, 2023",
            image: '/news&event/new-image-1.png'
        },
        {
            id: 6,
            title: "‘Washy Clouds and a Weepy Sky Floating Upside Down’: Simon Armitage's Arctic expedition...",
            location: "Phnom Penh",
            date: "October 22, 2023",
            image: '/news&event/new-image-1.png'
        },
    ];

    // Function to generate a URL-friendly slug
    const generateSlug = (text:string) => {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
    };

    const getLocationColorClass = (location:string) => {
        if (location === "Phnom Penh") {
            return "text-primary";
        } else {
            return "text-blue-500";
        }
    };
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <section>
            {loading ? <EventSkeleton/> : (
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 khmer-font">
                    <h2 data-aos-duration="800" data-aos-delay="500" data-aos-offset="200" data-aos-easing="ease-in-out"
                        data-aos="fade-up"
                        className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-semibold text-start text-error">News
                        & Events</h2>
                    <h3 data-aos-duration="800" data-aos-delay="500" data-aos-offset="200" data-aos-easing="ease-in-out"
                        data-aos="fade-up"
                        className="text-4xl sm:text-5xl font-bold tracking-wide text-primary mb-8">STAY UPDATED WITH THE
                        LATEST NEWS & EVENTS</h3>
                    <div data-aos-duration="800" data-aos-delay="500" data-aos-offset="200"
                         data-aos-easing="ease-in-out" data-aos="fade-up"
                         className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {newsEvent.map((item) => (

                            <Link key={item.id} href={`/news-event/${generateSlug(item.title)}`} passHref
                                  className="bg-white shadow-sm rounded-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer block">
                                <div className="grid grid-cols-1 h-full md:grid-cols-2">
                                    <div className="relative w-full h-48 md:h-auto">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-t-lg md:rounded-none md:rounded-l-lg"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col justify-center">
                                        <div
                                            className={`flex items-center text-sm ${getLocationColorClass(item.location)} mb-2`}>
                                            <span>{item.location}</span>
                                            <span className="mx-2">|</span>
                                            <span>{item.date}</span>
                                        </div>
                                        <h4 className="text-base tracking-wide text-gray-80 line-clamp-3">{item.title}</h4>
                                    </div>
                                </div>
                            </Link>

                        ))}
                    </div>
                </div>
            )}
        </section>

    );
};

export default Page;
