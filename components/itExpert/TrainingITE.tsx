"use client";
import Image from "next/image";
import {GrSchedules} from "react-icons/gr";
import {MdDisplaySettings, MdOutlineLibraryAdd} from "react-icons/md";
import React, {useEffect} from "react";
import {GiNotebook} from "react-icons/gi";
import AOS from "aos";

const userData = [
    {
        id: 1,
        name: 'HTML - Hyper Text Markup Language',
        description: 'HTML (Hypertext Markup Language) is the fundamental building block of the web, providing the structure and semantic meaning to web pages by defining the elements and their relationships, enabling the display of content across different browsers and devices.\n',
        imageUrl: 'https://i.pinimg.com/236x/0e/7d/4a/0e7d4ad55cdc3db527af6c3d72f41ad0.jpg',
    },
    {
        id: 2,
        name: 'CSS - Cascading Style Sheets',
        description: 'CSS is a vital web development technology that controls the visual appearance of web pages, allowing designers to create engaging user experiences by defining layout, colors, fonts, and more.',
        imageUrl: 'https://i.pinimg.com/564x/ee/b3/5d/eeb35df1a6739f4cea43ed1cba70bc25.jpg',
    },
    {
        id: 3,
        name: 'JS - JavaScript Programming Language',
        description: 'JavaScript is a dynamic programming language that adds interactivity and functionality to websites, allowing developers to create engaging user experiences and manipulate web page content.',
        imageUrl: 'https://i.pinimg.com/564x/96/e6/8d/96e68d712f51757ac07cfe22354d8be8.jpg',
    },
    {
        id: 4,
        name: 'Bootstrap - Frontend Design Framework',
        description: 'Bootstrap is a popular front-end framework that simplifies the development of responsive and visually appealing web applications, offering ready-to-use components and a responsive grid system.',
        imageUrl: 'https://i.pinimg.com/564x/d8/46/c8/d846c845775cc0191e6e156b6b934e64.jpg',
    },
    {
        id: 5,
        name: 'Tailwind CSS - CSS Framework',
        description: 'Tailwind CSS is a powerful utility-first CSS framework designed to streamline the development of customizable and responsive user interfaces, providing a wide range of pre-built classes for rapid implementation.',
        imageUrl: 'https://i.pinimg.com/564x/5e/42/c9/5e42c926feb229f934d3089d89c26e2f.jpg',
    },
    {
        id: 6,
        name: 'Figma - UI/UX Design',
        description: 'Figma is a cloud-based design tool that simplifies collaboration for creating user interfaces and prototypes. It offers powerful features, intuitive design tools, and seamless sharing capabilities, making it a top choice for design teams working on web and mobile projects.',
        imageUrl: 'https://i.pinimg.com/736x/29/95/95/29959595fe22edde8408b060d3ac3d82.jpg',
    },
    {
        id: 7,
        name: 'React - JavaScript Library',
        description: 'React is a robust and flexible JavaScript library that revolutionizes user interface development by providing reusable components, efficient rendering, and support for building dynamic and scalable applications.\n',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
    },
    {
        id: 8,
        name: 'Next.js - React Framework',
        description: 'Next.js is a powerful framework built on React that simplifies server-rendered React application development with features like server-side rendering, client-side routing, and built-in API support.',
        imageUrl: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png',
    },

    {
        id: 9,
        name: 'PostgreSQL Database Server',
        description: 'PostgreSQL is a powerful, open-source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.',
        imageUrl: 'https://i.pinimg.com/736x/06/86/c0/0686c0c85407548ea5bd737a572974b6.jpg',
    },
    {
        id: 10,
        name: 'Spring Framework',
        description: 'Spring makes programming Java quicker, easier, and safer for everybody. Spring’s focus on speed, simplicity, and productivity has made it the world’s most popular Java framework. Spring can develop Microservices, Reactive, Cloud, Web Apps, Serverless, Event Driven, Batch, and more.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWiuCgPUBoKVFkgFpK3W_JR0UWzW_yZAp2yA&s',
    },
    {
        id: 11,
        name: 'Docker - Containerization',
        description: 'Docker is a powerful open-source platform that simplifies application deployment by packaging software and its dependencies into self-contained containers. These containers provide a consistent and portable environment, making it easier to develop, test, and deploy applications across different systems and environments.',
        imageUrl: '/ite-image/docker-logo.png',
    },
    {
        id: 12,
        name: 'NGINX Web Server',
        description: 'NGINX is a high-performance, open-source web server and reverse proxy server known for its efficiency and scalability. It optimizes web content delivery and handles heavy traffic loads, making it popular for serving web applications and APIs.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWOoWb2-XM9PsxK940NqKjKKFlmN3Q8zDR0A&s',
    },
    {
        id: 13,
        name: 'Git - Version Control Systems',
        description: 'Git is a widely used version control system that tracks code changes, supports collaboration, and enhances software development efficiency. It enables developers to work on projects simultaneously, manage revisions, and merge changes seamlessly.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png',
    },
    {
        id: 14,
        name: 'Project Management',
        description: 'Project management involves planning, organizing, and overseeing all aspects of a project to ensure successful completion. It includes defining objectives, managing resources, coordinating tasks, monitoring progress, and adapting to changes.',
        imageUrl: 'https://media.istockphoto.com/id/1341104538/vector/project-management-vector-icon-filled-flat-sign-for-mobile-concept-and-web-design-hub-and.jpg?s=612x612&w=0&k=20&c=qI7U2nlmDgv1zV1E2G4lnA6WN8tx9UvHUuSPoDvU_m4=',
    },
];

