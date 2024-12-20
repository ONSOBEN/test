"use client";
import { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleCollapse = (index:any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: 'How long do we need to complete the course?',
            answer: 'It is very flexible depending on the total course hour. You will study 8 hour/week for weekday or weekend class.',
        },
        {
            question: 'Does your school provide equipment for study?',
            answer: 'Of course, we provide full facilities during study both computers and Mac mini.',
        },
        {
            question: 'Does the school have any job opportunities?',
            answer: 'Of course, we have many partners and many job vacancies for you after completing some of the courses. The job recruitment rate are high.',
        },
        {
            question: 'How can I know if I can study in any specific course?',
            answer: 'In the Description of each course will detail about basic requirements, course description and course curriculum which is easy for you to make a decision.',
        },
        {
            question: 'What skill level do I need to be to take short course?',
            answer: 'Short courses are taught at all different levels. If you have no experience and want to try something for the first time, we advise choosing an introduction or beginners course. If you already have some experience, then there are courses to help you develop your skills further.',
        },
        {
            question: 'Is the course conducted as Khmer or English?',
            answer: 'Courses are conducted particularly in Khmer, However we will provide lesson slides which are in English, but it is not required to have a high English understanding.',
        },
        {
            question: 'How can I pay the course fee?',
            answer: 'There are 2 methods of payment which are front desk payment (cash) or online payment via ABA Bank transaction.',
        },
        {
            question: 'Is there any discount for students?',
            answer: 'We will provide a partial discount to the student in some cases such as alumni, group registration or any special case.',
        },
        {
            question: 'How many students are required in each course?',
            answer: 'We will require at least 10 students and maximum 20 students in order to open any course.',
        },
    ];

    return (
        <div id="root" className="container mx-auto mt-3 p-4">
            <div className="my-5">
                <h4 className="text-lg font-bold mb-4">FAQ</h4>
                <div>
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-4 border-b rounded-lg border-gray-300">
                            <div
                                className="p-4 bg-white-80 cursor-pointer flex items-center"
                                onClick={() => toggleCollapse(index)}
                            >
                                <div
                                    className={`transform transition-transform ${activeIndex === index ? 'rotate-90' : ''}`}
                                >
                                    <IoIosArrowForward />
                                </div>
                                <h2 className="mb-0 ml-2">
                                    <span className="text-primary">Q:</span> {faq.question}
                                </h2>
                            </div>
                            <div

                                className={`transition-max-height bg-white-80 duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}
                            >
                                <p

                                    className="p-4">
                                    <span className="text-secondary">A:</span> {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
