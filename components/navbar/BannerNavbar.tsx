"use client";

import Link from "next/link";
import React, { useEffect, useState } from 'react';
import { HiMiniArrowUpCircle } from "react-icons/hi2";
import BannerNavbarSkeleton from "@/components/navbar/BannerNavbarSkeleton";
import { useGetBannerAdsQuery } from "@/redux/features/banners/bannerAd";

interface BannerAd {
    alias: string;
    title: string;
    link: string;
}

const getRandomBanner = (ads: BannerAd[]): BannerAd | null => {
    if (ads.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * ads.length);
    return ads[randomIndex];
};

const BannerNavbar = () => {
    const { data, error, isLoading } = useGetBannerAdsQuery();
    const [randomBanner, setRandomBanner] = useState<BannerAd | null>(null);

    useEffect(() => {
        if (data && data.length > 0) {
            setRandomBanner(getRandomBanner(data));

            const intervalId = setInterval(() =>
            {
                setRandomBanner(getRandomBanner(data));
            }, 63000);

            return () => clearInterval(intervalId);
        }
    }, [data]);

    console.log(" randomBanner ", randomBanner);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // For smooth scrolling
        });
    };

    return (
        <section>
            {isLoading ? (
                <BannerNavbarSkeleton />
            ) : error ? (
                <div id="sticky-banner"
                     className="bg-white-80 h-12 fixed top-0 start-0 z-50 flex justify-between w-full p-4">
                    <div className="flex items-center mx-auto">
                        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                            <span
                                className="inline-flex p-1 me-3 bg-gray-200 rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center flex-shrink-0">
                                <svg className="w-3 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                    <path
                                        d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
                                </svg>
                                <span className="sr-only">Light bulb</span>
                            </span>
                            <span className="text-black-34 text-[12px]">
                                Center of Science and Technology Advanced Development - CSTAD
                                <Link
                                    href={"https://www.facebook.com/istad.co"} target={"_blank"}
                                    className="inline font-medium text-primary underline underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline cursor-pointer pl-2">
                                    Learn more
                                </Link>
                            </span>
                        </p>
                    </div>
                    <div className="flex items-center">

                        <button onClick={scrollToTop} data-dismiss-target="#sticky-banner" type="button"
                                className="text-primary flex-shrink-0 inline-flex justify-center items-center hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                            <HiMiniArrowUpCircle className="w-7 h-8" />
                            <span className="sr-only">Top</span>
                        </button>
                    </div>
                </div>
            ) : (
                <div id="sticky-banner"
                     className="bg-white-80 h-12 fixed top-0 start-0 z-50 flex justify-between w-full p-4">
                    <div className="flex items-center justify-center mx-auto w-full flex-wrap ">
                        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                            <span
                                className="inline-flex p-1 me-3 bg-gray-200 rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center flex-shrink-0">
                                <svg className="w-3 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                    <path
                                        d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
                                </svg>
                                <span className="sr-only">Light bulb</span>
                            </span>
                            {randomBanner && (
                                <span className=" w-full line-clamp-1 sm:block sm:w-auto ">
                                    <Link href={randomBanner.link} target="_blank">
                                        {randomBanner.title}
                                    </Link>
                                </span>
                            )}

                            {/*<span className="text-black-34 sm:hidden block ">*/}
                            {/*    <Link href={"https://www.facebook.com/istad.co"} target={"_blank"}*/}
                            {/*          className="inline font-medium text-primary underline underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline cursor-pointer pl-2">*/}
                            {/*        Learn more*/}
                            {/*    </Link>*/}
                            {/*</span>*/}
                        </p>
                    </div>
                    <div className="flex items-center">
                        <button onClick={scrollToTop} data-dismiss-target="#sticky-banner" type="button"
                                className="text-primary flex-shrink-0 inline-flex justify-center items-center hover:bg-gray-200 hover:text-primary rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                            <HiMiniArrowUpCircle className="w-7 h-8" />
                            <span className="sr-only">Top</span>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default BannerNavbar;
