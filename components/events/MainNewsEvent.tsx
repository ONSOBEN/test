"use client";
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import EventSkeleton from '@/components/events/EventSkeleton';
import Link from "next/link";
import { useGetNewsQuery } from "@/redux/features/news-event/new";
import Lottie from "lottie-react";
import ErrorLoadingData from "@/components/imageJson/ErrorLoadingData.json";
import { FaTags } from "react-icons/fa";

const Page = () => {
    const { data, error, isLoading } = useGetNewsQuery({ page: 1, pageSize: 10 });

    return (
        <>
            <Head>
                <title>News & Events - Stay Up To Date</title>
                <meta name="description" content="Stay up to date with the latest news and events in Phnom Penh. Read the latest updates and be informed about upcoming events." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="https://istad.co/resources/img/CSTAD_120.png" />
            </Head>
            <section>
                {isLoading ? (
                    <EventSkeleton />
                ) : error ? (
                    <div
                        className="py-24 h-[600px] w-[600px] flex flex-col items-center justify-center sm:h-[500px] sm:w-[500px] md:h-[400px] md:w-[400px] lg:h-[300px] lg:w-[300px] xl:h-[200px] xl:w-[200px] 2xl:h-[100px] 2xl:w-[100px]"
                    >
                        <Lottie
                            className="h-[500px] w-[500px] sm:h-[400px] sm:w-[400px] md:h-[300px] md:w-[300px] lg:h-[200px] lg:w-[200px] xl:h-[150px] xl:w-[150px] 2xl:h-[100px] 2xl:w-[100px]"
                            animationData={ErrorLoadingData}
                            aria-label="Error loading animation"
                        />
                        <h2 className="text-[24px] text-error tracking-wide font-semibold sm:text-[22px] md:text-[20px] lg:text-[18px] xl:text-[16px] 2xl:text-[14px]">Error Loading !! 🙏</h2>
                    </div>
                ) : (
                    <div className="py-12">
                        <header>
                            <h1
                                data-aos="fade-down-right"
                                className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold text-start text-error"
                            >
                                NEWS & EVENTS
                            </h1>
                            <h2
                                data-aos="fade-up-right"
                                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-primary mb-8"
                            >
                                STAY UP TO DATE
                            </h2>
                        </header>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                            {data && data.dataList.map((item: any) => (
                                <Link key={item.id} href={`/news-event/${item.id}/${item.slug}`} target={'_blank'} passHref>
                                    <article className="col-span-12 md:col-span-3 py-2" data-aos="flip-right">
                                        <div className="cursor-pointer">
                                            <div className="relative w-full h-48">
                                                <Image
                                                    src={item.thumbnail}
                                                    alt={item.title}
                                                    layout="fill"
                                                    objectFit="cover"
                                                    className="rounded-lg hover:scale-105 transition-transform"
                                                    placeholder="blur"
                                                    blurDataURL="/path/to/blur-image.jpg" // Optionally add a blur image
                                                />
                                            </div>
                                            <div className="bg-white-80 h-[140px] p-4">
                                                <div className="flex justify-between mb-2">
                                                    <p className="text-primary event-category flex items-center text-sm">
                                                        <FaTags className="w-5 pr-2" />
                                                        <span className="text-[12px]">Phnom Penh</span>
                                                    </p>
                                                    <p className="text-[12px] text-primary">{new Date(item.publishedAt).toLocaleDateString()}</p>
                                                </div>
                                                <p className="text-base md:text-lg font-bold text-black-34 mb-1 line-clamp-2 hover:text-primary">{item.title}</p>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </>
    );
};

export default Page;
