"use client";
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import AOS from "aos";
import ProgramComponentSkeleton from "@/components/acedemicSkeleton/ProgramComponentSkeleton";
import CardComponent from "@/components/admission/CardComponent";

const ProgramComponent = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 120,
            once: true,
        });
    }, []);

    return (
        <>
            <Head>
                <title>Our Programs | Your Website Name</title>
                <meta name="description" content="Explore our wide range of programs and find what interests you the most. From undergraduate to postgraduate courses, we have something for everyone." />
                <meta name="keywords" content="programs, courses, education, undergraduate, postgraduate" />
            </Head>
            <main>
                {loading ? <ProgramComponentSkeleton/> :
                    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 mb-8 ">
                        <header>
                            <h5
                                data-aos="fade-up"
                                className="text-lg sm:text-xl md:text-2xl  font-semibold text-start text-error">
                                OUR PROGRAM
                            </h5>
                            <h1
                                data-aos="fade-down"
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-primary ">
                                WHAT ARE YOU INTERESTED IN?
                            </h1>
                        </header>
                        {/*card from api component start here*/}
                        <div>
                            <CardComponent/>
                        </div>
                        {/*card from api component end here*/}
                    </section>
                }
            </main>
        </>
    );
};

export default ProgramComponent;
