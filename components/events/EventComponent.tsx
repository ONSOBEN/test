"use client";
import React, {useEffect, useState} from 'react';
import CardEvent from "@/components/card/CardEvent";
import AOS from "aos";
import EventComponentSkeleton from "@/components/events/EventComponentSkeleton";
import MainNewsEvent from "@/components/events/MainNewsEvent";

const EventComponent = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 120,
            once: true,
        });
    }, []);




    return (
        <section>
            {loading ? <EventComponentSkeleton/> :
                <div className="container pb-8 pt-8">


                    <CardEvent/>

                    <div>
                        <MainNewsEvent/>
                    </div>
                </div>
            }
        </section>


    );
};

export default EventComponent;
