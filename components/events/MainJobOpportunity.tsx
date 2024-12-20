"use client";
import React from 'react';
import Image from 'next/image';
import EventSkeleton from '@/components/events/EventSkeleton';
import { useGetEventNewsQuery } from "@/redux/features/event-new/eventNew";
import Link from "next/link";
import {FaTags} from "react-icons/fa";

const MainJobOpportunity = () => {
    const { data, error, isLoading } = useGetEventNewsQuery({ page: 1, pageSize: 10 });

    return (
        <section>
            {isLoading ? (
                <EventSkeleton />
            ) : error ? (
                <div className="text-red-500">Failed to load data. Please try again later.</div>
            ) : (
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <h2
                        data-aos="fade-down-right"
                        className="text-lg sm:text-xl md:text-2xl font-semibold text-start text-error"
                    >
                        NEWS & EVENTS

                    </h2>
                    <h3
                        data-aos="fade-up-right"
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-primary mb-8"
                    >
                        STAY UP TO DATE
                    </h3>
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2"
                    >
                        {data && data.dataList.map((item: any) => (
                            <Link key={item.id} href={`/news-event/${item.id}/${item.slug}`} target={'_blank'} passHref>
                                <div  data-aos="flip-right" className="col-span-12 md:col-span-3 py-2 px-2 animate__animated animate__fadeInUp">
                                    <div className="card normal-card cursor-pointer">
                                        <div className="relative w-full h-48">
                                            <Image
                                                src={item.thumbnail}
                                                alt={item.title}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-lg hover:scale-105 transition-transform"
                                            />
                                        </div>
                                        <div className="h-[140px] bg-white-80 p-4">
                                            <div className="flex justify-between mb-2">
                                                <p className="text-primary event-category flex items-center text-sm">
                                                    <FaTags className={"w-5 pr-2"}/>
                                                    <span className={"text-[12px] text-primary"}>Phnom Penh</span>
                                                </p>
                                                <p className="text-[12px] text-primary">{new Date(item.publishedAt).toLocaleDateString()}</p>
                                            </div>
                                            <p className="text-base md:text-lg font-bold mb-1 text-black-34 line-clamp-2 hover:text-primary">{item.title}</p>
                                        </div>
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

export default MainJobOpportunity;
