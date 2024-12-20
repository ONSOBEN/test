// 'use client';
// import React, { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
// import type { Swiper as SwiperType } from 'swiper';
// import HomeBanner2Skeleton from "@/components/banner/HomeBanner2Skeleton";
// import AOS from "aos";
//
// const HomeBanner3 = () => {
//
//     useEffect(() => {
//         AOS.init({
//             duration: 1000,
//             offset: 120,
//             once: true,
//         });
//     }, []);
//
//     const [loading, setLoading] = useState(true);
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setLoading(false);
//         }, 1000);
//
//         return () => clearTimeout(timer);
//     }, []);
//
//     const images = [
//         {
//             src: 'https://lms-api.istad.co/api/v1/medias/view/c6aae2d2-c7bd-49a1-b270-f8e1298f5d72.jpg',
//             title: 'IT Expert',
//             description: 'ISTAD aim to provide a 10 months training to become a IT specialist.\n'
//         },
//         {
//             src: 'https://lms-api.istad.co/api/v1/medias/view/04b2aab4-e986-461d-ba32-c66f71bf8565.jpg',
//             title: 'IT Expert',
//             description: 'ISTAD aim to provide a 10 months training to become a IT specialist.\n'
//         },
//         {
//             src: 'https://lms-api.istad.co/api/v1/medias/view/e3b5c7a3-4cf6-4a16-9b64-b1e500295914.jpg',
//             title: 'IT Expert',
//             description: 'ISTAD aim to provide a 10 months training to become a IT specialist.\n'
//         },
//         {
//             src: 'https://lms-api.istad.co/api/v1/medias/view/588878e4-068b-485c-8875-03e8da31213a.jpg',
//             title: 'IT Expert',
//             description: 'ISTAD aim to provide a 10 months training to become a IT specialist.\n'
//         },
//         {
//             src: 'https://lms-api.istad.co/api/v1/medias/view/cae0a187-fc5e-44ab-9743-e71baf23d296.jpg',
//             title: 'IT Expert',
//             description: 'ISTAD aim to provide a 10 months training to become a IT specialist.\n'
//         },
//         {
//             src: 'https://lms-api.istad.co/api/v1/medias/view/2060c6bc-c32f-4071-b454-33ce57c40db9.jpg',
//             title: 'IT Expert',
//             description: 'ISTAD aim to provide a 10 months training to become a IT specialist.\n'
//         },
//         {
//             src: 'https://lms-api.istad.co/api/v1/medias/view/97cd7aca-06d0-4318-986e-d0fd4f54ebc3.jpg',
//             title: 'IT Expert',
//             description: 'ISTAD aim to provide a 10 months training to become a IT specialist.\n'
//         },
//         {
//             src: 'https://lms-api.istad.co/api/v1/medias/view/65350f2d-a38c-48a3-864c-26361e0efb91.jpg',
//             title: 'IT Expert',
//             description: 'ISTAD aim to provide a 10 months training to become a IT specialist.\n'
//         },
//     ];
//
//     const swiperRef = useRef<SwiperType | null>(null);
//
//     return (
//         <section aria-label="Home Banner">
//             {loading ? <HomeBanner2Skeleton /> :
//                 <div
//                     className="mb-12 relative w-full"
//                     data-aos="fade-up"
//                 >
//                     <Swiper
//                         modules={[Navigation, Pagination, Autoplay]}
//                         spaceBetween={0}
//                         slidesPerView={1}
//                         onSwiper={(swiper) => (swiperRef.current = swiper)}
//                         pagination={{ clickable: true }}
//                         autoplay={{ delay: 4000 }}
//                         loop
//                         // className="relative lg:h-[600px] md:h-96 sm:h-68 h-[800px] overflow-hidden"
//                         className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[80vh] 2xl:h-[90vh] overflow-hidden "
//                     >
//                         {images.map((image, index) => (
//                             <SwiperSlide key={index}>
//                                 <div className="relative w-full h-full">
//
//                                     {/*<div*/}
//                                     {/*    className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[100vh]">*/}
//                                         <Image
//                                             src={image.src}
//                                             layout="fill"
//                                             objectFit="cover"
//                                             alt={image.title}
//                                             placeholder="blur"
//                                             blurDataURL="/default-logo.png"
//                                         />
//                                         <div
//                                             className="absolute inset-0 bg-black opacity-50 z-10 pointer-events-none"></div>
//                                         <div
//                                             className="absolute inset-0 flex items-center justify-start text-white p-12 sm:p-14 md:p-16 lg:p-18 ml-4 sm:ml-6 md:ml-8 lg:ml-10">
//                                             <div
//                                                 className="relative z-30 flex flex-col items-start sm:space-y-2 md:space-y-3 lg:space-y-5">
//                                                 <h2
//                                                     data-aos="fade-up-right"
//                                                     className="text-2xl md:text-3xl lg:text-4xl font-semibold ">
//                                                     {image.title}
//                                                 </h2>
//                                                 <p
//                                                     data-aos="zoom-in-left"
//                                                     className="text-base md:text-lg lg:text-xl pr-24 sm:pr-28 md:pr-32 lg:pr-40 line-clamp-6 ">
//                                                     {image.description}
//                                                 </p>
//                                                 <Link href="https://www.facebook.com/istad.co" target={"_blank"}
//                                                       data-aos="fade-down">
//                                                     <button
//                                                         type="button"
//                                                         aria-label="Explore Now"
//                                                         className="text-white text-xs md:text-base bg-[#253B958F] hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mt-2"
//                                                     >
//                                                         Explore Now
//                                                     </button>
//                                                 </Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                             </SwiperSlide>
//                             ))}
//                         {/*<div className="swiper-button-prev-custom text-gray-80"*/}
//                         {/*     onClick={() => swiperRef.current?.slidePrev()}*/}
//                         {/*     aria-label="Previous slide">*/}
//                         {/*    <FontAwesomeIcon icon={faAngleLeft} size="2x" />*/}
//                         {/*</div>*/}
//                         {/*<div className="swiper-button-next-custom text-gray-80"*/}
//                         {/*     onClick={() => swiperRef.current?.slideNext()}*/}
//                         {/*     aria-label="Next slide">*/}
//                         {/*    <FontAwesomeIcon icon={faAngleRight} size="2x" />*/}
//                         {/*</div>*/}
//                     </Swiper>
//                     <style jsx>{`
//                         .swiper-button-prev-custom,
//                         .swiper-button-next-custom {
//                             z-index: 30;
//                             position: absolute;
//                             top: 50%;
//                             transform: translateY(-50%);
//                             cursor: pointer;
//                         }
//
//                         .swiper-button-prev-custom {
//                             left: 10px;
//                         }
//
//                         .swiper-button-next-custom {
//                             right: 10px;
//                         }
//                     `}</style>
//                 </div>}
//         </section>
//     );
// };
//
// export default HomeBanner3;
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import type { Swiper as SwiperType } from 'swiper';
import HomeBanner2Skeleton from "@/components/banner/HomeBanner2Skeleton";
import AOS from "aos";

