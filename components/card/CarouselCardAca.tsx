import Image from 'next/image';
import { useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';

interface ImageData {
    id: number;
    src: string;
    alt: string;
    description: string;
    header: string;
}

/**
 * Carousel component for Next.js and Tailwind.
 * Using Swiper for swipe gestures on mobile devices and desktop
 *
 * @param images - Array of images with src, alt, and description attributes
 * @returns React component
 */
const CarouselCardAca = ({ images = [] }: { images: ImageData[] }) => {
    const swiperRef = useRef<SwiperRef | null>(null);

    if (!images.length) {
        return <div>No images to display</div>;
    }

    return (
        <div className="relative sm:my-6">
            <AiOutlineLeftCircle
                onClick={() => swiperRef.current?.swiper.slidePrev()}
                className="hover:text-primary absolute left-0 m-auto text-2xl md:text-4xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
            />
            <Swiper
                ref={swiperRef}
                modules={[Pagination, Scrollbar, A11y, Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={false} // Disable default navigation buttons
                loop={true} // Enable loop to continue cycling through images
            >
                {images.map((image) => (
                    <SwiperSlide key={image.id}>
                        <section className="w-full sm:h-[50vh] lg:h-[35vh] md:h-[50vh] flex overflow-hidden relative m-auto">
                            <section className="relative z-10 w-full h-full flex flex-col items-center">
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-x-2 px-4 md:px-8 sm:py-16">
                                        <div className="space-y-6 flex col-span-1 justify-center">
                                            <div className="relative w-[120px] h-[120px] md:w-64 md:h-64 sm:w-[160px] sm:h-[160px] overflow-hidden object-cover rounded-full">
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    layout="fill"
                                                    objectFit="cover"
                                                    data-aos="fade-down-right"
                                                    className="rounded-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="px-4 md:px-16 col-span-2 text-center md:text-left">
                                            <h2
                                                data-aos="zoom-in-up"
                                                className="text-lg md:text-2xl font-bold pb-2 md:pb-4 sm:pb-4 truncate-lines-2"
                                            >
                                                {image.header}
                                            </h2>
                                            <p
                                                data-aos="zoom-in-up"
                                                className="truncate-lines-3 text-base sm:text-xl md:text-2xl truncate-lines-3"
                                            >
                                                {image.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </section>
                    </SwiperSlide>
                ))}
            </Swiper>
            <AiOutlineRightCircle
                onClick={() => swiperRef.current?.swiper.slideNext()}
                className="hover:text-primary absolute right-0 m-auto text-2xl md:text-4xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
            />
        </div>
    );
};

export default CarouselCardAca;