const userDataAdvanced = [
    {
        idAd: 1,
        titleAd: 'Flutter Development',
        descriptionAd: 'Flutter transforms the development process. Build, test, and deploy beautiful mobile, web, desktop, and embedded experiences from a single codebase.e user interfaces.',
        imageUrlAd: '/ite-image/flutter-logo.png',
    },
    {
        idAd: 2,
        titleAd: 'Spring framework',
        descriptionAd: 'The Spring Framework provides a comprehensive programming and configuration model for modern Java-based enterprise applications - on any kind of deployment platform.',
        imageUrlAd: '/ite-image/spring-logo.png',
    },
    {
        idAd: 3,
        titleAd: 'DevOps Engineering',
        descriptionAd: 'A DevOps engineer must have skills that span both development and operations, as well as interpersonal skills to help bridge divides between siloed teams.',
        imageUrlAd: '/ite-image/docker-logo.png',
    },
    {
        idAd: 4,
        titleAd: 'Data Analytics',
        descriptionAd: 'Data Analysis — Make sense out of your data! Read about four types of data analysis to have better dataset. Tips and tricks on data analysis for better impact. Get the best out of your data!',
        imageUrlAd: '/ite-image/data-analytics.png',
    },
    {
        idAd: 5,
        titleAd: 'Blockchain',
        descriptionAd: 'All about blockchain tech — Non-Custodial Finance, a platform dedicated to the ever-evolving DeFi space. What DeFi services non-custodial wallets and how to use them safely.',
        imageUrlAd: '/ite-image/blockchain-logo.png',
    },
    {
        idAd: 6,
        titleAd: 'Cybersecurity',
        descriptionAd: 'Cybersecurity is the practice of protecting internet-connected systems such as hardware, software and data from cyberthreats.',
        imageUrlAd: '/ite-image/cyber-security.png',
    },
];

