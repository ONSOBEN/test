import HomeBanner from "@/components/banner/HomeBanner";
import HomeBanner2 from "@/components/banner/HomeBanner2";
import ProgramComponent from "@/components/acedemicSkeleton/ProgramComponent";
import EventComponent from "@/components/events/EventComponent";
import HeroSection from '@/components/banner/HeroSection';
import CourseAvailable from "@/components/banner/CourseAvailable";
import {Metadata} from "next";
import Testimonials from "@/components/testimonials/Testimonials";

export const metadata: Metadata = {
    title: "ISTAD Home Page",
    description: "ISTAD Learning Management System is an advanced web application designed to streamline student management and offer comprehensive tools for instructors and administrators. Our platform ensures efficient communication, seamless course management, and a superior learning experience for all users.",
    keywords: [
        "ISTAD",
        "LMS",
        "Learning Management System",
        "student management",
        "course management",
        "instructors",
        "administrators",
        "education technology",
        "online learning"
    ],
    openGraph: {
        title: "ISTAD Home Page",
        description:
            "ISTAD Learning Management System is a web application for managing students and providing a robust system for instructors and administrators.",
        images: "https://lms-api.istad.co/api/v1/medias/view/c3ca024c-f93a-4454-83b0-6957f79eab3c.png",
    }
};

const Page = () => {
    return (
        <section>
            <HomeBanner/>
            <HeroSection/>
            <CourseAvailable/>
            <HomeBanner2/>
            <ProgramComponent/>
            <EventComponent/>
            <Testimonials/>
        </section>
    );
};

export default Page;