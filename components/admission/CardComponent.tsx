import Link from "next/link";
import Image from "next/image";
import { useGetStudyProgramsQuery } from "@/redux/features/student-admission/study-program/studyProgram";
import Lottie from "lottie-react";
import ErrorLoadingData from "@/components/imageJson/ErrorLoadingData.json";
import React from "react";
import Loading2 from "@/components/imageJson/Loading2.json";

const CardComponent = () => {
    const { data: studyPrograms, isLoading, error } = useGetStudyProgramsQuery();

    console.log({ studyPrograms, isLoading, error }); // Added log to check data

    // Loading state
    if (isLoading) {
        return (
            <main className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 flex flex-col items-center justify-center">
                <Lottie className="w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 2xl:w-80" animationData={Loading2}/>
                <h2 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] text-error tracking-wide font-semibold text-center">Data Loading...</h2>
            </main>
        );
    }

    // Error state
    if (error) {
        return (
            <main className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 flex flex-col items-center justify-center">
                <Lottie className="w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 2xl:w-80" animationData={ErrorLoadingData}/>
                <h2 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] text-error tracking-wide font-semibold text-center">
                    Error Loading Study Programs!! 🙏
                </h2>
            </main>
        );
    }

    // No data state
    if (!studyPrograms || studyPrograms.length === 0) {
        return (
            <main className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 flex flex-col items-center justify-center">
                <Lottie className="w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 2xl:w-80" animationData={ErrorLoadingData}/>
                <h2 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] text-error tracking-wide font-semibold text-center">Study programs are unavailable!! 🙏</h2>
            </main>
        );
    }

    // Render the study programs
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {studyPrograms.map((program:any, index:any) => (
                    <article key={index} className="relative h-full" data-aos="fade-up" data-aos-duration="1000">
                        <Link href={`/academics/${program.alias}`}>
                            <div>
                                <Image
                                    src={program.logo || '/default-logo.png'}
                                    alt={`Logo of ${program.studyProgramName}`}
                                    width={500}
                                    height={600}
                                    className="w-full h-[280px] object-cover rounded-lg"
                                />
                                <header className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-start px-10">
                                    <div className="flex flex-col items-start text-white p-4 sm:p-6 lg:p-8 hover:scale-105 transition-transform">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold items-start" data-aos="fade-down">{program.studyProgramName}</h3>
                                        <div className="h-1 w-12 sm:w-16 md:w-24 bg-error bg-left my-2" data-aos="fade-right"></div>
                                        <p className="text-md sm:text-md md:text-lg tracking-wide line-clamp-4 md:line-clamp-none" data-aos="fade-up">{program.description}</p>
                                    </div>
                                </header>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default CardComponent;