const TrainingIte = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 120,
            once: true, 
        });
    }, []);

    return (
        <div className="shadow-md sm:rounded-md bg-white-80 max-w-6xl mx-auto p-4 py-8 space-y-9">
            {/*section one start here*/}
            <div>
                <h2 data-aos="zoom-in"
                    data-aos-duration="800" data-aos-delay="500" data-aos-offset="200"
                    data-aos-easing="ease-in-out"

                    className={"text-2xl md:text-3xl font-bold text-black-34 pb-2"}>Basic Course Training</h2>
                <div className={"border-b-2"}></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                    <div data-aos="zoom-in"
                         data-aos-duration="800" data-aos-delay="500" data-aos-offset="200"
                         data-aos-easing="ease-in-out"
                         className="bg-white shadow-md rounded-md p-6">
                        <div className="flex items-center mb-4">
                            <div className="flex items-center justify-center w-12 h-12 bg-[#247bfc] rounded-lg">
                                <span className="text-white text-2xl"><GrSchedules/></span>
                            </div>
                            <h3 className="ml-4 text-xl font-semibold text-black-34">Frontend</h3>
                        </div>
                        <p className={"text-black-34"}>Frontend development focuses on creating the user-facing
                            components and interfaces of a
                            website or application. It involves using technologies such as HTML, CSS, and JavaScript to
                            design and implement the visual and interactive elements that users interact with
                            directly.</p>
                    </div>
                    <div data-aos="zoom-in"
                         data-aos-duration="800" data-aos-delay="500" data-aos-offset="200"
                         data-aos-easing="ease-in-out"
                         className="bg-white shadow-md rounded-md p-6">
                        <div className="flex items-center mb-4">
                            <div className="flex items-center justify-center w-12 h-12 bg-[#247bfc] rounded-lg">
                                <span className="text-white text-2xl"><MdDisplaySettings/></span>
                            </div>
                            <h3 className="ml-4 text-xl font-semibold text-black-34">Backend</h3>
                        </div>
                        <p className={"text-black-34"}>Spring makes programming Java quicker, easier, and safer for
                            everybody. Spring is focus on
                            speed, simplicity, and productivity has made it the world is most popular Java framework.
                            Spring can develop Microservices, Reactive, Cloud, Web Apps, Serverless, Event Driven,
                            Batch, and more.</p>
                    </div>
                    <div data-aos="zoom-in"
                         data-aos-duration="800" data-aos-delay="500" data-aos-offset="200"
                         data-aos-easing="ease-in-out"
                         className="bg-white shadow-md rounded-md p-6">
                        <div className="flex items-center mb-4">
                            <div className="flex items-center justify-center w-12 h-12 bg-[#247bfc] rounded-lg">
                                <span className="text-white text-2xl"><MdOutlineLibraryAdd/></span>
                            </div>
                            <h3 className="ml-4 text-xl font-semibold text-black-34 ">Additional Subjects</h3>
                        </div>
                        <p className={"text-black-34"}>Additional training in database server management enhances skills
                            in optimizing,
                            administering, and securing databases, enabling efficient data handling and system
                            maintenance. Training in Git and version control equips individuals with the knowledge.</p>
                    </div>
                </div>
            </div>
            {/*section one end here*/}

            {/*section two start here*/}
            <div>
                <table
                    data-aos="fade-right"
                    className="w-full text-sm text-left rtl:text-right text-black-34 dark:text-black-34">
                    <thead className="text-xs text-black-34 uppercase bg-white-80 dark:bg-white-80 dark:text-black-34">
                    <tr>
                        <th
                            className="px-6 py-3">
                            <h5  data-aos="fade-right" className="text-black-34 text-2xl md:text-3xl font-bold pb-2">Technologies in used</h5>
                            <div className="border-t-2"></div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {userData.map(user => (
                        <tr key={user.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th  data-aos="fade-right" scope="row"
                                 className="flex items-center px-6 py-4 text-black-34 whitespace-normal dark:text-white">
                                <Image className="w-10 h-10 rounded-full" src={user.imageUrl} width={"100"}
                                       height={"100"}
                                       alt={`${user.name} image`}/>
                                <div className="pl-3">
                                    <div className="text-base font-semibold">{user.name}</div>
                                    <div className="font-normal text-black-34 break-words">{user.description}</div>
                                </div>
                            </th>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <p className={"text-[12px] font-semibold text-end tracking-wide text-black-34 pt-3 pr-2"}> All
                    Updates</p>
            </div>
            {/*section two end here*/}

            {/* weekly start here */}
            <section className="flex justify-center items-center w-full">
                <section className="overflow-hidden w-full">
                    <section className="p-6 w-full">
                        <h2 data-aos="zoom-in-up" className="text-2xl md:text-3xl font-bold pb-3">Weekly Schedule</h2>
                        <div className="border-t-2"></div>
                        <div className="overflow-x-auto mt-8">
                            <table data-aos="flip-right" className="min-w-full bg-white border border-gray-200 w-full">
                                <thead className=" text-base sm:text-lg ">
                                <tr>
                                    <th className="py-2 px-4 border border-gray-300 text-center text-base sm:text-lg md:text-xl " colSpan={3}>Class</th>
                                    <th className="py-2 px-4 border border-gray-300 text-center text-base sm:text-lg md:text-xl " colSpan={3}>Time</th>
                                    <th className="py-2 px-4 border border-gray-300 text-center ">Mon</th>
                                    <th className="py-2 px-4 border border-gray-300 text-center ">Tue</th>
                                    <th className="py-2 px-4 border border-gray-300 text-cente ">Wed</th>
                                    <th className="py-2 px-4 border border-gray-300 text-center ">Thu</th>
                                    <th className="py-2 px-4 border border-gray-300 text-center ">Fri</th>
                                </tr>
                                </thead>
                                <tbody  className=" text-sm sm:text-base ">
                                <tr>
                                    <td className="py-2 px-4 border border-gray-300 text-center" colSpan={3}
                                        rowSpan={3}>Data Analytics Lab.
                                    </td>
                                    <td className="py-2 px-4 border border-gray-300 text-center"
                                        colSpan={3}>08:00AM-10:00AM
                                    </td>
                                    <td className="py-2 px-4 border border-gray-300 text-center">Backend</td>
                                    <td className="py-2 px-4 border border-gray-300 text-center">Frontend</td>
                                    <td className="py-2 px-4 border border-gray-300 text-center"></td>
                                    <td className="py-2 px-4 border border-gray-300 text-center"></td>
                                    <td className="py-2 px-4 border border-gray-300 text-center"></td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border border-gray-300 text-center"
                                        colSpan={3}>10:00AM-12:00PM
                                    </td>
                                    <td className="py-2 px-4 border border-gray-300 text-center" colSpan={5}>Lab
                                        Research + Additional Training
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border border-gray-300 text-center"
                                        colSpan={3}>01:30PM-05:00PM
                                    </td>
                                    <td className="py-2 px-4 border border-gray-300 text-center" colSpan={5}>Lab
                                        Research + Additional Training
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border border-gray-300 text-center" rowSpan={3}
                                        colSpan={3}>DevOps Lab.
                                    </td>
                                    <td className="py-2 px-4 border border-gray-300 text-center"
                                        colSpan={3}>08:00AM-10:00AM
                                    </td>
                                    <td className="py-2 px-4 border border-gray-300 text-center" colSpan={5}>Lab
                                        Research + Additional Training
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border border-gray-300 text-center"
                                        colSpan={3}>10:00AM-12:00PM
                                    </td>
                                    <td className="py-2 px-4 border border-gray-300 text-center">Backend</td>
                                    <td className="py-2 px-4 border border-gray-300 text-center">Frontend</td>
                                    <td className="py-2 px-4 border border-gray-300 text-center"></td>
                                    <td className="py-2 px-4 border border-gray-300 text-center"></td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border border-gray-300 text-center"
                                        colSpan={3}>01:30PM-05:00PM
                                    </td>
                                    <td className="py-2 px-4 border border-gray-300 text-center" colSpan={5}>Lab
                                        Research + Additional Training
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </section>
            </section>

            {/* weekly end here */}


            {/*monthly start here*/}
            <section

                className="p-6 bg-white rounded-md mt-6 space-y-9 gap-x-4">
                <h5 data-aos="zoom-in-up" className="text-2xl md:text-3xl font-semibold mb-4 text-black-34">Monthly Evaluation Methods (5 Months)</h5>
                <div className="border-b-2"></div>

                <section className="grid w-full sm:grid-cols-1 md:grid-cols-2 mb-6">
                    <div data-aos="fade-up-right" className=" space-x-2 w-full">
                        <div className="flex items-center mb-4">
                            <div className="flex items-center justify-center w-12 h-12 bg-[#247bfc] rounded-lg">
                                <span className="text-white text-2xl"><GiNotebook/></span>
                            </div>
                        </div>
                        <h3 className="text-lg font-medium mb-2 text-black-34">1st Month</h3>
                        <p className=" w-auto h-auto md:w-full flex flex-wrap gap-[-5px] ">
                            <span className="md:mb-2 text-success "> Java Programming,</span>
                            <span className="text-[#17a2b7] ">Frontend,</span>
                            <span className="text-black-34 ">and</span>
                            <span className="text-secondary ">Attendance</span>
                        </p>
                    </div>

                    <div data-aos="flip-down" className="space-y-2 pt-8 w-auto">
                        <div className="flex items-center justify-center">
                            <div className="w-full bg-gray-200 h-4 rounded relative">
                                <div className="w-1/4 bg-[#27a844] h-4 rounded flex justify-center items-center">
                                    <span className="text-white">25%</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="w-full bg-gray-200 h-4 rounded relative">
                                <div className="w-1/2 bg-[#17a2b7] h-4 rounded flex justify-center items-center">
                                    <span className="text-white">50%</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="w-full bg-gray-200 h-4 rounded relative">
                                <div className="w-3/4 bg-secondary h-4 rounded flex justify-center items-center">
                                    <span className="text-white">75%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div data-aos="fade-up-right" className="space-x-2">
                        <div className="flex items-center mb-4">
                            <div className="flex items-center justify-center w-12 h-12 bg-[#247bfc] rounded-lg">
                                <span className="text-white text-2xl"><GiNotebook/></span>
                            </div>
                        </div>
                        <h3 className="text-lg font-medium mb-2 text-black-34">2nd Month</h3>
                        <p className=" flex flex-wrap">
                            <span className="md:mb-2 text-success"> Spring framework Programming,</span>
                            <span className="text-[#17a2b7]">Frontend,</span>
                            <span className="text-black-34">and</span>
                            <span className="text-secondary">Attendance</span>
                        </p>
                    </div>
                    <div data-aos="flip-down" className="space-y-2 pt-8">
                        <div className="flex items-center justify-center">
                            <div className="w-full bg-gray-200 h-4 rounded relative">
                                <div className="w-1/4 bg-[#27a844] h-4 rounded flex justify-center items-center">
                                    <span className="text-white">25%</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="w-full bg-gray-200 h-4 rounded relative">
                                <div className="w-1/2 bg-[#17a2b7] h-4 rounded flex justify-center items-center">
                                    <span className="text-white">50%</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="w-full bg-gray-200 h-4 rounded relative">
                                <div className="w-3/4 bg-secondary h-4 rounded flex justify-center items-center">
                                    <span className="text-white">75%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div data-aos="fade-up-right" className="space-x-2">
                        <div className="flex items-center mb-4">
                            <div className="flex items-center justify-center w-12 h-12 bg-[#247bfc] rounded-lg">
                                <span className="text-white text-2xl"><GiNotebook/></span>
                            </div>
                        </div>
                        <h3 className="text-lg font-medium mb-2 text-black-34">3rd Month</h3>
                        <p className=" flex flex-wrap ">
                            <span className="md:mb-2 text-success"> Spring framework Programming,</span>
                            <span className="text-[#17a2b7]">Frontend,</span>
                            <span className="text-black-34">and</span>
                            <span className="text-secondary">Attendance</span>
                        </p>
                    </div>
                    <div data-aos="flip-down" className="space-y-2 pt-8">
                        <div className="flex items-center justify-center">
                            <div className="w-full bg-gray-200 h-4 rounded relative">
                                <div className="w-1/4 bg-[#27a844] h-4 rounded flex justify-center items-center">
                                    <span className="text-white">25%</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="w-full bg-gray-200 h-4 rounded relative">
                                <div className="w-1/2 bg-[#17a2b7] h-4 rounded flex justify-center items-center">
                                    <span className="text-white">50%</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="w-full bg-gray-200 h-4 rounded relative">
                                <div className="w-3/4 bg-secondary h-4 rounded flex justify-center items-center">
                                    <span className="text-white">75%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div data-aos="fade-up-right" className="space-x-2">
                        <div className="flex items-center mb-4">
                            <div className="flex items-center justify-center w-12 h-12 bg-[#247bfc] rounded-lg">
                                <span className="text-white text-2xl"><GiNotebook/></span>
                            </div>
                        </div>
                        <h3 className="text-lg font-medium mb-2 text-black-34">4th Month</h3>
                        <p className=" flex flex-wrap ">
                            <span className="text-[#17a2b7]">Final project,</span>
                            <span className="text-black-34">and</span>
                            <span className="text-secondary">Attendance</span>
                        </p>
                    </div>
                    <div data-aos="flip-down" className="space-y-2 pt-10">
                        <div className="flex items-center justify-center">
                            <div className="w-full bg-gray-200 h-4 rounded relative">
                                <div className="w-[90%] bg-[#17a2b7] h-4 rounded flex justify-center items-center">
                                    <span className="text-white">90%</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="w-full bg-gray-200 h-4 rounded relative">
                                <div className="w-[10%] bg-secondary h-4 rounded flex justify-center items-center">
                                    <span className="text-white">10%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div data-aos="fade-up-right" className="space-x-2">
                        <div className="flex items-center mb-4">
                            <div className="flex items-center justify-center w-12 h-12 bg-[#247bfc] rounded-lg">
                                <span className="text-white text-2xl"><GiNotebook/></span>
                            </div>
                        </div>
                        <h3 className="text-lg font-medium mb-2 text-black-34">5th Month</h3>
                        <p className=" flex flex-wrap ">
                            <span className="text-[#17a2b7]">Final project,</span>
                            <span className="text-black-34">and</span>
                            <span className="text-secondary">Attendance</span>
                        </p>
                    </div>
                    <div data-aos="flip-down" className="space-y-2 pt-10">
                        <div className="flex items-center justify-center">
                            <div className="w-full bg-gray-200 h-4 rounded relative">
                                <div className="w-[90%] bg-[#17a2b7] h-4 rounded flex justify-center items-center">
                                    <span className="text-white">90%</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="w-full bg-gray-200 h-4 rounded relative">
                                <div className="w-[10%] bg-secondary h-4 rounded flex justify-center items-center">
                                    <span className="text-white">10%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            {/*monthly end here*/}

            {/*dashboard start here*/}
            <section
                data-aos="fade-right"
                className="overflow-x-auto w-full my-9">
                <h5 className="text-black-34 text-2xl md:text-3xl font-bold bg-white-80 pb-2">Warning and Terminate Rules</h5>
                <div className="border-t-2"></div>
                <table className="w-full border border-gray-300 mt-6">
                    <thead  className=" text-base sm:text-lg ">
                    <tr>
                        <th className="py-2 px-4 border">Subject</th>
                        <th className="py-2 px-4 border">Score</th>
                        <th className="py-2 px-4 border">Condition</th>
                        <th className="py-2 px-4 border">1st Time</th>
                        <th className="py-2 px-4 border">2nd Time</th>
                    </tr>
                    </thead>
                    <tbody className=" text-sm sm:text-base ">
                    <tr>
                        <td className="py-2 px-4 border border-gray-300">IT</td>
                        <td className="py-2 px-4 border border-gray-300">90</td>
                        <td className="py-2 px-4 border border-gray-300">Lower 45</td>
                        <td className="py-2 px-4 border border-gray-300 bg-yellow-400" rowSpan={4}>Warning</td>
                        <td className="py-2 px-4 border border-gray-300 bg-yellow-400" rowSpan={4}>Warning</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border-r border-gray-300">Attendance</td>
                        <td className="py-2 px-4 border-r">10</td>
                        <td className="py-2 px-4 border-none">Lower 5</td>


                    </tr>
                    <tr>
                        <td className="py-2 px-4 border-r ">Attitude</td>
                        <td className="py-2 px-4 border-r"></td>
                        <td className="py-2 px-4 border-none"></td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border-b border-r border-gray-300">Activities</td>
                        <td className="py-2 px-4 border-r"></td>


                    </tr>
                    </tbody>
                </table>
            </section>
            {/*dashboard end here*/}


            {/*    section three start here*/}
            <div
            >
                <div className=" p-0 md:p-8 pb-4">
                    <h1 data-aos="zoom-in-up" className="text-3xl font-bold mb-4">Advanced Course Training</h1>
                    <div className={"border-b-2"}></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                        <div
                            data-aos="flip-right"
                            className="p-6 bg-white rounded-md shadow-md">
                            <Image src="/ite-image/flutter-logo.png" width={"120"} height={"120"} alt="Flutter"
                                   className="w-12 h-12 mb-4"/>
                            <h2 className="text-xl font-semibold mb-2">Flutter Development</h2>
                            <p className="text-black-34">
                                Flutter is an open-source UI toolkit by Google for building cross-platform mobile apps
                                using a single codebase. It uses Dart programming language, offers hot reload for faster
                                development, and provides a rich set of customizable UI components. It is known for its
                                high performance and native-like user interfaces.
                            </p>
                        </div>

                        <div
                            data-aos="flip-right"
                            className="p-6 bg-white rounded-md shadow-md">
                            <Image src="/ite-image/spring-logo.png" width={"120"} height={"120"} alt="Spring"
                                   className="w-12 h-12 mb-4"/>
                            <h2 className="text-xl font-semibold mb-2">Spring Microservices</h2>
                            <p className="text-black-34">
                                A Spring-based microservice follows a modular architecture using Spring Boot. It
                                leverages Spring MVC for handling HTTP requests, Spring Data for data persistence, and
                                Spring Cloud for distributed features. It enables independent development and
                                scalability while benefiting from the Spring ecosystem is extensive features and
                                integrations.
                            </p>
                        </div>

                        <div
                            data-aos="flip-right"
                            className="p-6 bg-white rounded-md shadow-md">
                            <Image src="/ite-image/docker-logo.png" width={"120"} height={"120"} alt="DevOps"
                                   className="w-12 h-12 mb-4"/>
                            <h2 className="text-xl font-semibold mb-2">DevOps Engineering</h2>
                            <p className="text-black-34">
                                DevOps engineering is a software development approach that integrates development and
                                operations teams, emphasizing collaboration, automation, and continuous delivery. It
                                aims to streamline the software development lifecycle, enabling faster and more reliable
                                software releases through improved communication, shared responsibilities, and efficient
                                processes.
                            </p>
                        </div>

                        <div
                            data-aos="flip-right"
                            className="p-6 bg-white rounded-md shadow-md">
                            <Image src="/ite-image/data-analytics.png" width={"120"} height={"120"} alt="Data Analytics"
                                   className="w-12 h-12 mb-4"/>
                            <h2 className="text-xl font-semibold mb-2">Data Analytics</h2>
                            <p className="text-black-34">
                                Data analytics involves the exploration, interpretation, and extraction of meaningful
                                insights from vast amounts of data. It employs statistical techniques, algorithms, and
                                visualizations to uncover patterns, trends, and correlations. By leveraging data
                                analytics, organizations can gain valuable knowledge to optimize operations, improve
                                decision-making, and drive innovation.
                            </p>
                        </div>

                        <div
                            data-aos="flip-right"
                            className="p-6 bg-white rounded-md shadow-md">
                            <Image src="/ite-image/blockchain-logo.png" width={"120"} height={"120"} alt="Blockchain"
                                   className="w-12 h-12 mb-4"/>
                            <h2 className="text-xl font-semibold mb-2">Blockchain</h2>
                            <p className="text-black-34">
                                Blockchain technology is an advanced database mechanism that allows transparent
                                information sharing within a business network. A blockchain database stores data in
                                blocks that are linked together in a chain. The data is chronologically consistent
                                because you cannot delete or modify the chain without consensus from the network.
                            </p>
                        </div>

                        <div
                            data-aos="flip-right"
                            className="p-6 bg-white rounded-md shadow-md">
                            <Image src="/ite-image/cyber-security.png" width={"120"} height={"120"} alt="Cybersecurity"
                                   className="w-12 h-12 mb-4"/>
                            <h2 className="text-xl font-semibold mb-2">Cybersecurity</h2>
                            <p className="text-black-34">
                                Cybersecurity is the practice of protecting critical systems and sensitive information
                                from digital attacks. Also known as information technology (IT) security, cybersecurity
                                measures are designed to combat threats against networked systems and applications,
                                whether those threats originate from inside or outside of an organization.
                            </p>
                        </div>
                    </div>

                    {/*    section last start here*/}
                    <table className="w-full bg-blue-700 text-sm text-left rtl:text-right text-black-34 dark:text-black-34">
                        <thead
                            className=" text-xs text-black-34 uppercase bg-whiteSmoke dark:bg-white-80 dark:text-black-34">
                        <tr>
                            <th className="px-6 py-3 bg-white-80">
                                <h5
                                    data-aos="fade-right"
                                    className="text-black-34 text-2xl md:text-3xl font-bold bg-white-80 pt-6 pb-3">Technologies in used</h5>
                                <div className="border-t-2"></div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {userDataAdvanced.map(user => (
                            <tr key={user.idAd}
                                className="bg-white-80 border-b dark:bg-gray-80 dark:border-gray-80 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row"
                                    data-aos="fade-right"
                                    className="flex items-center px-6 py-4 text-black-34 whitespace-normal dark:text-white">
                                    <Image className="w-10 h-10 rounded-full" src={user.imageUrlAd} width={"100"}
                                           height={"100"}
                                           alt={`${user.titleAd} image`}/>
                                    <div className="pl-3">
                                        <div className="text-base font-semibold">{user.titleAd}</div>
                                        <div
                                            className="font-normal text-black-34 break-words">{user.descriptionAd}</div>
                                    </div>
                                </th>
                            </tr>

                        ))}

                        </tbody>

                    </table>
                    <p className={"text-[12px] font-semibold text-end tracking-wide text-black-34 pt-3 pr-2"}> All
                        Updates</p>
                    {/*section last end here*/}
                </div>

            </div>
            {/*    section three end here*/}


        </div>
    );
}
export default TrainingIte;