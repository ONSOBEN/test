

    export interface MenuItem {
    name: string;
    href: string;
    icon?: string; // Use string for icon names
    description?: string;
    }

    export const menuItems = [

        {
            name: "ACADEMICS",
            href: "#",
            subItems: [
                { name: "ACADEMICS",
                    href: "/academics",
                    description: "ISTAD offers BA degrees in IT field to preparing students for their IT career in the future.",
                    icon: "HiAcademicCap",
                },
                { name: "ADMISSIONS", href: "/admission",description: "Welcome to our Admissions page! Here, you will find all the necessary information to guide.",  icon: "GiArchiveRegister", },

                { name: "SCHOLARSHIP", href: "/scholarship",
                    icon: "FaGoogleScholar",
                    description: "Institute of Science and Technology Advanced Development currently provide a 100% scholarship opportunity for 60 places in 2024." }

                ,{ name: "FAQs",
                    href: "/frequently-asked-questions",description: "While the acronym FQA refers to theories that are questioned, FAQ, or frequently asked questions refers to a group of questions that are most often asked.",
                    icon: "MdQuestionAnswer",
                },

            ]
        },
        { name: "SHORT COURSE", href: "https://istad.co/page/course", current: true },
        { name: "IT EXPERTS", href: "#",
            subItems:
                [
                    {
                        name: "TRAINING",
                        href: "/training-ite",
                        active: false,
                        icon: "TbSettingsQuestion",
                        description: "Providing latest curriculum, course materials, researching skill and knowledge."
                    },
                    {
                        name: "EVENTS",
                        href: "/event-ite",
                        active: false,
                        icon: "FaCalendarAlt",
                        description: "Celebrating closing ceremony, orientation, special lecture, and so on."
                    },
                    {
                        name: "PROJECTS",
                        href: "/projects-ite",
                        active: false,
                        icon: "FaChartBar",
                        description: "Implementing real world projects on-hand with a team collaboration."
                    }
                 ]
        },

        {
            name: "NEWS & VACANCY",
            href: "#",
            subItems: [
                {
                    name: "NEWS & EVENT",
                    href: "/news-event",
                    description: "ISTAD is a place where you can find the latest news and events.",
                    icon: "GiMaterialsScience"
                },
                {
                    name: "JOB VACANCY",
                    href: "/job-opportunity",
                    description: "ISTAD is a place where you can find the latest job opportunities.",
                    icon: "MdWork"
                }
            ]
        },
        { name: "ABOUT US", href: "/about-us",
            subItems: [
                { name: "ABOUT US", href: "/about-us", icon: "BiSolidSchool",
                    description: "Our mission is to deliver exceptional value through our cutting-edge solutions and unwavering commitment to quality.",},
                { name: "MY DIRECTOR", href: "/about-us/director", icon: "FaChalkboardTeacher"
                    ,description: "Is a communication from the director of an organization"},
                { name: "OUR TEAM", href: "/about-us/director/team", icon: "RiTeamFill",
                    description: " our success is driven by the dedication and expertise of our talented team. ",},
            ],
        },
        { name: "LEARNING PORTAL", href: "https://lms.istad.co/login" }
    ];
