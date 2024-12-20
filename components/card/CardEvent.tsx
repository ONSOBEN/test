import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const CardEvent = () => {
    return (
        <>
            <Head>
                <title>Scholarship Announcement - Digital IT Opening Ceremony</title>
                <meta name="description" content="Join us for the Digital IT Opening Ceremony for the new scholarship students for the academic year 2024-2025. 60 slots available at the Center of Science and Technology Advanced Development (CSTAD)." />
                <meta name="keywords" content="Scholarship, IT, Digital Opening Ceremony, CSTAD, 2024-2025" />
            </Head>
            <article className="bg-white-80 max-w-full mx-auto m-8" data-aos="flip-left">
                <Link href="https://www.facebook.com/photo/?fbid=378093634971143&set=pcb.378098601637313&__cft__[0]=AZUXj3I27MKmVMo_F6y6bnPQDGbQfjnk0yOV6_0-zgaIjT8crm_nxnT7eAS3loWEUKEqiaXheniDZ34nbeMF9fNA8WSTv_Hzet_OkL9QhG0nGxcbQMb1a8tYkOwPDFeLMijTAwyyEKEkvaO09VpgahwNvyHdCkC08OoVzNtmeXCWvjSbYdLjwY93Np-4YBkpAir5Vl2aAGh5sQBNIbr7GRA3&__tn__=*bH-R" target="_blank" role="button" className="flex flex-col items-center bg-white-80 border border-gray-200 rounded-sm shadow-sm md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="relative w-full h-[100px] sm:w-[300px] sm:h-[150px] md:w-[400px] md:h-[200px] lg:w-[500px] lg:h-[250px] xl:w-[600px] xl:h-[300px] 2xl:w-[700px] 2xl:h-[350px] md:flex-1">
                        <Image
                            src="https://lms-api.istad.co/api/v1/medias/view/3e3b35c8-44d6-470a-acfb-bc6fd2570944.png"
                            alt="Scholarship Announcement - Digital IT Opening Ceremony"
                            className="object-cover w-full h-full md:rounded-none md:rounded-l-lg"
                            layout="fill"
                        />
                    </div>
                    <div className="flex flex-col items-center p-2 leading-normal w-auto sm:w-[300px] mt-4">
                        <header className="hover:text-primary ml-4 items-center">
                            <h2 className="hover:text-primary khmer-font text-xl sm:3xl font-bold text-start text-black-34 mb-4">
                                ពិធីបើកបវេសនកាល ឌីជីថល (អាយធី)
                            </h2>
                            <p className="hover:text-primary khmer-font mb-6 font-normal text-gray-80 text-center">
                                ពិធីបើកបវេសនកាលថ្មី សម្រាប់និស្សិតអាហារូបករណ៍ព័ត៌មានវិទ្យាឆ្នាំសិក្សា ២០២៤ - ២០២៥ ចំនួន ៦០ កន្លែងរបស់មជ្ឈមណ្ឌល សាយអិនស៍ អេន ថេកណឡជី អ៊ែតវ៉ានស៍ ឌីវេឡុបម៉ិន (CSTAD)...
                            </p>
                        </header>
                        <footer className="hover:text-primary flex items-center text-sm text-primary dark:text-gray-400">
                            <span>Phnom Penh</span>
                            <span className="mx-2">|</span>
                            <span>May 9, 2024</span>
                        </footer>
                    </div>
                </Link>
            </article>
        </>
    );
};

export default CardEvent;