const HomeBanner3 = () => {
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
        'https://lms-api.istad.co/api/v1/medias/view/c6aae2d2-c7bd-49a1-b270-f8e1298f5d72.jpg',
        'https://lms-api.istad.co/api/v1/medias/view/04b2aab4-e986-461d-ba32-c66f71bf8565.jpg',
        'https://lms-api.istad.co/api/v1/medias/view/e3b5c7a3-4cf6-4a16-9b64-b1e500295914.jpg',
        'https://lms-api.istad.co/api/v1/medias/view/588878e4-068b-485c-8875-03e8da31213a.jpg',
        'https://lms-api.istad.co/api/v1/medias/view/cae0a187-fc5e-44ab-9743-e71baf23d296.jpg',
        'https://lms-api.istad.co/api/v1/medias/view/2060c6bc-c32f-4071-b454-33ce57c40db9.jpg',
        'https://lms-api.istad.co/api/v1/medias/view/97cd7aca-06d0-4318-986e-d0fd4f54ebc3.jpg',
        'https://lms-api.istad.co/api/v1/medias/view/65350f2d-a38c-48a3-864c-26361e0efb91.jpg',
    ];

    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section aria-label="Home Banner">
            {loading ? <HomeBanner2Skeleton /> : (
                <div className="mb-12 relative w-full" data-aos="fade-up">
                    <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[80vh] 2xl:h-[90vh] overflow-hidden">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={0}
                            slidesPerView={1}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 4000 }}
                            loop
                            className="h-full w-full"
                        >
                            {images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={image}
                                            layout="fill"
                                            objectFit="cover"
                                            alt={`Slide ${index + 1}`}
                                            placeholder="blur"
                                            blurDataURL="/default-logo.png"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

                        {/* Static content */}
                        <div className="absolute inset-0 flex items-center justify-start text-white p-12 sm:p-14 md:p-16 lg:p-18 ml-4 sm:ml-6 md:ml-8 lg:ml-10">
                            <div className="relative z-30 flex flex-col items-start sm:space-y-2 md:space-y-3 lg:space-y-5">
                                <h2
                                    data-aos="fade-up-right"
                                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight sm:leading-tight md:leading-snug lg:leading-snug"
                                >
                                    IT Expert
                                </h2>
                                <p
                                    data-aos="zoom-in-left"
                                    className="text-base md:text-xlg lg:text-2xl pr-24 sm:pr-28 md:pr-32 lg:pr-40 line-clamp-6"
                                >
                                    ISTAD aim to provide a 10 months training to become a IT specialist.
                                </p>
                                <Link href="https://www.facebook.com/istad.co" target="_blank" data-aos="fade-down">
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
                </div>
            )}
        </section>
    );
};

export default HomeBanner3;