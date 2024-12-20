'use client';
import * as React from "react";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselSize() {
    const images = [
        { src: "/logo/RUPP-logo.png", alt: "Partner 1" },
        { src: "/logo/logo-cstad.png", alt: "Partner 2" },
        { src: "/logo/logo-3.png", alt: "Partner 3" },
        { src: "/logo/logo-4.png", alt: "Partner 4" },
        { src: "/logo/logo-image.png", alt: "Partner 5" },
        { src: "/logo/RUPP-logo.png", alt: "Partner 1" },
        { src: "/logo/logo-cstad.png", alt: "Partner 2" },
        { src: "/logo/logo-3.png", alt: "Partner 3" },
        { src: "/logo/logo-4.png", alt: "Partner 4" },
        { src: "/logo/logo-image.png", alt: "Partner 5" },
        { src: "/logo/RUPP-logo.png", alt: "Partner 1" },
        { src: "/logo/logo-cstad.png", alt: "Partner 2" },
        { src: "/logo/logo-3.png", alt: "Partner 3" },
        { src: "/logo/logo-4.png", alt: "Partner 4" },
        { src: "/logo/logo-image.png", alt: "Partner 5" },
        { src: "/logo/RUPP-logo.png", alt: "Partner 1" },
        { src: "/logo/logo-cstad.png", alt: "Partner 2" },
        { src: "/logo/logo-3.png", alt: "Partner 3" },
        { src: "/logo/logo-4.png", alt: "Partner 4" },
        { src: "/logo/logo-image.png", alt: "Partner 5" },
        { src: "/logo/RUPP-logo.png", alt: "Partner 1" },
        { src: "/logo/logo-cstad.png", alt: "Partner 2" },
        { src: "/logo/logo-3.png", alt: "Partner 3" },
        { src: "/logo/logo-4.png", alt: "Partner 4" },
        { src: "/logo/logo-image.png", alt: "Partner 5" },
        { src: "/logo/RUPP-logo.png", alt: "Partner 1" },
        { src: "/logo/logo-cstad.png", alt: "Partner 2" },
        { src: "/logo/logo-3.png", alt: "Partner 3" },
        { src: "/logo/logo-4.png", alt: "Partner 4" },
        { src: "/logo/logo-image.png", alt: "Partner 5" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [api, setApi] = useState<CarouselApi | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    useEffect(() => {
        if (api) {
            api.scrollTo(currentIndex);
        }
    }, [currentIndex, api]);

    return (
        <div className="w-full container">
            <div>
                <h5
                    data-aos="fade-up-left"
                    className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-error mt-8 b-4">
                    OUR PARTNERS
                </h5>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    setApi={setApi}
                    currentIndex={currentIndex}
                >
                    <CarouselContent>

                        {images.map((image, index) => (

                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                                <div className="p-1">

                                    <Card  data-aos="flip-left" >

                                        <CardContent className="flex items-center justify-center p-6">
                                            <Image
                                                src={image.src}
                                                width={150}
                                                height={150}
                                                alt={image.alt}

                                                className="rounded-full"
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

        </div>
    );
}
