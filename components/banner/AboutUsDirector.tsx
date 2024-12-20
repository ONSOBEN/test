"use client";
import Image from 'next/image';
import React, {useEffect, useState} from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHandPointRight, faStar} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import DirectorSkeleton from "@/components/aboutUs/DirectorSkeleton";



const DirectorMessage = () => {


    useEffect(() => {
        AOS.init({
            duration: 1200,
            offset: 120,
            once: true,
        });
    }, []);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching
        // const timer = setTimeout(() => {
        setLoading(false);
        // }, 2000);

        // return () => clearTimeout(timer);
    }, []);

    const [language, setLanguage] = useState('kh');

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
    };


    return (
        <section>
            {loading ? <DirectorSkeleton/> : (
                <section className="container py-9 ">
                    <section className=" sm:container flex justify-end space-x-4">
                        <button
                            onClick={() => handleLanguageChange('kh')}
                            className={`btn ${language === 'kh' ? 'btn-active text-primary' : ''} text-[18] tracking-wide font-bold text-black-34`}
                        >
                            Khmer
                        </button>
                        <span>|</span>
                        <button
                            onClick={() => handleLanguageChange('en')}
                            className={`btn ${language === 'en' ? 'btn-active text-primary' : ''} text-[18] tracking-wide font-bold text-black-34`}
                        >
                            English
                        </button>
                    </section>


                    {language === 'kh' && (
                        <section>


                            <section className=" sm:container my-5 text-black-34">
                                <h1
                                    data-aos="fade-up-right"
                                    className=" text-black-34 text-center text-2xl sm:text-3xl md:text-4xl font-bold moul-font pt-10"
                                >
                                    សាររបស់លោកនាយក
                                </h1>
                                <div
                                    className=" sm:container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center pt-4">
                                    <div
                                        data-aos="fade-down-right"
                                        className="md:col-span-2 lg:col-span-2"
                                    >
                                        {/*p 1 start here*/}
                                        <p className="khmer-font text-base sm:lg md:xl lg:text-[18px] leading-8 text-justify">
                                            កាលពីបីឆ្នាំមុន ក្នុងឆ្នាំ 2020 ខ្ញុំបាទ
                                            <span className={"h-khmer module-font font-bold px-4"}>
                                            ចិន ភីរម្យ
                                        </span>
                                            នាយករបស់ <span className={"h-khmer module-font font-bold px-4"}>មជ្ឈមណ្ឌល
                                            សាយអិនស៍ អេន ថេកណឡជី អ៊ែតវ៉ានស៍ ឌីវេឡុបម៉ិន (iSTAD) </span>
                                            និងគណៈកម្មារការក្រុមប្រឹក្សាភិបាលផ្សេងទៀតបានពិភាក្សាអំពីការបើកកន្លែងមួយដែលនឹងនាំនិស្សិតកម្ពុជាទៅរកវិទ្យាសាស្ត្រ
                                            និងបច្ចេកវិទ្យាកម្រិតខ្ពស់មួយ ដែលរួមមានទាំងការស្រាវជ្រាវ
                                            និងការអភិវឌ្ឍជំនាញឌីជីថល ជាមួយនឹងការធានាឱកាសការងារដ៏ល្អដល់
                                            និស្សិតដែលបានបញ្ចប់ការសិក្សា ទៅតាមស្ថាប័នរដ្ឋនិងឯកជន។
                                            កិច្ចពិភាក្សាបានបញ្ចប់ដោយការសម្រេចចិត្តបើកស្ថាប័នអប់រំដែលនឹងផ្តល់ផលវិជ្ជមាន
                                            និងការរីកចម្រើនដល់ធនធានមនុស្សផ្នែកឌីជីថល និងលើកកម្ពស់វិស័យ ICT
                                            ក្នុងប្រទេសម្ពុជាដើម្បី
                                            ឱ្យសមស្របទៅតាមផែនការយុទ្ធសាស្រ្តរបស់រាជ្យរដ្ឋាភិបាលកម្ពុជា។
                                            ក្នុងនាមខ្ញុំជានាយករបស់ iSTAD
                                            ខ្ញុំសូមស្វាគមន៍យ៉ាងកក់ក្តៅដល់អ្នកទាំងអស់គ្នាដែលបានក្លាយនិស្សិតជំនាន់ទី2
                                            នៃកម្មវិធីបណ្តុះបណ្តាលអាហារូបករណ៍ព័ត៌មានវិទ្យារបស់ iSTAD។
                                            ខ្ញុំសូមយកឱកាសនេះដើម្បីអបអរសាទរដល់អ្នក
                                        </p>
                                    </div>
                                    <div
                                        className="md:col-span-1 lg:col-span-1"
                                    >
                                        <Image
                                            priority
                                            src="https://lms-api.istad.co/api/v1/medias/view/6a4e078a-b8d0-46d6-ada4-a9565c328b92.png"
                                            alt="Mr. CHEN PHIRUM"
                                            title="Mr. CHEN PHIRUM"
                                            width={600}
                                            height={600}
                                            data-aos="flip-right"
                                            className="object-cover w-full h-full"
                                            layout="responsive"
                                        />
                                    </div>

                                    {/* 3 images start here */}
                                    <div
                                        className="md:col-span-1 lg:col-span-1"
                                    >
                                        <Image
                                            priority
                                            src="https://lms-api.istad.co/api/v1/medias/view/6070c47c-0f64-4fad-90a8-9cfa6c8015bb.png"
                                            alt="Mr. CHEN PHIRUM"
                                            title="Mr. CHEN PHIRUM"
                                            width={600}
                                            height={600}
                                            data-aos="flip-right"
                                            className="object-cover w-full h-full"
                                            layout="responsive"
                                        />
                                    </div>

                                    <div
                                        className="md:col-span-1 lg:col-span-1"
                                    >
                                        <Image
                                            priority
                                            src="https://lms-api.istad.co/api/v1/medias/view/285cfa75-123c-490e-90d3-b81cf227d805.png"
                                            alt="Mr. CHEN PHIRUM"
                                            title="Mr. CHEN PHIRUM"
                                            width={600}
                                            height={600}
                                            data-aos="flip-right"
                                            className="object-cover w-full h-full"
                                            layout="responsive"
                                        />
                                    </div>

                                    <div
                                        className="md:col-span-1 lg:col-span-1"
                                    >
                                        <Image
                                            priority
                                            src="https://lms-api.istad.co/api/v1/medias/view/b4470c71-b5e2-4d9a-9791-30c84bbbf663.png"
                                            alt="Mr. CHEN PHIRUM"
                                            title="Mr. CHEN PHIRUM"
                                            width={600}
                                            height={600}
                                            data-aos="flip-right"
                                            className="object-cover w-full h-full"
                                            layout="responsive"
                                        />
                                    </div>
                                    {/* 3 images end here */}

                                    <div
                                        className="md:col-span-1 lg:col-span-1"
                                    >
                                        <Image
                                            priority
                                            src="https://lms-api.istad.co/api/v1/medias/view/dba02acd-ebe2-4a4d-b980-c70a6eb6348b.png"
                                            alt="Mr. CHEN PHIRUM"
                                            title="Mr. CHEN PHIRUM"
                                            width={600}
                                            height={600}
                                            data-aos="fade-down-right"
                                            className="object-cover w-full h-full"
                                            layout="responsive"
                                        />
                                    </div>
                                    <div
                                        className="md:col-span-2 lg:col-span-2"
                                    >
                                        <p
                                            data-aos="fade-down-right"
                                            className="khmer-font text-base sm:lg md:xl text-justify lg:text-[18px] leading-8">
                                            {/*p2 start here*/}
                                            ទាំងអស់គ្នាដែលបានទទួលអាហារូបករណ៍របស់ iSTAD ដោយជោគជ័យ។
                                            នេះគឺជាសមិទ្ធិផលដ៏អស្ចារ្យមួយ ហើយវាគឺជាសក្ខីភាពបញ្ជាក់ពីការខិតខំប្រឹងប្រែង
                                            ការលះបង់ និងការប្តេជ្ញាចិត្តចំពោះការសិក្សារបស់អ្នកទាំងអស់គ្នា។
                                            នៅក្នុងយុគសម័យឌីជីថលនាពេលបច្ចុប្បន្ននេះ
                                            បច្ចេកវិទ្យាបានដើរតួនាទីយ៉ាងសំខាន់ក្នុងជីវិតប្រចាំថ្ងៃរបស់យើង
                                            ហើយក្នុងនាមអ្នក ជាអ្នកដឹកនាំនាពេលអនាគត អ្នកមាន
                                            តួនាទីយ៉ាងសំខាន់ក្នុងការសម្រួចខ្លួនឱ្យស្របទៅតាមទិសដៅនៃចក្ខុវិស័យមួយនេះ
                                            មិនថាអ្នកកំពុងបន្តអាជីពផ្នែកព័ត៌មានវិទ្យា
                                            ឬគ្រាន់តែប្រើប្រាស់បច្ចេកវិទ្យាដើម្បីសម្រួលនៅក្នុងការរស់នៅផ្ទាល់ខ្លួនតែប៉ុណ្ណោះទេ
                                            ចំណេះដឹង ជំនាញ និងអាជីពរបស់អ្នកគឺមានតម្លៃមិនអាចកាត់ថ្លៃបានទេ។
                                            នៅពេលអ្នកចាប់ផ្តើមសិក្សាផ្នែក IT
                                            ខ្ញុំសូមលើកទឹកចិត្តអ្នកឱ្យបើកចិត្តឱ្យបានទូលាយដើម្បីស្វែងរកបញ្ហាប្រឈមថ្មីៗ
                                            ដែលអ្នកត្រូវស្វែងយល់ពីបច្ចេកវិទ្យាដែលកំពុងរីកចម្រើន
                                        </p>
                                    </div>
                                    <div
                                        className="text-content md:col-span-2 lg:col-span-3">
                                        <p
                                            data-aos="fade-down"
                                            className="khmer-font text-base sm:lg md:xl text-justify lg:text-[18px] leading-8">
                                            ហើយសហការជាមួយមិត្តភ័ក្តិ និងក្រុមការងាររបស់អ្នក ពិសេស លោកគ្រូ អ្នកគ្រូ
                                            ដែលអាចដឹកនាំអ្នក ទៅកាន់ក្តីស្រមៃរបស់អ្នក។

                                            និស្សិត iSTAD
                                            ទាំងអស់មិនត្រឹមតែត្រូវបានបណ្តុះបណ្តាលជាមួយនឹងជំនាញបច្ចេកទេសទំនើបប៉ុណ្ណោះទេ
                                            ប៉ុន្តែថែមទាំង ត្រូវបានបង្រៀនឱ្យមានការប្តេជ្ញាចិត្តខ្ពស់ មានភាពជាអ្នកដឹកនាំ
                                            ការសហការជាក្រុម ឯករាជ្យភាព ទំនួលខុសត្រូវ ខ្ពស់ និងក្លាយជាអ្នក
                                            ចែករំលែកដល់អ្នកដទៃ ដ៏ឆ្នើមមួយរូប។
                                            ជាមួយគ្នានេះ
                                            ខ្ញុំក៏ចង់សង្កត់ធ្ងន់អំពីសារៈសំខាន់នៃការកសាងមូលដ្ឋានគ្រឹះដ៏រឹងមាំនៅក្នុងផ្នែកព័ត៌មានវិទ្យា
                                            ។ គោលគំនិតស្នូលនៃវិទ្យាសាស្ត្រកុំព្យូទ័រ ការសរសេរកម្មវិធី
                                            និងការវិភាគទិន្នន័យនឹងផ្តល់ឱ្យអ្នកនូវគ្រឹះដ៏រឹងមាំមួយសម្រាប់កសាងចំណេះដឹង
                                            និងជំនាញរបស់អ្នក ហើយនឹងជួយអ្នកបានយ៉ាងល្អពេញមួយអាជីពរបស់អ្នក។
                                            iSTAD នឹងក្លាយជាវិទ្យាស្ថានព័ត៌មានវិទ្យាកម្រិតខ្ពស់មួយដែលមាន
                                            បេសកកម្មក្នុងការផ្តល់នូវវិធីសាស្រ្តបង្រៀនថ្មីៗ ជាមួយនឹងការបណ្តុះបណ្តាល
                                            និងការតម្រង់ទិសប្រកបដោយគុណភាពខ្ពស់ ដើម្បីបង្កើតសមត្ថភាព
                                            និងអាជីពរបស់អ្នកជំនាញព័ត៌មានវិទ្យានៅកម្ពុជា, ការផ្តល់ការប្រឹក្សា
                                            និងការផ្សាភ្ជាប់សិក្ខាកាមរបស់ iSTAD ទៅកាន់អាជីពព័ត៌មានវិទ្យាឈានមុខ
                                            ហើយតែងតែជាកន្លែងដែលអ្នកអាចរីកចម្រើនដោយខ្លួនឯង និងប្រកបដោយវិជ្ជាជីវៈ
                                            ដើម្បីសម្រេចបាននូវក្តីសុបិនរបស់អ្នក
                                            និងក្លាយជាគម្រូដ៏ល្អបំផុតសម្រាប់ខ្លួនអ្នក។
                                            ជាចុងក្រោយ ខ្ញុំសូមធានាដល់អ្នកទាំងអស់គ្នាថា iSTAD នឹងនៅជាមួយអ្នក
                                            គាំទ្រអ្នកគ្រប់ជំហាន។ យើងមានក្រុមសាស្ត្រាចារ្យ និងបុគ្គលិកដែលមានទេពកោសល្យ
                                            ជំនាញវិជ្ជាជីវៈពិតប្រាកដ ដែលមានការប្តេជ្ញាចិត្តចំពោះភាពជោគជ័យរបស់អ្នក
                                            ហើយយើងនិងផ្តល់ជូននូវធនធាន និងការគាំទ្រជាច្រើន
                                            ដើម្បីជួយអ្នកឱ្យសម្រេចបាននូវគោលដៅរបស់អ្នក។ ពិសេសមានដៃគូសហប្រតិបត្តិការ
                                            ជាច្រើន ទាំងស្ថាប័នរដ្ឋ និង ឯកជន ទទួលយកអ្នក នៅពេលដែលបញ្ចប់ការសិក្សា និង
                                            មានឱកាស អភិវឌ្ឍន៍ ចំណេះដឹង ឱ្យកាន់តែខ្ពស់ ក្នុងកម្រិតថ្នាក់អនុបណ្ឌិត បណ្ឌិត
                                            នៅ បរទេសទៀតផង។
                                        </p>
                                    </div>

                                </div>
                                {/* card start here */}
                                <div
                                    data-aos="flip-right"
                                    className="flex flex-col items-center justify-center pt-12">
                                    <Link href="https://www.facebook.com/chen.phirum.9"
                                          target={"_blank"}
                                          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <Image
                                            className="object-cover w-full h-64 rounded-t-lg md:rounded-none md:rounded-s-lg md:w-64"
                                            src={"https://lms-api.istad.co/api/v1/medias/view/d1e0988f-9151-4eff-a1a6-e7efe3a1df10.png"}
                                            alt={"Mr. CHEN PHIRUM Image"}
                                            width={256} // Optional if you want to control it via Tailwind classes
                                            height={256} // Optional if you want to control it via Tailwind classes

                                        />
                                        <div
                                            className="flex flex-col items-center justify-between p-4 leading-normal w-full">
                                            <h5
                                                data-aos="flip-right"
                                                data-aos-easing="ease-out-cubic"
                                                data-aos-duration="1500"
                                                className="mb-2 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                            <span
                                                                className="moul-font font-bold hover:text-primary text-black-34 border-b-2 hover:border-primary">
                                                                <span className="pr-1">
                                                                    <FontAwesomeIcon icon={faStar}
                                                                                     className="w-[20px] h-[20px] text-amber-400 rounded-full p-1 "/>

                                                                </span>
                                                                លោក ចិន ភីរម្យ
                                                            </span>
                                            </h5>
                                            <p
                                                data-aos="fade-up"
                                                data-aos-duration="2000"
                                                className="text-black-34 mb-3 font-normal dark:text-gray-400 hover:text-primary py-2 ">
                                                “ ការផ្តល់ឱកាសឱ្យខ្លួនឯងជារឿងទីមួយ ការស្វែករកឱកាសជារឿងទីពីរ
                                                ការចាប់ឱកាសជារឿងទីបី គោលដៅមិនដែលដូរទេ
                                                ជាទូទៅខ្លួនអ្នកជាអ្នកផ្លាស់ប្តូរគោលដៅ ”
                                            </p>
                                            <p
                                                data-aos="fade-up"
                                                data-aos-anchor-placement="top-bottom" className="mb-0 hover:text-error items-start justify-start font-bold border-b-2 hover:border-primary text-sm">
                                                     <span className="pr-2">
                                                  <FontAwesomeIcon icon={faHandPointRight} size="sm"
                                                                   className="hover:text-error    "/>
                                                     </span>

                                                ពាក្យស្លោករបស់លោកគ្រូនាយក។</p>
                                        </div>
                                    </Link>
                                </div>


                            </section>


                        </section>

                    )}

                    {language === 'en' && (
                        <section>

                            <div className=" sm:container my-5 text-black-34 ">
                                <h1
                                    data-aos="fade-up-right"
                                    className="text-black-34 text-center text-2xl sm:text-3xl md:text-4xl font-bold moul-font mt-10 "
                                >
                                    DIRECTOR’S MESSAGE
                                </h1>
                                <div
                                    className="sm:container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center pt-4">
                                    <div

                                        className="md:col-span-2 lg:col-span-2"
                                    >
                                        <p
                                            data-aos="fade-down-right"
                                            className="text-base sm:lg md:xl text-justify lg:text-[18px] leading-8">
                                            Three years ago, in 2020, I am <span
                                            className={"font-bold px-4"}> CHEN PHIRUM</span>, Director of <span className={"font-bold px-4"}>Institute of Science and Technology Advanced Development - ISTAD </span> , and others
                                            board committee discussed opening a place which will route Cambodian students to
                                            advanced science and technology, research, and development of digital skills and
                                            our graduates have been guaranteed excellent job opportunities with the public
                                            and private
                                            institution. The discussion ended with a decision to open an institution that
                                            provides positive impacts and grows to Cambodia is digital human resources and
                                            promote ICT field and to align with the government is strategic plan in
                                            Cambodia.
                                            As the director of iSTAD, I want to take a moment to welcome you all to become a
                                            member of our Second Generation of ITE scholarship training program of iSTAD. I
                                            want to take it as a chance to congratulate you all who have been awarded our
                                            scholarships.

                                        </p>
                                    </div>
                                    <div
                                    >
                                        <Image
                                            priority
                                            src="https://lms-api.istad.co/api/v1/medias/view/6a4e078a-b8d0-46d6-ada4-a9565c328b92.png"
                                            alt="Mr. CHEN PHIRUM"
                                            title="Mr. CHEN PHIRUM"
                                            width={250}
                                            height={250}
                                            data-aos="flip-right"
                                            className="object-cover w-full h-full"
                                            layout="responsive"
                                        />
                                    </div>

                                    {/* 3 images start here */}
                                    <div

                                        className="md:col-span-1 lg:col-span-1"
                                    >
                                        <Image
                                            priority
                                            src="https://lms-api.istad.co/api/v1/medias/view/6070c47c-0f64-4fad-90a8-9cfa6c8015bb.png"
                                            alt="Mr. CHEN PHIRUM"
                                            title="Mr. CHEN PHIRUM"
                                            width={600}
                                            height={600}
                                            data-aos="flip-right"
                                            className="object-cover w-full h-full"
                                            layout="responsive"
                                        />
                                    </div>
                                    <div
                                        className="md:col-span-1 lg:col-span-1"
                                    >
                                        <Image
                                            priority
                                            src="https://lms-api.istad.co/api/v1/medias/view/285cfa75-123c-490e-90d3-b81cf227d805.png"
                                            alt="Mr. CHEN PHIRUM"
                                            title="Mr. CHEN PHIRUM"
                                            width={600}
                                            height={600}
                                            data-aos="flip-right"
                                            className="object-cover w-full h-full"
                                            layout="responsive"
                                        />
                                    </div>
                                    <div
                                        className="md:col-span-1 lg:col-span-1"
                                    >
                                        <Image
                                            priority
                                            src="https://lms-api.istad.co/api/v1/medias/view/b4470c71-b5e2-4d9a-9791-30c84bbbf663.png"
                                            alt="Mr. CHEN PHIRUM"
                                            title="Mr. CHEN PHIRUM"
                                            width={250}
                                            height={250}
                                            data-aos="flip-right"
                                            className="object-cover w-full h-full"
                                            layout="responsive"
                                        />
                                    </div>
                                    {/* 3 images end here */}

                                    <div
                                        className="object-cover w-full h-full"
                                    >
                                        <Image
                                            priority
                                            src="https://lms-api.istad.co/api/v1/medias/view/dba02acd-ebe2-4a4d-b980-c70a6eb6348b.png"
                                            alt="Mr. CHEN PHIRUM"
                                            title="Mr. CHEN PHIRUM"
                                            width={250}
                                            height={250}
                                            data-aos="fade-down-right"
                                            className="object-cover w-full h-full"
                                            layout="responsive"
                                        />
                                    </div>
                                    <div
                                        className="md:col-span-2 lg:col-span-2"
                                    >
                                        <p
                                            data-aos="fade-down-right"
                                            className="text-base sm:lg md:xl text-justify lg:text-[18px] leading-8">
                                            This is an incredible achievement, and it is a testament to your hard work,
                                            dedication, and commitment to your studies.
                                            In today is digital age, technology plays a vital role in our daily lives, and
                                            as the future leaders of tomorrow, you have an important role to play in shaping
                                            the direction of this vision. Whether you are pursuing a career in IT or simply
                                            using technology to enhance your personal and professional lives, your
                                            knowledge, skills, and expertise are invaluable.
                                            As you begin your studies in IT, I encourage you to keep an open mind to seek
                                            out new challenges, you will explore emerging technologies, and collaborate with
                                            your peers and teammates, especially your instructors to make your ideas become
                                            visible.

                                        </p>
                                    </div>

                                    <div

                                        className="text-content md:col-span-2 lg:col-span-3"
                                    >
                                        <p
                                            data-aos="fade-down"
                                            className="text-base sm:lg md:xl text-justify lg:text-[18px] leading-8">
                                            All iSTAD students are not only trained with modern technical skills but also
                                            equipped with commitment, leadership, team collaboration, independence,
                                            responsibility, and becoming supporters and mentors of others.
                                            At the same time, I also want to emphasize the importance of building a strong
                                            foundation in IT. The core concepts of computer science, programming, and data
                                            analysis will provide you with a solid framework on which to build your
                                            knowledge and skills, and will serve you well throughout your career.
                                            iSTAD will become an advanced IT institute. The mission is to provide the latest
                                            methodology with high-quality training and mentoring to build up the capacity
                                            and career of IT experts in Cambodia. Consult and connect iSTAD trainees to top
                                            IT careers and will always be a place where you can grow personally, and
                                            professionally, achieve your dream and become the best version of yourself.
                                            Finally, I want to assure you that our iSTAD members are here to support you
                                            every step of the way. We have a talented and dedicated team of faculty and
                                            staff who are committed to your success, and we offer a range of resources and
                                            supportive services to help you achieve your goals.
                                            So, once again, welcome to our iSTAD, and the exciting world of IT. I look
                                            forward to working with each and every one of you and to helping you achieve
                                            your full potential. In particular, both public and private institutions accept
                                            you when graduating and has an opportunity to pursue master or PhD degree at
                                            abroad as well.

                                        </p>
                                    </div>
                                </div>

                                {/* card start here */}
                                <div
                                    data-aos="flip-right"
                                    className="flex flex-col items-center justify-center pt-12">
                                    <Link href="https://www.facebook.com/chen.phirum.9"
                                          target={"_blank"}
                                          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <Image
                                            className="object-cover w-full h-72 rounded-t-lg md:rounded-none md:rounded-s-lg md:w-64"
                                            src={"https://lms-api.istad.co/api/v1/medias/view/9eddbec0-d660-4834-bd07-f2ef7e87fd12.png"}
                                            alt={"Mr. CHEN PHIRUM Image"}
                                            width={256} // Optional if you want to control it via Tailwind classes
                                            height={288} // Optional if you want to control it via Tailwind classes
                                        />
                                        <div className="flex flex-col items-center justify-between p-4 leading-normal w-full">
                                            <h5
                                                data-aos="flip-right"
                                                data-aos-easing="ease-out-cubic"
                                                data-aos-duration="1500"
                                                className="mb-2 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <span className="font-bold hover:text-primary text-black-34 border-b-2 hover:border-primary">
                    <span className="pr-1">
                        <FontAwesomeIcon icon={faStar} className="w-[20px] h-[20px] text-amber-400 rounded-full p-1"/>
                    </span>
                    CHEN PHIRUM
                </span>
                                            </h5>
                                            <p
                                                data-aos="fade-up"
                                                data-aos-duration="2000"
                                                className="text-black-34 mb-3 font-normal dark:text-gray-400 hover:text-primary py-2">
                                                “Giving yourself a chance is the first priority, seeking for an opportunity is the second priority, seizing the opportunity is the third priority, the goal never changes, you are the one who usually changes the goal.”
                                            </p>
                                            <p
                                                data-aos="fade-up"
                                                data-aos-anchor-placement="top-bottom"
                                                className=" mb-0 hover:text-error items-start justify-start font-bold border-b-2 hover:border-primary text-sm">
                <span className="pr-2">
                    <FontAwesomeIcon icon={faHandPointRight} size="sm" className="hover:text-error"/>
                </span>
                                                DIRECTOR’S QUOTE.
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                                {/* card end here */}


                            </div>


                        </section>

                    )}
                </section>
            )}
        </section>
    );
};


export default DirectorMessage;
