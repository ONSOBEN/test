'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSectionSkeleton from '@/components/banner/HeroSectionSkeleton';

export default function Gallery() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 120,
            once: true,
        });
    }, []);

    const images = [
        ['https://lms-api.istad.co/api/v1/medias/view/378d40e6-cbc3-4186-9521-c620ccb1aed7.jpg', 'https://lms-api.istad.co/api/v1/medias/view/c946e2b9-84d8-434d-a87c-57f0e12656b8.png', 'https://lms-api.istad.co/api/v1/medias/view/0828598e-3137-499b-9498-ba335828a1e3.png'],
        ['https://lms-api.istad.co/api/v1/medias/view/9118f9a1-994e-48cb-8070-7d5354b0f243.png', 'https://lms-api.istad.co/api/v1/medias/view/18f376fb-7ab9-4a12-a8bb-8df286977a02.png', 'https://lms-api.istad.co/api/v1/medias/view/c020e9f0-17bd-4528-881d-3465c0299dd4.png'],
        ['https://lms-api.istad.co/api/v1/medias/view/672899f7-b724-46ac-993e-d207208d3177.png', 'https://lms-api.istad.co/api/v1/medias/view/45e8c384-b10a-429f-b23b-e1752b7b897a.png', 'https://lms-api.istad.co/api/v1/medias/view/0facede2-663c-4a4a-b48e-623c1b8cd208.png'],
        ['https://lms-api.istad.co/api/v1/medias/view/76ba0836-7caa-4457-895f-790cd829ac9e.png', 'https://lms-api.istad.co/api/v1/medias/view/7bbe79d4-acd5-4909-ba66-040b496541d1.png', 'https://lms-api.istad.co/api/v1/medias/view/9820288b-5967-43a6-92cb-0799b0fb6a2f.png'],
    ];

    return (
        <section aria-labelledby="gallery-heading">
            {loading ? (
                <HeroSectionSkeleton />
            ) : (
                <div className="container pb-8 my-16">
                    <header>
                        <div data-aos="fade-right" className="flex flex-row items-start border-l-8 border-error">
                            <h1
                                id="gallery-heading"
                                data-aos="fade-up"
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary ml-2 sm:ml-4"
                            >
                                ISTAD<br />
                                ACTIVITY
                            </h1>
                        </div>
                    </header>
                    <article>
                        <div className="py-8">
                            <h2
                                data-aos="fade-up"
                                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-start text-primary"
                            >
                                OUR ACTIVITY
                            </h2>
                            <p
                                data-aos="fade-right"
                                className="text-start text-base md:text-lg text-primary"
                            >
                                SHOWCASE ACTIVITY AT ISTAD LIKE ADMISSION INTERVIEW, ENTRANCE EXAM, SPECIAL LECTURES, MONTHLY PARTY, STUDY ACTIVITY, REVIEW, EXAM, <br />
                                SHORT COURSE, PRE-UNIVERSITY, FOUNDATION AND EXPERT COURSE.
                            </p>
                        </div>
                        <div className="container grid grid-cols-2 md:grid-cols-4 gap-4 my-2 md:my-3 px-0">
                            {images.map((col, colIndex) => (
                                <div className="grid gap-4" key={colIndex}>
                                    {col.map((src, index) => (
                                        <div key={index}>
                                            <Image
                                                data-aos="flip-down"
                                                className="h-auto max-w-full rounded-lg"
                                                src={src || '/default-logo.png'}
                                                alt={`ISTAD activity image ${colIndex * 3 + index + 1}`}
                                                layout="responsive"
                                                width={500}
                                                height={500}
                                                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                                priority={index === 0 && colIndex === 0} // Only the first image will have priority
                                                placeholder="blur"
                                                blurDataURL="/default-logo.png"
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </article>
                </div>
            )}
        </section>
    );
}
