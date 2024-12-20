"use client";
import Image from 'next/image';
import React, {useEffect, useState} from 'react';
import {FaFacebook, FaTelegram, FaYoutube} from "react-icons/fa";
import Link from "next/link";
import {IoCall} from "react-icons/io5";
import {SiGmail, SiTiktok} from "react-icons/si";
import FooterComponentSkeleton from "@/components/footer/FooterComponentSkeleton";


export default function FooterComponent() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <footer>
            {loading ? <FooterComponentSkeleton/> : (
                <section className="  px-3 pt-4 bg-primary lg:px-9 border-t-2 text-start sm:text-start md:text-start">
                    <div className=" sm:container mx-auto grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">

                        {/*Logo and description start here */}
                        <div className="flex flex-col items-center mt-8">
                            <Link href="/" className="mb-2">
                                <Image
                                    src="/school-logo/istad-lms-logo.png" // change it later
                                    alt="logo-istad-lms"
                                    width={120}
                                    height={120}
                                    className="cstadlogo"
                                />
                            </Link>
                            <div className="text-lg font-bold tracking-wide text-white text-center">
                                Institute of Science and Technology Advanced Development
                            </div>
                        </div>
                        {/*Logo and description end here */}

                        {/* column 1 start here */}
                        <div className="flex flex-col items-center md:items-start sm:items-center gap-2 text-lg text-white-80">
                            <p className="text-base font-bold tracking-wide pt-3">EXPLORE</p>
                            <Link href="/" >Home</Link>
                            <Link href={"/about-us"}>About Us</Link>
                            <Link href={"/academics"}>Academics</Link>
                            <Link href={"/admission"}>Admission</Link>
                            <Link href={"https://istad.co/page/course"} target={"_blank"}>Short Course</Link>
                            <Link href={"/scholarship"}>Scholarship</Link>
                            <Link href={"/news-event"}>News & Events</Link>
                            <Link href={"https://lms-admin.istad.co/login"} target={"_blank" }>Learning Portal</Link>
                        </div>
                        {/* column 1 end here */}

                        {/*column 2 start here*/}
                        <div className="flex flex-col items-center md:items-start text-white-80 text-lg mt-3 ">
                        {/*address start here*/}
                            <div>
                                <p className="flex flex-col items-center md:items-start text-base font-bold tracking-wide mb-3">ADDRESS</p>

                                <Link
                                    className="text-base text-center tracking-wide text-white-80"
                                    href={"https://www.google.com/maps/dir/11.5762226,104.9272048/11.5784119,104.90279/@11.5682273,104.900408,14z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu"}>
                                    No. 24, Street 562,Sangkat Boeung <br/>
                                    Kak I,Khan Toul Kork,Phnom Penh,<br/>
                                    Cambodia<br/>
                                </Link>

                            </div>
                        {/* address end here*/}

                            {/*contact start here*/}
                            <div className={"flex flex-col items-center md:items-start mt-3 "}>
                                <p className="text-base font-bold tracking-wide">
                                    CONTACTS
                                </p>
                                <div className="flex flex-col items-center md:items-start mt-3">
                                    {/* email start here */}
                                    <div className="flex items-center ">
                                        <SiGmail className="mr-2 mt-1"/>
                                        <Link href="mailto:info.istad@gmail.com" title="send email" className="mr-2">
                                            info.istad@gmail.com
                                        </Link>
                                    </div>
                                    {/* email end here */}

                                    {/*phone start here*/}
                                    <div className="flex items-center flex-col">
                                        <div className="flex items-center">
                                            <IoCall className="mr-2 mt-1"/>
                                            <Link href="tel:+85595990910">(+855) 95-990-910</Link>
                                        </div>
                                        <div className="flex items-center">
                                            <IoCall className="mr-2 mt-1"/>
                                            <Link href="tel:+85593990910">(+855) 93-990-910</Link>
                                        </div>
                                    </div>
                                    {/*phone end here*/}

                                    {/*social media start here*/}
                                    <div className="flex space-x-3 text-2xl mt-3 items-center">
                                        <Link href="https://www.facebook.com/istad.co/?ref=embed_page"
                                              target={"_blank"}>
                                            <FaFacebook className="fa-brands fa-facebook"/>
                                        </Link>
                                        <Link href="https://www.youtube.com/@istad7665" target={"_blank"}>
                                            <FaYoutube className="fa-brands fa-youtube"/>
                                        </Link>
                                        <Link href="https://t.me/istadkh" target={"_blank"}>
                                            <i></i>
                                            <FaTelegram className="fa-brands fa-telegram"/>
                                        </Link>
                                        <Link href="https://www.tiktok.com/@cstad369?lang=en" target={"_blank"}
                                              className={"rounded-full bg-white-80 text-primary"}
                                        >
                                            <i></i>
                                            <SiTiktok className={"h-[24px] w-[24px] p-1"}/>
                                        </Link>
                                    </div>
                                    {/*social media end here*/}
                                </div>
                            </div>
                            {/*contact end here*/}
                        </div>
                        {/* column 2 end here */}

                        {/* column 3 start here */}
                        <div className="flex flex-col items-center md:items-start sm:items-center gap-2 text-lg text-white mt-3">

                            {/*alumni start here*/}
                            <div className="flex flex-col md:flex-row items-center md:items-start sm:items-center">
                                <div className="mb-4 md:mb-0 md:mr-4">
                                    <Image
                                        src="/project-logo/alumini-white.png"
                                        alt="Appstore Button"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div>
                                    <Link href="https://alumni.istad.co/auth/login" target="_blank">
                                        <p className="text-base font-bold tracking-wide text-center md:text-left">VISIT ALUMNI SITE</p>
                                        <p className="pt-2 text-center md:text-start sm:items-center">Alumni Application</p>
                                    </Link>
                                </div>
                            </div>
                            {/*alumni end here*/}


                            {/* app start here */}
                            <div className="mt-3">
                                <p className="text-base font-bold tracking-wide text-white">
                                    CSTAD APP
                                </p>
                                <div className="flex flex-wrap justify-start sm:justify-startz gap-1 mt-3">
                                    <Link
                                        href="https://apps.apple.com/kh/app/cstad-mobile/id6463835798"
                                        className="flex"
                                    >
                                        <Image
                                            src="https://social.webestica.com/assets/images/app-store.svg"
                                            alt="Appstore Button"
                                            width={120}
                                            height={40}
                                        />
                                    </Link>
                                    <Link
                                        href="https://play.google.com/store/apps/details?id=co.istad.mobile.istad_moblie&pcampaignid=web_share"
                                        className="flex"
                                    >
                                        <Image
                                            src="https://social.webestica.com/assets/images/google-play.svg"
                                            alt="Playstore Button"
                                            width={120}
                                            height={40}
                                        />
                                    </Link>
                                </div>
                            </div>
                            {/* app end here */}

                            {/*    facebook follow start here*/}
                            <div className="flex flex-col items-center md:items-start sm:items-center w-full  ">
                                <p className="text-xl font-bold mt-3">Follow Us</p>
                                <iframe
                                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fistad.co&amp;tabs&amp;width=255&amp;height=130&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=536767018150991"
                                    width="255"
                                    height="130"
                                    className="border-none overflow-hidden mt-3"
                                    scrolling="no"
                                    frameBorder="0"
                                    allowFullScreen
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                ></iframe>
                            </div>

                            {/*    facebook follow end here*/}


                        </div>
                        {/* column 3 here */}
                    </div>

                    {/*footer bottom start here*/}
                    <div className="text-center pt-5 pb-5 border-t lg:flex-row">
                        <p className="text-base text-white tracking-wide">
                            © 2024 Center of Science and Technology Advanced Development | All Rights Reserved
                        </p>
                    </div>
                    {/*footer bottom end here*/}
                </section>
            )}
        </footer>
    );
}
