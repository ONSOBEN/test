'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import type { Swiper as SwiperType } from 'swiper';
import HomeBanner2Skeleton from "@/components/banner/HomeBanner2Skeleton";
import AOS from "aos";

const HomeBanner2 = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 120,
            once: true,
        });
    }, []);

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const images = [
        {
            src: 'https://lms-api.istad.co/api/v1/medias/view/35fad2d3-5d02-4243-9030-63dd108add80.png',
            title: 'Scholarship Opportunities',
            description: 'ISTAD provides 3 types of scholarship for IT students in Cambodia such as Pre-University, IT Foundation, and IT Expert.'
        },
        {
            src: 'https://lms-api.istad.co/api/v1/medias/view/110418f0-b98f-400b-aebe-a1022111cb0a.png',
            title: 'Training Methodologies',
            description: 'ISTAD blends flipped classrooms, mentorship, and group work with project-based learning, research, and discipline to develop well-rounded, critical thinkers.'
        },
        {
            src: 'https://lms-api.istad.co/api/v1/medias/view/33b238f3-7b45-4190-916d-8356444f6d4c.png',
            title: 'Advanced Courses',
            description: 'ISTAD provides the latest technologies in training such as Flutter Mobile App Development, Spring Microservices, DevOps Engineering, Data Analytics, Blockchain Development, and Cybersecurity.'
        }
    ];

    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section aria-label="Home Banner">
            {loading ? <HomeBanner2Skeleton /> :
                <div
                    className="my-12 relative w-full"
                    data-aos="fade-up"
                >
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000 }}
                        loop
                        className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[100vh] overflow-hidden rounded-lg"
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[100vh]">
                                    <Image
                                        src={image.src}
                                        layout="fill"
                                        objectFit="cover"
                                        alt={image.title}
                                        placeholder="blur"
                                        blurDataURL="/default-logo.png"
                                    />
                                    <div className="absolute inset-0 bg-black opacity-50 z-10 pointer-events-none"></div>
                                    <div
                                        className="absolute inset-0 flex items-center justify-start text-white p-12 sm:p-14 md:p-16 lg:p-18 ml-4 sm:ml-6 md:ml-8 lg:ml-10">
                                        <div className="relative z-30 flex flex-col items-start sm:space-y-2 md:space-y-3 lg:space-y-5">
                                            <h2
                                                data-aos="fade-up-right"
                                                className="text-2xl md:text-3xl lg:text-4xl font-semibold ">
                                                {image.title}
                                            </h2>
                                            <p
                                                data-aos="zoom-in-left"
                                                className="text-base md:text-lg lg:text-xl pr-24 sm:pr-28 md:pr-32 lg:pr-40 line-clamp-6 ">
                                                {image.description}
                                            </p>
                                            <Link href="https://www.facebook.com/istad.co" target={"_blank"}
                                                  data-aos="fade-down">
                                                <button
                                                    type="button"
                                                    aria-label="Explore Now"
                                                    className="text-white text-xs md:text-base bg-[#253B958F] hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mt-2"
                                                >
                                                    Explore Now
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="swiper-button-prev-custom text-gray-80"
                             onClick={() => swiperRef.current?.slidePrev()}
                             aria-label="Previous slide">
                            <FontAwesomeIcon icon={faAngleLeft} size="2x" />
                        </div>
                        <div className="swiper-button-next-custom text-gray-80"
                             onClick={() => swiperRef.current?.slideNext()}
                             aria-label="Next slide">
                            <FontAwesomeIcon icon={faAngleRight} size="2x" />
                        </div>
                    </Swiper>
                    <style jsx>{`
                        .swiper-button-prev-custom,
                        .swiper-button-next-custom {
                            z-index: 30;
                            position: absolute;
                            top: 50%;
                            transform: translateY(-50%);
                            cursor: pointer;
                        }

                        .swiper-button-prev-custom {
                            left: 10px;
                        }

                        .swiper-button-next-custom {
                            right: 10px;
                        }
                    `}</style>
                </div>}
        </section>
    );
};

export default HomeBanner2;
