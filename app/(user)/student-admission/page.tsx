import { AddStudentAmsForm } from "@/components/student-admission/AddStudentAmsForm";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "ISTAD LMS Job Opportunity",
    description: "ISTAD Learning Management System is an advanced web application designed to streamline student management and offer comprehensive tools for instructors and administrators. Our platform ensures efficient communication, seamless course management, and a superior learning experience for all users.",
    openGraph: {
        title: "ISTAD LMS Admission",
        description:
            "ISTAD Learning Management System is a web application for managing students and providing a robust system for instructors and administrators.",
        images: "https://lms-api.istad.co/api/v1/medias/view/c3ca024c-f93a-4454-83b0-6957f79eab3c.png",
    },
};

export default function Users() {
    return (
        <main className="flex flex-col p-9 gap-6">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link href="/admissions/student-admission" legacyBehavior passHref>
                                <BreadcrumbLink>STUDENT ADMISSION</BreadcrumbLink>
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <h3 className="font-semibold text-lms-primary">ADD</h3>
                </BreadcrumbList>
            </Breadcrumb>
            <section className="flex w-full justify-center items-center">
                <AddStudentAmsForm/>
            </section>
        </main>
    );
}
