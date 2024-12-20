"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import type { Swiper as SwiperType } from 'swiper';

// Define the type for a slide
interface Slide {
    image: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}

// Define the props type for the Carousel component
interface CarouselProps {
    slides: Slide[];
}

const Carousel2: React.FC<CarouselProps> = ({ slides }) => {

    const swiperRef = useRef<SwiperType | null>(null);


    return (
        <section>
            <div className="relative w-full h-full">

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000 }}
                        loop
                        className="relative lg:h-[600px] md:h-96 sm:h-68 h-[500px] overflow-hidden"
                    >
                        {slides.map((slide: Slide, index: number) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-full">
                                    <Image
                                        src={slide.image}
                                        className="block w-full h-full object-cover"
                                        width={1920}
                                        height={1080}
                                        alt="carousel image"
                                    />
                                    <div className="absolute inset-0 bg-black opacity-50 z-10 pointer-events-none"></div>
                                    <div className="absolute inset-0 flex items-center justify-start text-white p-4 sm:p-6 md:p-8 lg:p-12 md:px-16 lg:px-16">
                                        <div className="relative z-30 flex flex-col items-start space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 lg:px-32">
                                            <h2
                                                data-aos="fade-up-right"
                                                className="text-2xl md:text-3xl lg:text-4xl font-semibold ">
                                                {slide.title}
                                            </h2>
                                            <p
                                                data-aos="zoom-in-left"
                                                className="text-base md:text-lg lg:text-xl pr-8 sm:pr-10 md:pr-12 lg:pr-16 line-clamp-6 ">
                                                {slide.description}
                                            </p>
                                            <Link href={slide.buttonLink} target={"_blank"}>
                                                <button
                                                    data-aos="zoom-in-down"
                                                    className="text-white-80 text-sm md:lg  bg-[#253B958F] font-normal hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 mt-4 ">
                                                    {slide.buttonText}
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                        <div className="swiper-button-prev-custom text-[#D3D3D3]" onClick={() => swiperRef.current?.slidePrev()}>
                            <FontAwesomeIcon icon={faAngleLeft} size="1x" />
                        </div>
                        <div className="swiper-button-next-custom  text-gray-80" onClick={() => swiperRef.current?.slideNext()}>
                            <FontAwesomeIcon icon={faAngleRight} size="1x"/>
                        </div>
                    </Swiper>

                {/* Your CSS styles */}
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
            </div>
        </section>
    );
}
    export default Carousel2;
