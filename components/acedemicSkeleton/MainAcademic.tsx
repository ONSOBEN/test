"use client";
import React, {useEffect, useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProgramComponent from "@/components/acedemicSkeleton/ProgramComponent";
import AcademicSkeleton from "@/components/acedemicSkeleton/AcademicSkeleton";
import {FaTags} from "react-icons/fa";
import Testimonials from "@/components/testimonials/Testimonials";




const MainAcademic = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 120,
            once: true,
        });
    }, []);


    const testimonials = [
        {
            name: 'Ms. Yeng Sokroza',
            title: 'iSTAD Channel',
            category: 'Foundation one',
            description: 'ជួបជាមួយ កញ្ញា យ៉េង សុខរ៉ូហ្សា អតីតនិស្សិតអាហារូបករណ៍ កម្រិតមូលដ្ឋានជំនាន់ទី១',
            videoUrl: 'https://www.youtube.com/embed/qqWbFUYsHVI',
        },
        {
            name: 'Spring Framework',
            title: 'iSTAD Channel',
            category: 'Introduction Spring Developer',
            description: 'Spring is a comprehensive, open-source framework for building robust and scalable Java applications. It provides a cohesive programming and configuration model for modern Java-based enterprise applications.',
            videoUrl: 'https://www.youtube.com/embed/CkukosImhLI?si=uqHR4G7E7MtCWf-0',
        },
        {
            name: 'Opportunity',
            category: 'Opportunity',
            title: 'iSTAD Channel',
            description: 'ឱកាសទទួលបានអាហារូបករណ៍ព័ត៌មានវិទ្យា សម្រាប់និស្សិតទើបតែប្រឡងបាក់ឌុបឆ្នាំ ២០២៣ ចំនួន ១៥០ កន្លែង',
            videoUrl: 'https://www.youtube.com/embed/lycw7_xwPmU?si=uEUH8s4x3vhxPnOH',
        },
        {
            name: 'Ms. Hoeng Linghor',
            title: 'iSTAD Channel',
            category: 'iOS Developer',
            description: 'iOS Developer, Ms. Hoeng Linghor talks about Mobile App Development',
            videoUrl: 'https://www.youtube.com/embed/SQy5sUmK_OQ?si=pxYvsxyNYguJVze3',
        },
        {
            name: 'Mr. Prem Leapheng',
            title: 'iSTAD Channel',
            category: 'Data Scientist & Machine Learning',
            description: 'Mr. Prem Leapheng - Data Scientist & Machine Learning Engineer talk about Data Analytics',
            videoUrl: 'https://www.youtube.com/embed/mwz7mFOJ25s?si=NiIz5LSe8fibedJp',
        },
        {
            name: 'Ms.Hor Siekny',
            title: 'iSTAD Channel',
            category: 'Artificial Intelligent (AI)',
            description: 'Ms.Hor Siekny answers 5 questions about Artificial Intelligent (AI)',
            videoUrl: 'https://www.youtube.com/embed/lVpSUE1qLkI?si=KiYsyjYaO-RAhyEV',
        },
        {
            name: 'Mr.Heng Borchhay',
            title: 'iSTAD Channel',
            category: 'devops',
            description: 'Why I choose to be a DevOps Engineer, from Mr.Heng Borchhay',
            videoUrl: 'https://www.youtube.com/embed/V8WZ1TVTsAA?si=LERV1W1RQCaNpyYT',
        },
        {
            name: 'Memory',
            title: 'iSTAD Channel',
            category: 'Trip',
            description: 'Advanced course student trips are educational excursions designed to provide students with hands-on experiences related to their field of study. ',
            videoUrl: 'https://www.youtube.com/embed/DqTaYsxyUJA?si=ZB5E7_rMsW9TYr9L',
        },
    ];

    const alumniProjects = [
        {
            name: 'AutomateX Video Demo',
            title: 'iSTAD Channel',
            category: 'Devops Advanced Course',
            description: 'AutomateX Video Demo showcases the cutting-edge capabilities of the AutomateX software, designed to streamline and enhance automation processes across various industries. This demo provides a comprehensive walkthrough of the platform\'s features, including its intuitive interface, advanced analytics, and customizable workflows. Viewers will see real-world applications and benefits, demonstrating how AutomateX can significantly improve efficiency and productivity in their operations.',
            videoUrl: 'https://www.youtube.com/embed/oZ8jfDYVMQk?si=aESVWHqrQgmgDwwe',
        },
        {
            name: 'SurveyBox',
            title: 'iSTAD Channel',
            category: 'basic course',
            description: 'SurveyBox is an innovative survey management tool that simplifies the process of creating, distributing, and analyzing surveys. Designed for businesses, educational institutions, and researchers, SurveyBox offers a user-friendly interface and robust features such as customizable templates, real-time data collection, and powerful analytics. Whether you are gathering customer feedback or conducting academic research, SurveyBox provides all the tools you need to gain valuable insights and make informed decisions.',
            videoUrl: 'https://www.youtube.com/embed/L0as5Xf8q8M?si=it4fZvqkJX5Byp2V',
        },
        {
            name: 'PhotoSTAD',
            title: 'iSTAD Channel',
            category: 'basic course',
            description: 'PhotoSTAD is a state-of-the-art photo management and editing platform that caters to professional photographers and enthusiasts alike. With PhotoSTAD, users can easily organize their photo collections, perform advanced edits, and share their work seamlessly. The platform offers a range of tools including AI-powered enhancements, batch processing, and cloud storage integration, ensuring that every photo is stored securely and edited to perfection.',
            videoUrl: 'https://www.youtube.com/embed/RCUYz9__FtU?si=AwM_9BrVbpQk2VY5',
        },

        {
            name: 'Cybersecurity Demo',
            title: 'iSTAD Channel',
            category: 'Advanced Course',
            description: 'Cybersecurity is the practice of protecting computer systems, networks, and data from digital attacks.\n' +
                '\n',
            videoUrl: 'https://www.youtube.com/embed/KvdFaZlXXrE?si=Hx6W6Rn1PjmBnQQy',
        },
        {
            name: 'Cam Giving',
            title: 'iSTAD Channel',
            category: 'iSTAD Channel',
            description: 'Cam Giving is a unique platform dedicated to charitable giving through live streaming. It allows content creators to host live streams while raising funds for various causes. Viewers can donate directly through the platform during the stream, making it easy to support their favorite creators and the causes they care about. Cam Giving combines the power of social media with philanthropy, creating an engaging and impactful way to contribute to important initiatives.',
            videoUrl: 'https://www.youtube.com/embed/bl-C4i4WtaY?si=arvPHVEMAp4lgVut',
        },
        {
            name: 'Brachnha',
            title: 'iSTAD Channel',
            category: 'Basic course',
            description: 'Brachnha appears to be a platform specifically designed as an educational tool for children.',
            videoUrl: 'https://www.youtube.com/embed/bmCCeWApT_w?si=_p4ZQQmRm2hunGRJ',
        },
        {
            name: ' PortiSTAD',
            title: 'iSTAD Channel',
            category: 'Basic course',
            description: 'With our easy-to-use watermark maker and certificate\n' +
                'generator, you can create professional-looking\n' +
                'watermarks and certificates in seconds.',
            videoUrl: 'https://www.youtube.com/embed/bKjqwumfuo4?si=LaiJyOkjOa-xxezR',
        },
        {
            name: 'Java Project',
            title: 'iSTAD Channel',
            category: 'Foundation one',
            description: 'Java Project - Media Downloader Project Video Demo.',
            videoUrl: 'https://www.youtube.com/embed/XLF2fM9SOyE?si=GlS2Y1XOwFgcMSD8',
        },
        {
            name: 'Opensource Templates',
            title: 'iSTAD Channel',
            category: 'Foundation one',
            description: 'Community support: Benefit from the open source community for assistance and collaboration.',
            videoUrl: 'https://www.youtube.com/embed/U_9FlOcOMIE?si=i78FsaD1RMaY364T',
        },
    ];

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section>
            {loading ? <AcademicSkeleton/> : (

                <div>
                    {/* banner wrapper */}
                    <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[100vh] overflow-hidden rounded-sm">
                        {/* Background overlay */}
                        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

                        {/* Video instead of Image */}
                        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[100vh]">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            >
                                {/* Ensure the src attribute points to the correct location of your video file */}
                                <source src="https://lms-api.istad.co/api/v1/medias/view/a4ac8816-7a17-4c06-a692-e4f07388c687.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        <div className="absolute inset-0 flex flex-col justify-center items-center lg:items-start md:items-start sm:items-center text-white z-20 p-4 lg:ml-24 md:ml-16 sm:ml-0">
                            <h1 data-aos-duration="800" data-aos-delay="500" data-aos-offset="200" data-aos="fade-down"
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-start md:text-start sm:text-center lg:pb-4 md:pb-3 sm:pb-2">
                                Academics
                            </h1>
                            <div data-aos-duration="800" data-aos-delay="500" data-aos-offset="200" data-aos="fade-down"
                                 className="h-2 w-24 sm:w-32 lg:w-40 bg-error text-center lg:text-start md:text-start sm:text-center"></div>
                            <p data-aos-duration="1000" data-aos-delay="500" data-aos-offset="200" data-aos="fade-up"
                               className="text-lg sm:text-xl lg:text-2xl font-normal text-center lg:text-start md:text-start sm:text-center mt-4">
                                ISTAD offers BA degrees in IT field to preparing <br/>
                                students for their IT career in the future.
                            </p>
                        </div>
                    </div>
                    {/* banner end here */}


                    {/* program description start here */}
                    <div className={"py-9"}>
                        <ProgramComponent/>
                    </div>
                    {/* program description end here */}

                    {/* card student start here */}
                    <div className="pb-9 px-4">
                        <Testimonials />
                    </div>
                    {/* card student end here */}


                    {/* video start here */}
                    <div className={" my-9"}>
                        <div className="container pt-2">
                            <h5 data-aos="fade-right"
                                className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-error pl-5 mt-9">
                                TESTIMONIALS
                            </h5>
                            <h1 data-aos="fade-right"
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-9 pl-5">
                                HEAR FROM OUR STUDENTS
                            </h1>


                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} data-aos="flip-left"
                                         className="bg-white p-4 rounded-lg shadow-lg flex flex-col h-full">
                                        <iframe
                                            className="object-cover rounded-t-lg w-full h-56 hover:scale-105 transition-transform"
                                            width="100%"
                                            height="250"
                                            src={testimonial.videoUrl}
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                        <div className="flex-grow px-2">
                                            <h3 className="mt-4 text-xl font-bold">{testimonial.name}</h3>
                                            <div className="flex flex-row items-center justify-between py-2">
                                                <p className="text-[10px] text-gray-80 flex flex-row items-center">
                                                    <FaTags className={"w-5 pr-2"}/> {testimonial.category}</p>
                                                <p className="text-[10px] text-error font-bold">{testimonial.title}</p>
                                            </div>

                                            <p className="mt-2 text-gray-800 truncate-lines-3">{testimonial.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h5 data-aos="fade-right"
                                className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-error pl-5 mt-14">
                                TESTIMONIALS
                            </h5>
                            <h1 data-aos="fade-right"
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-9 pl-5">
                                HEAR FROM OUR ALUMNI
                            </h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {alumniProjects.map((project, index) => (
                                    <div key={index} data-aos="flip-left"
                                         className="bg-white p-4 rounded-lg shadow-lg flex flex-col h-full">
                                        <iframe
                                            className="object-cover rounded-t-lg w-full h-56 hover:scale-105 transition-transform"
                                            width="100%"
                                            height="250"
                                            src={project.videoUrl}
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                        <div className="flex-grow px-2">
                                            <h3 className="mt-4 text-xl font-bold">{project.name}</h3>
                                            <div className="flex flex-row items-center justify-between py-2">
                                                <p className="text-[10px] text-gray-80 flex flex-row items-center">
                                                    <FaTags className={"w-5 pr-2"}/> {project.category}</p>
                                                <p className="text-[10px] text-error font-bold">{project.title}</p>
                                            </div>
                                            <p className="mt-2 text-gray-800 truncate-lines-3 ">{project.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* video end here */}
                </div>
            )}

        </section>

    );
};

export default MainAcademic;


