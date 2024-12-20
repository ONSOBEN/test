"use client";
import Image from 'next/image';
import {useEffect} from "react";
import AOS from "aos";

const   EventITE = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 120,
            once: true,
        });
    }, []);

    const events = [
        {
            id: 1,
            src: "/ite-image/closing.png",
            alt: "Closing Ceremony",
            title: "Closing Ceremony",
            description: "Center of Science and Technology Advanced Development always prepares the closing ceremony at the end of basic course and advanced course of ITE generation. Students represent their final project groups with a meaningful presentation and video demonstration.",
        },
        {
            id: 2,
            src: "/ite-image/exam-image.png",
            alt: "Entrance Exam",
            title: "Entrance Exam",
            description: "Your ultimate resource for preparing and excelling in entrance exams. Find study guides, practice tests, and expert tips to boost your confidence and score high.",
        },
        {
            id: 3,
            src: "/ite-image/interview.png",
            alt: "interview",
            title: "Interview",
            description: "Achieve interview success with our extensive collection of resources. Access practice questions, strategies, and expert guidance to ace your next interview.",
        },
        {
            id: 4,
            src: "https://lms-api.istad.co/api/v1/medias/view/dca1f28f-f366-4b04-9ad0-f62cfbb32875.png",
            alt: "Orientation Day",
            title: "Orientation Day",
            description: "Your essential guide to Orientation Day! Discover everything you need to know about campus life, activities, and resources to kick-start your journey.",
        },
        {
            id: 5,
            src: "/ite-image/workshop1.png",
            alt: "Workshop",
            title: "Workshop",
            description: "Immerse yourself in an enriching workshop experience. Gain practical skills, hands-on learning, and valuable insights from industry experts.",
        },
        {
            id: 6,
            src: "/ite-image/special.png",
            alt: "Special Lecture",
            title: "Special Lecture",
            description: "oin our distinguished special lecture series featuring renowned speakers and thought leaders. Explore diverse topics and gain valuable insights into current trends and innovations.",
        },
    ];

    return (
        <div

            className=" sm:rounded-md max-w-6xl mx-auto p-4 space-y-10">
            {events.map(event => (
                <section
                    data-aos="fade-right"
                    key={event.id} className="relative w-full rounded-lg">
                    <div className="absolute inset-0 grid grid-cols-2 items-start justify-start z-10 p-5 md:p-12  ">
                        <div className="grid col-span-2 ">
                            <h2
                                data-aos="fade-up-right"
                                className=" text-2xl sm:text-3xl md:text-4xl font-bold text-white">{event.title}</h2>
                            <p
                                data-aos="fade-down"
                                className=" mt-1 text-base line-clamp-2 sm:line-clamp-none sm:text-lg   text-white text-start">
                                {event.description}
                            </p>
                        </div>
                    </div>
                    <div className="w-full">
                        <Image
                            src={event.src}
                            alt={event.alt}
                            width={1920}
                            height={1080}
                            className={"w-full h-full object-cover rounded-lg"}
                        />
                    </div>
                </section>
            ))}
        </div>
    );
};

export default EventITE;
