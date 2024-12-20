// pages/index.js
import Image from 'next/image'
import {FaCheck, FaTag} from "react-icons/fa";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "ISTAD Project ITE",
    description: "At ISTAD, we focus on implementing real-world projects with team collaboration. Our advanced Learning Management System supports this by streamlining student management and offering comprehensive tools for instructors and administrators. We ensure efficient communication, seamless course management, and a superior learning experience for all users.",
    openGraph: {
        title: "ISTAD Project ITE",
        description: "Implementing real-world projects with team collaboration is a key focus at ISTAD. Our Learning Management System provides advanced tools for managing students and supports instructors and administrators with efficient communication and seamless course management.",
        images: [
            {
                url: "https://lms-api.istad.co/api/v1/medias/view/0bd85d48-c9dc-4180-ab5c-9ba942a9d4e0.png",
                width: 120,
                height: 120,
                alt: "ISTAD Project Collaboration",
            },
        ],
    },
};



export default function ProjectITE() {
    const projects = [
        {
            src: "/ite-image/k-quicksignt.png",
            title: 'K-QuickSight',
            category: 'Data Analytics',
            rank: '1st | Advanced',
            description: 'Catalyze your data journey with our powerful tools for...',
            features: ['Data Prep Made Easy', 'Intelligent Insights', 'User-Friendly Dashboards']
        },
        {
            src: "/ite-image/automiclogo.png",
            title: 'AutomateX',
            category: 'DevOps',
            rank: '1st | Advanced',
            description: 'DevOps platform for deploying database and software...',
            features: ['Deploy Database', 'Deploy Software', 'Deploy Domain Name']
        },
        {
            src: "/project-logo/live-demo.png",
            title: 'Live Hacking Demo',
            category: 'Cybersecurity',
            rank: '1st | Advanced',
            description: 'A tool to do the pentesting purpose on a website such as...',
            features: ['SQL Injection, XSS', 'Vulnerabilities Scanning', 'Generating Reports']
        },
        {
            src: "/project-logo/developers-cambodia-logo.png",
            title: 'Developers Cambodia',
            category: 'Khmer Community',
            rank: '1st | Advanced',
            description: 'Developers community for Cambodian that developers...',
            features: ['E-Learning', 'Global Forum', 'Sharing Community']
        },
        {
            src: "/project-logo/surveybox-logo.png",
            title: 'SurveyBox',
            category: 'Productivity',
            rank: '1st | basic',
            description: 'It offers a variety of features, including a wide range of...',
            features: ['Voting Form', 'Suggested Q&A', 'Report of Survey']
        },
        {
            src: "/project-logo/photostad-logo.png",
            title: 'PhotoSTAD ',
            category: 'Design',
            rank: '1st | basic',
            description: 'Brand your pictures with the free watermark and generate...',
            features: ['Watermarking picture', 'Generate Certification', 'Tutorials']
        },
        {
            src: "/project-logo/brachnha-logo.png",
            title: 'Brachhna',
            category: 'Kids Education',
            rank: '1st | basic',
            description: 'Brachhna is a website created to educate students as well as...',
            features: ['Education Games', 'Khmer, English, Math', 'Kid Resources']
        },
        {
            src: "/project-logo/istademy-logo.png",
            title: 'iSTADemy ',
            category: 'Education',
            rank: '1st | basic',
            description: 'Unlock your coding potential at iSTADemy Learn practice...',
            features: ['Code Playground', 'Exercises and Quizzes', 'Earn Certificate']
        },
        {
            src: "/project-logo/camgiving-logo.png",
            title: 'CamGiving ',
            category: 'Social & Donation',
            rank: '1st | basic',
            description: 'Donority is here to build a safe future for the next...',
            features: ['Donation System', 'Social Activities', 'Organization']
        },
        {
            src: "/project-logo/lms-istad.png",
            title: 'iSTAD LMS',
            category: 'System Management',
            rank: '2nd | Basic',
            description: 'ISTAD Learning Management System is an advanced web application designed to streamline student management and offer comprehensive tools...',
            features: ['System Management', 'Sharing Community', 'Knowledge']
        },
        {
            src: "/project-logo/alumini.png",
            title: 'ALUMINI',
            category: 'Social & Community',
            rank: '2nd | Basic',
            description: 'This space is dedicated to fostering a vibrant community where people can connect through social activities, share their knowledge through tutorials, and learn from each other...',
            features: ['Social Activities', 'Sharing Community', 'Tutorials']
        },
        {
            src: "/project-logo/dealkh.png",
            title: 'DealKh',
            category: 'E-Commerce Global',
            rank: '2nd | Basic',
            description: 'Dive deep into the world of ecommerce with this comprehensive resource! From setting up your online store to mastering marketing strategies, this community equips you with the knowledge and tools to thrive...',
            features: ['Learn from Experts', 'Grow Your Business', 'Connect with Others']
        },
        {
            src: "/project-logo/idata.png",
            title: 'iDATA',
            category: 'API Integration',
            rank: '2nd | Basic',
            description:
                'There are many resources available online to help you find free APIs to use for your projects...',
            features: ['Public API directories', 'RapidAPI', 'Terms of service']
        },
        {
            src: "/project-logo/grades-bot.png",
            title: 'GradesBot',
            category: 'Innovation in Education',
            rank: '2nd | Basic',
            description:
                'Our mission at GradesBot is to innovate education technology, simplifying classroom management...',
            features: ['Effortlessly Track Grades', 'Boost Engagement', 'Communication']
        },
        {
            src: "/project-logo/iFinder.png",
            title: 'iFinder',
            category: 'Search Engine',
            rank: '2nd | Basic',
            description:
                'There are many general web search engines that are known for being user-friendly...',
            features: ['Web Search Engines', 'File Search Tools', 'Quickly search']
        },
    ];

    return (
        <section className="min-h-screen p-8">
            <div className="max-w-6xl mx-auto">
                <div className={"my-4"}>
                    <h1
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        className="text-2xl font-bold mb-8 text-black-34">PROJECT ACHIEVEMENT</h1>
                    {/* <p className={"flex flex-row items-start bg-white-80 pt-3 pl-2 rounded-md h-12 text-gray-80"}><FaHome
                        className={"w-8 h-8 pb-1 pr-2 text-black-34"}/> / ITE - Projects</p>*/}
                </div>

                <div

                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 ">
                    {projects.map((project, index) => (
                        <div key={index}
                             data-aos="flip-down"
                             data-aos-duration="800" data-aos-delay="500" data-aos-offset="200"
                             data-aos-easing="ease-in-out"
                             className="bg-white-80 p-6 rounded-lg shadow-lg hover:bg-whiteSmoke hover:shadow-lg dark:border-gray-700">
                            <div className="flex items-center w-12 h-10 mb-4">
                                <Image src={project.src}
                                       alt="Project Image"
                                       width={50}
                                       height={50}/>
                            </div>
                            <div>
                                <h2 className="text-xl text-black-34 font-bold mt-4">{project.title}</h2>
                            </div>

                            <div className="flex flex-row items-center justify-between py-2">
                                <p className="text-[10px] text-gray-80 flex flex-row items-center"> <FaTag className={"w-5 pr-2"} /> {project.category}</p>
                                <p className="text-[10px] text-error font-bold">{project.rank}</p>
                            </div>
                            <p className="text-gray-80 truncate-lines-2 pb-2 ">{project.description}</p>
                            <ul className="list-none text-gray-80">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-center">
                                        <FaCheck className="text-green-500 mr-2"/> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
